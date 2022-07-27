import Button from './components/Button';
import WeatherInfo from './components/WeatherInfo';
import Input from './components/Input';
import { Background, Container } from './components/Utils';
import { MagnifyingGlass } from 'phosphor-react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { WeatherData } from './types/General';
import Alert, { AlertProps } from './components/Alert';

export default function App() {
  // Base API call URL without query param

  const [inputText, setInputText] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AlertProps>({
    visible: false,
    errorColor: 'error',
    msg: '',
  });

  // Get location by IP
  function requestIP() {
    return axios.get('https://ipapi.co/json/');
  }

  // Get city info by latitude and longitude
  function requestReverseGeocode(lat: string, lon: string) {
    return axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=pt&key=bdc_dcd1b637249e4b64a5123dd27f28a5d6`
    );
  }

  // Get weather data by latitude and longitude
  function requestWeatherData(lat: string, lon: string) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=905806795b31be3358d6b828a6596640&units=metric`
    );
  }

  function requestWeatherDataByCity(input: string) {
    // Get data from API with Axios and set it on data state
    return axios.get(
      window.encodeURI(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=905806795b31be3358d6b828a6596640&units=metric`
      )
    );
  }

  // Get all info from device IP
  function getAllDataByIP() {
    requestIP().then((res: AxiosResponse) => {
      axios
        .all([
          requestReverseGeocode(res.data.latitude, res.data.longitude),
          requestWeatherData(res.data.latitude, res.data.longitude),
        ])
        .then(
          axios.spread((...responses) => {
            const cityInfo = responses[0].data;
            const weatherData = responses[1].data;

            setData({
              temp: Math.floor(weatherData.main.temp),
              humidity: weatherData.main.humidity,
              wind: (weatherData.wind.speed * 3.6).toFixed(2),
              weatherIcon: weatherData.weather[0].icon,
              city: cityInfo ? cityInfo.city : '',
              state: cityInfo ? cityInfo.principalSubdivision : '',
              country: cityInfo ? cityInfo.countryName : '',
            });
            setLoading(false);
          })
        );
    });
  }

  // Get all info from city input
  function getAllDataByInput(input: string) {
    setLoading(true);
    setError((prevState) => ({ ...prevState, visible: false }));

    if (city !== '') {
      // Get data from API with Axios and set it on data state
      requestWeatherDataByCity(input)
        .then((resp: AxiosResponse) => {
          requestReverseGeocode(resp.data.coord.lat, resp.data.coord.lon).then(
            (res) => {
              const cityInfo = res.data;
              const weatherData = resp.data;

              setData({
                temp: Math.floor(weatherData.main.temp),
                humidity: weatherData.main.humidity,
                wind: (weatherData.wind.speed * 3.6).toFixed(2),
                weatherIcon: weatherData.weather[0].icon,
                city: cityInfo ? cityInfo.city : '',
                state: cityInfo ? cityInfo.principalSubdivision : '',
                country: cityInfo ? cityInfo.countryName : '',
              });
              setLoading(false);
            }
          );
        })
        .catch((e: AxiosError) => {
          if (e.response?.status === 404) {
            setError({
              msg: 'Cidade não encontrada',
              errorColor: 'error',
              visible: true,
            });
          }
        });
    }
  }

  // On page loading, fetch ipify API for IP address and fetch WeatherAPI with that IP
  useEffect(() => {
    getAllDataByIP();
  }, []);

  // On every change of city state, fetch WeatherAPI using Axios
  useEffect(() => {
    getAllDataByInput(city);
  }, [city]);

  // Get input value on every change and set it on InputText state
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  // Set inputText state on city state
  function handleButtonClick() {
    setCity(inputText);
  }

  return (
    <>
      <Background />
      <Alert
        visible={error.visible}
        msg={error.msg}
        errorColor={error.errorColor}
      />
      <Container centered gap={12} margin='48px 228px'>
        <Input
          placeholder='Nome da cidade. Ex: Umuarama, PR'
          onChange={handleInputChange}
          onKeyDown={(e: KeyboardEvent<HTMLElement>) => {
            if (e.key === 'Enter') {
              handleButtonClick();
            }
          }}
        ></Input>
        <Button onClick={handleButtonClick}>
          Buscar
          <MagnifyingGlass size={18} weight='bold' />
        </Button>
      </Container>
      <Container margin='48px 228px'>
        <WeatherInfo loading={loading} data={data}></WeatherInfo>
      </Container>
    </>
  );
}

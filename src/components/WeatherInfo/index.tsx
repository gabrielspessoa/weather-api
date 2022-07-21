import { CloudRain, Drop, Thermometer, Wind } from 'phosphor-react';
import * as Styled from './styles';
import sunIcon from '../../../public/assets/icons/sun.json';

interface WeatherInfoProps {
  children?: JSX.Element | JSX.Element[];
  icon?: any;
}

export default function WeatherInfo(props: WeatherInfoProps) {
  return (
    <>
      <Styled.MainContainer>
        <Styled.SectionContainer>
          <Styled.IconDegreeContainer>
            <Styled.LottieContainer
              animationData={sunIcon}
              play
              loop
              speed={0.4}
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
            <Styled.DegreeWrapper>
              <Thermometer size={28} weight='bold' /> 17 <sup>ºC</sup>
            </Styled.DegreeWrapper>
          </Styled.IconDegreeContainer>
          <Styled.LocationWrapper>
            Umuarama, Paraná
            <br />
            Brasil
          </Styled.LocationWrapper>
        </Styled.SectionContainer>
        <Styled.SectionContainer>
          <Styled.InfoList>
            <Styled.InfoItem>
              <Styled.ToolTip>Humidade</Styled.ToolTip>
              <Drop size={30} />
              <span>70%</span>
            </Styled.InfoItem>
            <Styled.InfoItem>
              <Styled.ToolTip>Precipitação</Styled.ToolTip>
              <CloudRain size={30} />
              <span>1%</span>
            </Styled.InfoItem>
            <Styled.InfoItem>
              <Styled.ToolTip>Vento</Styled.ToolTip>
              <Wind size={30} />
              <span>18 km/h</span>
            </Styled.InfoItem>
          </Styled.InfoList>
        </Styled.SectionContainer>
      </Styled.MainContainer>
    </>
  );
}

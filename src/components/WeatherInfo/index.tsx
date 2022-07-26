/// <reference types="vite-plugin-svgr/client" />

import { CloudRain, Drop, Thermometer, Wind } from 'phosphor-react';
import * as Styled from './styles';
import { ReactComponent as DayIcon } from '../../assets/icons/test/dayC.svg';
import { ReactComponent as NightIcon } from '../../assets/icons/test/nightC.svg';
import { ReactComponent as RainyIcon } from '../../assets/icons/test/rainyC.svg';
import { WeatherData } from '../../types/General';
import { memo } from 'react';

interface WeatherInfoProps {
  loading?: boolean;
  data?: WeatherData | null;
}

function Icon(props: any) {
  return (
    <Styled.IconContainer>
      <img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}></img>
    </Styled.IconContainer>
  );
}

const WeatherInfo = memo(function WeatherInfo(props: WeatherInfoProps) {
  return (
    <>
      <Styled.MainContainer>
        <Styled.SectionContainer>
          <Styled.IconInfoContainer>
            <Styled.InfoContainer>
              {props.loading ? (
                <Styled.IconShimmerWrapper>
                  <Styled.IconShimmer />
                </Styled.IconShimmerWrapper>
              ) : (
                <Icon icon={props.data?.weatherIcon} />
              )}
              <Styled.DegreeWrapper>
                {props.loading ? (
                  <>
                    <Styled.SmallIconShimmer />
                    <Styled.TextShimmer
                      height={60}
                      width={78}
                      margin='0 0 0 12px'
                    />
                  </>
                ) : (
                  <>
                    <Thermometer size={28} weight='bold' />
                    {props.data?.temp}
                    <sup>ºC</sup>
                  </>
                )}
              </Styled.DegreeWrapper>
            </Styled.InfoContainer>

            <Styled.InfoList>
              <Styled.InfoItem>
                {props.loading ? (
                  <>
                    <Styled.SmallIconShimmer />
                    <Styled.TextShimmer height={18} />
                  </>
                ) : (
                  <>
                    <Styled.ToolTip>Humidade</Styled.ToolTip>
                    <Drop size={30} />
                    <span>{props.data?.humidity}%</span>
                  </>
                )}
              </Styled.InfoItem>
              {/* <Styled.InfoItem>
                        {props.loading ? (
                          <>
                            <Styled.SmallIconShimmer />
                            <Styled.TextShimmer height={18} />
                          </>
                        ) : (
                          <>
                            <Styled.ToolTip>Precipitação</Styled.ToolTip>
                            <CloudRain size={30} />
                            <span>1%</span>
                          </>
                        )}
                      </Styled.InfoItem> */}
              <Styled.InfoItem>
                {props.loading ? (
                  <>
                    <Styled.SmallIconShimmer />
                    <Styled.TextShimmer height={18} width={66} />
                  </>
                ) : (
                  <>
                    <Styled.ToolTip>Vento</Styled.ToolTip>
                    <Wind size={30} />
                    <span>{props.data?.wind} km/h</span>
                  </>
                )}
              </Styled.InfoItem>
            </Styled.InfoList>
          </Styled.IconInfoContainer>

          <Styled.LocationWrapper>
            {props.loading ? (
              <>
                <Styled.TextShimmer
                  height={42}
                  width={366}
                  margin='0 0 6px 0'
                />
                <Styled.TextShimmer height={42} width={108} />
              </>
            ) : (
              <>
                {props.data?.city != '' ? `${props.data?.city}, ` : null}
                {props.data?.state}
                <br />
                {props.data?.country}
              </>
            )}
          </Styled.LocationWrapper>
        </Styled.SectionContainer>
      </Styled.MainContainer>
    </>
  );
});

export default WeatherInfo;

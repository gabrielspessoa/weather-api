import Lottie from 'react-lottie-player';
import styled, { css, keyframes } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.123);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  padding: 30px 60px;
  border-radius: 30px;
  height: 400px;
  width: 100%;
  box-sizing: border-box;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconDegreeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const LottieContainer = styled(Lottie)`
  width: 192px;
  height: 192px;
`;

export const DegreeWrapper = styled.span`
  font-size: 60px;
  font-weight: 600;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 12px;
  }
`;

export const LocationWrapper = styled.span`
  font-size: 36px;
  font-weight: 600;
`;

export const InfoList = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 54px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 12px;
  font-size: 18px;
`;

export const ToolTip = styled.span`
  position: absolute;
  top: -70%;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 12px;
  font-family: 'Lato';
  background-color: #2f2f2f;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  ${InfoItem}:hover & {
    opacity: 1;
    visibility: visible;
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: #2f2f2f transparent transparent transparent;
  }
`;

// ====== SHIMMER ======

const ShimmerAnimation = keyframes`
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
`;

const ShimmerBG = css`
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmerAnimation};
  animation-timing-function: linear;
  background: #ddd;
  background: linear-gradient(
    to right,
    rgb(246 246 246 / 20%) 8%,
    rgb(194 194 194 / 20%) 18%,
    rgb(246 246 246 / 20%) 33%
  );
  background-size: 1200px 100%;
`;

export const IconShimmerWrapper = styled.div`
  width: 192px;
  height: 192px;
  padding: 30px;
  box-sizing: border-box;
`;

export const IconShimmer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 999px;

  ${ShimmerBG};
`;

export const SmallIconShimmer = styled.div<{ size?: number }>`
  width: ${(props) => (props.size ? props.size : 28)}px;
  height: ${(props) => (props.size ? props.size : 28)}px;
  border-radius: 999px;

  ${ShimmerBG}
`;

export const TextShimmer = styled.div<{
  width?: number;
  height?: number;
  margin?: string;
}>`
  width: ${(props) => (props.width ? props.width : 28)}px;
  height: ${(props) => (props.height ? props.height : 28)}px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  border-radius: 30px;

  ${ShimmerBG}
`;

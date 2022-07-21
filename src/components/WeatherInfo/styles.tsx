import Lottie from 'react-lottie-player';
import styled from 'styled-components';

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

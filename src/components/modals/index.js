import {styled} from 'styled-components/native';

export const ModalContainer = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 20px;
  height: 700px;
  background-color: linear-gradient(
    168deg,
    rgba(46, 51, 90, 0.26) 10%%,
    rgba(28, 27, 51, 0.26) 100%
  );
  position: absolute;
  border-radius: 44px;
  bottom: -500px;
  box-shadow: 0px 1px 0px white;
  backdrop-filter: blur(50px);
`;

export const HomeIndicator = styled.View`
  display: flex;
  height: 50px;
  width: 100%;
  color: #e0d9ff;
  background: rgba(195.88, 39, 251, 0.5);
  box-shadow: 60px 60px 60px;
  filter: blur(60px);
  top: -20px;
  border-radius: 9999px;
`;

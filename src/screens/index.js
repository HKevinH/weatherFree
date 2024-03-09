import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    background: 'linear-gradient(168deg, #2E335A 1.62%, #1C1B33 95.72%)',
    boxShadow: '-40px 60px 150px 0px rgba(59, 38, 123, 0.70)',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  img: {
    width: 390,
    height: 390,
  },
  containerWeather: {
    paddingLeft: '50%',
    paddingRight: '50%',
  },
  textWeather: {
    color: '#fff',
    zIndex: 90,
    fontSize: 45,
  },
});

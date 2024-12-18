import {useWindowDimensions} from 'react-native';

export const useLayouContainer = () => {
  const {width, height} = useWindowDimensions();

  return {
    width,
    height,
  };
};

import React, {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {Image} from 'react-native-elements';
import Modal from '../components/modals/Modal';
import {TextLarge, TextMedium, TextSmall} from '../styles-globals/TextStyles';
import {Container, styles} from './index';

const imagen = require('../assets/images/Bg.png');
function HomeScreen() {
  useEffect(() => {
    FontList();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bg} source={imagen} resizeMode="cover">
        <Container>
          <TextMedium style={styles.textWeather}>City</TextMedium>
          <TextLarge>19</TextLarge>
          <TextMedium style={styles.textWeather}>City</TextMedium>
          <TextSmall style={{color: '#000'}}>City</TextSmall>
          <Image
            source={require('../assets/images/House.png')}
            style={styles.img}
          />
        </Container>
      </ImageBackground>
      <Modal />
    </View>
  );
}

export default HomeScreen;

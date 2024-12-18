import {Image, ImageURISource, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WeatherColors} from '../../constants/colors';

interface Props {
  img: ImageURISource;
  hours: string;
  label: string;
  temperature: string;
}

export const CardForecast: React.FC<Props> = ({
  img,
  temperature,
  label,
  hours,
}) => {
  return (
    <View style={style.containerCard}>
      <Text style={style.title}>{hours}</Text>
      <View style={style.containerImg}>
        <Image source={img} style={style.img} />
        <Text style={style.textImg}>{label}</Text>
      </View>

      <Text style={style.footerText}>{temperature}°</Text>
    </View>
  );
};

const style = StyleSheet.create({
  containerCard: {
    borderRadius: 70,
    padding: 10,
    width: 80,
    height: 180,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    // flex: 1,
    backgroundColor: WeatherColors.solid?.darkPurple,

    // Shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 10,
  },

  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textImg: {
    color: '#40CBD8',
  },
  img: {
    height: 45,
    width: 40,
  },

  title: {
    fontSize: 18,
    color: 'white',
  },

  footerText: {
    fontSize: 22,
    color: 'white',
  },
});

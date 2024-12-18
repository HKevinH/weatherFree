/* eslint-disable react/react-in-jsx-scope */
import {
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/icons/Image.png')}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.imgBg}>
        <View style={styles.content}>
          <Text style={styles.title}>Bienvenido a la Home Screen</Text>
          <Button
            title="Ir a Detalles"
            onPress={() =>
              navigation.navigate('Details', {
                itemId: 42,
                message: 'Hola desde Home!',
              })
            }
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
});

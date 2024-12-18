/* eslint-disable react/react-in-jsx-scope */
import {Text, Button, StyleSheet, ImageBackground} from 'react-native';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../../assets/icons/Image.png')}>
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
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {fontSize: 20, marginBottom: 10},
});

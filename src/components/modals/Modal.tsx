import React, {useState} from 'react';
import {TouchableHighlight} from 'react-native';
import {Overlay, Text} from 'react-native-elements';
import {HomeIndicator, ModalContainer} from './index';

const Modal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <TouchableHighlight onPress={() => setVisible(true)}>
      <ModalContainer>
        <HomeIndicator />
        <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </ModalContainer>
    </TouchableHighlight>
  );
};

export default Modal;

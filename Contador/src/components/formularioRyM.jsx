import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Modal, Image} from 'react-native';

const FormRM = props => {
  const {modalVisible, setModalVisible, dataPersonaje} = props;

  return (
    <View>
      <Modal visible={modalVisible}>
        <View style={flows.modalFlow}>
          <Image style={flows.imageFlow} source={{uri: dataPersonaje.image}} />
          <Text style={flows.textFlow}>Personaje: {dataPersonaje.name}</Text>
          <Button
            title="cerrar Modal"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

const flows = StyleSheet.create({
  modalFlow: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFlow: {
    fontSize: 33,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  imageFlow: {width: 500, height: 500, resizeMode: 'contain'},
});

export default FormRM;

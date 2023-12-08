import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, ToastAndroid} from 'react-native';
import FormRM from './src/components/formularioRyM';
import axios from 'axios';

const App = () => {
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const [personajes, setPersonajes] = useState([]);
  const [personaje, setPersonaje] = useState({});

  const updateData = () => {
    const nrand = Math.floor(Math.random() * 100) % 20;
    console.log(personajes[nrand]);
    setPersonaje({
      name: personajes[nrand].name,
      image: personajes[nrand].image,
    });
  };

  useEffect(() => {
    if (!personajes.length) {
      axios.get('https://rickandmortyapi.com/api/character').then(respuesta => {
        const temp = [];
        Object.values(respuesta.data.results).forEach(val => {
          const {name, image} = val;
          temp.push({name, image});
        });
        console.log(temp);
        setPersonajes(temp);
        updateData();
      });
    } else {
      updateData();
    }
  }, [personajes, visible]);

  return (
    <View style={style.flow}>
      <Text style={style.textFlow}>contador: {contador}</Text>

      <View style={style.interViewFlow}>
        <Button
          title="sumador"
          onPress={() => {
            if (contador < 10) {
              setContador(contador + 1);
            } else {
              ToastAndroid.show('Contador lleno', ToastAndroid.SHORT);
            }
          }}
        />
        <Button
          title="restador"
          onPress={() => {
            if (contador > 0) {
              setContador(contador - 1);
            }
          }}
        />
        <Button
          title="Rick & Morty info"
          onPress={() => {
            setVisible(!visible);
          }}
        />
      </View>
      <FormRM
        modalVisible={visible}
        setModalVisible={setVisible}
        dataPersonaje={personaje}
      />
    </View>
  );
};

const style = StyleSheet.create({
  flow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textFlow: {
    fontSize: 33,
    textAlign: 'center',
    marginBottom: 40,
  },
  interViewFlow: {
    flex: 1 / 4,
    justifyContent: 'space-between',
  },
});

export default App;

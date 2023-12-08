import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [displayName, setDisplayName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.imagen} source={require('./assets/LIS.jpg')} />
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Tu Nombre:</Text>
          <TextInput
            style={styles.titulo}
            placeholder="Escribe Aqui"
            onChangeText={textoActual => {
              setNombre(textoActual);
            }}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{displayName}</Text>
      </View>
      <View style={styles.container}>
        <Button
          title="SALUDAR"
          onPress={() => {
            if (!nombre.length) {
              ToastAndroid.show('No has ingresado nada', ToastAndroid.SHORT);
              setDisplayName('');
            } else {
              setDisplayName(`Hola ${nombre} Bienvenido al curso DDA!`);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  titulo: {
    fontSize: 30,
    color: 'black',
  },
  imagen: {
    position: 'relative',
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: 200,
  },
});

export default App;

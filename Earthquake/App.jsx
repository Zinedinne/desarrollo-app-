import React, {useEffect, useState} from 'react';
import {View, Text, Button, Pressable} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EarthquakeList from './src/components/List';
import DetailView from './src/screens/ViewInformation';

const Stack = createNativeStackNavigator();

const App = () => {
  const options = [
    {order: 'Sin Orden', index: 0},
    {order: 'En Orden', index: 1},
    {order: 'En Reversa', index: -1},
  ];
  const [optionPosition, setOptionPosition] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={EarthquakeList}
          params={{orderPriority: optionPosition}}
          options={{
            title: 'Terremotos OwO',
            headerRight: () => (
              <Pressable
                style={{
                  backgroundColor: '#6A95E4',
                  padding: 8,
                  borderRadius: 15,
                  opacity: 0.8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
                onPress={() => {
                  setOptionPosition((optionPosition + 1) % 3);
                }}>
                <Text style={{color: '#000', fontSize: 18}}>
                  {options[optionPosition].order}
                </Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="details"
          component={DetailView}
          options={{title: 'detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

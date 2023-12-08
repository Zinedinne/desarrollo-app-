import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';


const Option = props => {
  const {callback, option, setVisible} = props;
  return (
    <View>
      <Pressable
        onPress={() => {
          callback(option);
          setVisible(false);
        }}>
        <Text>{option.data}</Text>
      </Pressable>
    </View>
  );
};

const Label = props => {
  const {data, setVisible} = props;
  return (
    <View>
      {/* <FlatList
        data={data}
        keyExtractor={item => data.index}
        renderItem={item => {
          return <Option

          />;
        }}
      /> */}
      <Text>Opcion</Text>
    </View>
  );
};

const Dropdown = props => {};

export default Dropdown;

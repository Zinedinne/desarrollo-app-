import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const Data = [
  {Minimal_range: -Infinity, Maximal_range: 18.4, info: 'Under Weight'},
  {Minimal_range: 18.5, Maximal_range: 24.9, info: 'Normal Weight'},
  {Minimal_range: 25.0, Maximal_range: 29.9, info: 'Overweight'},
  {Minimal_range: 30, Maximal_range: 34.9, info: 'Class 1 Obesity'},
  {Minimal_range: 35, Maximal_range: 39.9, info: 'Class 2 Obesity'},
  {Minimal_range: 40, Maximal_range: Infinity, info: 'Class 3 Obesity'},
];

const ColorSelect = [
  '#6699ff',
  '#95cc6a',
  '#fff56c',
  '#fec665',
  '#e44d39',
  '#f287b7',
];

const formatText = range => {
  let messaje = '';
  if (range.Minimal_range === -Infinity) {
    messaje = '< ' + range.Maximal_range;
  } else if (range.Maximal_range === Infinity) {
    messaje = '> ' + range.Minimal_range;
  } else {
    messaje = `${range.Minimal_range} - ${range.Maximal_range}`;
  }
  return messaje;
};

const Information = props => {
  const {heigth, weigth, bmi} = props;
  const [colorCell, setColorCell] = useState([
    '#e5e5e5',
    '#e5e5e5',
    '#e5e5e5',
    '#e5e5e5',
    '#e5e5e5',
    '#e5e5e5',
  ]);

  useEffect(() => {
    let position = 0;
    for (position = 0; position < colorCell.length; position += 1) {
      if (
        bmi >= Data[position].Minimal_range &&
        bmi <= Data[position].Maximal_range
      ) {
        break;
      }
    }
    const clone = [...colorCell];
    clone[position] = ColorSelect[position];
    setColorCell(clone);
    // console.log(clone);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerData}>
        <View style={styles.formatData}>
          <Text style={styles.dataHeader}>Height {'(CM)'}</Text>
          <Text style={styles.dataContent}>{heigth}</Text>

          <Text style={styles.dataHeader}>Weight {'(KG)'}</Text>
          <Text style={styles.dataContent}>{weigth}</Text>
        </View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={[styles.exampleText, {color: '#000'}]}>BMI</Text>
      </View>
      <View style={styles.containerResult}>
        {/* {console.log(bmi)} */}
        <Text style={styles.exampleText}>{bmi}</Text>
      </View>
      <View style={styles.containerTable}>
        <View style={styles.tableContainer}>
          <FlatList
            data={Data}
            keyExtractor={item => item.info}
            renderItem={({item, index}) => {
              return (
                <View
                  style={[
                    styles.cellContainer,
                    {backgroundColor: colorCell[index]},
                  ]}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      alignContent: 'stretch',
                      marginHorizontal: 10,
                    }}>
                    <Text style={styles.textCell}>
                      {formatText({
                        Minimal_range: item.Minimal_range,
                        Maximal_range: item.Maximal_range,
                      })}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.textCell}>{item.info}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  exampleText: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: '600',
    color: '#726f6f',
  },
  containerData: {
    flex: 0.4,
    borderColor: '#F7A31B',
  },
  containerTitle: {
    flex: 0.6,
    borderColor: '#F7A31B',
    justifyContent: 'center',
  },
  containerResult: {
    flex: 0.4,
    borderColor: '#F7A31B',
    justifyContent: 'center',
  },
  containerTable: {
    flex: 4,
    borderColor: '#F7A31B',
  },
  formatData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dataHeader: {
    fontSize: 20,
    color: '#000',
    fontWeight: '800',
  },
  dataContent: {
    fontSize: 18,
    color: '#726f6f',
    fontWeight: '700',
  },
  tableContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20,
  },
  cellContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    paddingVertical: 20,
  },
  textCell: {
    fontSize: 15,
    fontWeight: '600',
    color: '#202020',
  },
});
export default Information;

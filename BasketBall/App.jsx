import React, {useState} from 'react';
import {
  useColorScheme,
  SafeAreaView,
  Text,
  View,
  Modal,
  Image,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SvgUri} from 'react-native-svg';
import {getLocales} from 'react-native-localize';
import en from './lang/locales/en';
import es from './lang/locales/es';

const language = {
  es,
  en,
};

const t = word => {
  const locale = getLocales()[0].languageCode;
  //   console.log(JSON.stringify(getLocales(), null, 4));
  const lang = locale !== undefined ? locale : 'en';
  let translation = `${word} is undefined`;
  if (language[lang][word]) {
    translation = language[lang][word];
  }
  return translation;
};

const ball = require('./assets/basket.png');

const Stack = createNativeStackNavigator();

const Home = props => {
  const [pointLocal, setPointLocal] = useState(0);
  const [pointGuest, setPointGuest] = useState(0);
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.localContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{t('local')}</Text>
        </View>
        <View style={styles.containerMarker}>
          <View style={styles.containerPointButton}>
            <Button
              title="-1"
              onPress={() => {
                if (pointLocal >= 1) {
                  setPointLocal(pointLocal - 1);
                } else {
                  setPointLocal(0);
                }
              }}
            />
          </View>
          <Text style={styles.title}>{pointLocal}</Text>
          <View style={styles.containerPointButton}>
            <Button
              title="+1"
              onPress={() => {
                setPointLocal(pointLocal + 1);
              }}
            />
            <Button
              title="+2"
              onPress={() => {
                setPointLocal(pointLocal + 2);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View>
          <Pressable
            onPress={() => {
              setPointGuest(0);
              setPointLocal(0);
            }}>
            <SvgUri
              width="50"
              height="50"
              uri="https://www.svgrepo.com/show/14059/refresh.svg"
            />
          </Pressable>
        </View>
        <View>
          <Image style={{width: 100, height: 100}} source={ball} />
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate('Detail', {
                localPoints: pointLocal,
                guestPoints: pointGuest,
              });
            }}>
            <SvgUri
              width="50"
              height="50"
              uri="https://www.svgrepo.com/show/449159/next.svg"
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.guestContainer}>
        <View style={styles.containerMarker}>
          <View style={styles.containerPointButton}>
            <Button
              title="-1"
              onPress={() => {
                if (pointGuest >= 1) {
                  setPointGuest(pointGuest - 1);
                } else {
                  setPointGuest(0);
                }
              }}
            />
          </View>
          <Text style={styles.title}>{pointGuest}</Text>
          <View style={styles.containerPointButton}>
            <Button
              title="+1"
              onPress={() => {
                setPointGuest(pointGuest + 1);
              }}
            />
            <Button
              title="+2"
              onPress={() => {
                setPointGuest(pointGuest + 2);
              }}
            />
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{t('guest')}</Text>
        </View>
      </View>
    </View>
  );
};

const Detail = props => {
  const {navigation, route} = props;
  const checkWin = () => {
    const {localPoints, guestPoints} = route.params;
    if (localPoints === guestPoints) {
      return t('miss');
    } else if (localPoints > guestPoints) {
      return t('localWin');
    } else {
      return t('guestWin');
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.5, alignItems: 'flex-start', marginTop: 20}}>
        <Text style={styles.title}>
          {t('local')} - {t('guest')}
        </Text>
      </View>
      <View styles={{flex: 1}}>
        <Text
          style={[
            styles.title,
            {fontWeight: '400', fontSize: 80, textTransform: 'capitalize'},
          ]}>
          {route.params.localPoints} - {route.params.guestPoints}
        </Text>
        <Text style={[styles.title, {textTransform: 'capitalize'}]}>
          {checkWin()}
        </Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: t('home'),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: t('detail'),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  localContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#FF928B',
  },
  guestContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#FFAC81',
  },
  containerTitle: {
    flex: 0.5,
    paddingTop: 5,
    justifyContent: 'center',
  },
  containerMarker: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-around',
  },
  containerPointButton: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: '#CDEAC0',
  },
  title: {
    color: '#000',
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: '700',
  },
});

export default App;

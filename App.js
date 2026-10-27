
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';
import * as Crypto from 'expo-crypto';

export default function App() {
  var uuid = Crypto.randomUUID();

  const [booking, setBooking] = useState({
    bookDate: "2026-10-19",
    movieTitle: "",
    numberOfSeats: 0,
    balcony: 0,
  });

  async function saveData() {
    alert("Saved with UUID: " + uuid);
  }

  return (
    <View style={styles.screencontainer}>

      <View style={styles.imgview}>
        <Image
          source={require('./assets/moviesV3.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Swiper
        showsButtons={true}
        loop={false}
        style={styles.swiper}
      >
        <PersonalInfo
          screenstyle={styles.screen}
          data={booking}
          setData={setBooking}
        />

        <MovieBooking
          screenstyle={styles.screen}
          data={booking}
          setData={setBooking}
        />
      </Swiper>

      <TouchableOpacity
        style={styles.button}
        onPress={saveData}
      >
        <Text style={styles.buttonText}>
          Save Data
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 35,
  },
  imgview: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '100%',
  },
  swiper: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: 15,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#dddddd',
    padding: 14,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

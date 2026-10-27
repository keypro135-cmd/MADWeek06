
import { useState, useRef } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const uuid = useRef(Crypto.randomUUID()).current;

  const [booking, setBooking] = useState({
    bookDate: "2026-10-19",
    movieTitle: "",
    numberOfSeats: 0,
    balcony: 0,
  });

  async function saveData() {
    try {
      await AsyncStorage.setItem(uuid, JSON.stringify(booking));
      alert("Saved with UUID: " + uuid);
    } catch (error) {
      alert("Error saving data: " + error.message);
    }
  }

  async function getData() {
    try {
      let thisBooking = await AsyncStorage.getItem(uuid);

      if (thisBooking === null) {
        alert("No saved booking found.");
        return;
      }

      let parsedBooking = JSON.parse(thisBooking);

      alert("Movie Title: " + parsedBooking.movieTitle);

    } catch (error) {
      alert("Error getting data: " + error.message);
    }
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

      <TouchableOpacity
        style={styles.button}
        onPress={getData}
      >
        <Text style={styles.buttonText}>
          Get Data
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
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

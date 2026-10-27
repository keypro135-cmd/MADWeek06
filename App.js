

import { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';
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
    Alert.alert("Saved with UUID: " + uuid);
  }

  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}>
        <Image source={require('./assets/moviesV3.png')}/>
      </View>

      <Swiper showsButtons={true}>
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

      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>
          Save Data
        </Text>
      </TouchableOpacity>
    </View>
  );
}

var width = Dimensions.get('window');

const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: .5,
    marginTop: "8%"
  },
  screencontainer: {
    flexDirection: "column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey"
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%"
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
    borderRadius: 5
  }
});


import {
  Text,
  StyleSheet,
  View,
  Switch
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DatePicker from '../components/DatePicker';
import { useState } from 'react';

export default function MovieBooking({screenstyle, data, setData}) {

  const [totalTickets, setTotaltickets] = useState(1);
  const [balcony, setBalcony] = useState(false);
  const [movieDate, setMoviedate] = useState(new Date());

  const [movieList, setMovieList] = useState([
    { id: 1, title: "Kneecap", age: 16 },
    { id: 2, title: "Joker, Folie a Deux", age: 18 },
    { id: 3, title: "Deadpool and Wolverine", age: 12 }
  ]);

  function handleChangeMovieTitle(newTitle) {
    setData(data => ({
      ...data,
      movieTitle: newTitle
    }));
  }

  return (
    <View style={screenstyle}>

      <Text style={styles.label}>Choose Movie</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={data.movieTitle}
          onValueChange={(itemValue) => handleChangeMovieTitle(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a movie" value="" />
          {movieList.map((movie) => (
            <Picker.Item
              key={movie.id}
              label={movie.title}
              value={movie.title}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.section}>
        <DatePicker
          thisDate={movieDate}
          setThisdate={setMoviedate}
          datelabel="Showing Date"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>
          Number of Tickets: {totalTickets}
        </Text>

        <Slider
          minimumValue={0}
          maximumValue={5}
          step={1}
          value={totalTickets}
          style={styles.sliderstyle}
          onValueChange={setTotaltickets}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Balcony</Text>
        <Switch
          value={balcony}
          onValueChange={setBalcony}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 55,
  },
  section: {
    marginBottom: 15,
  },
  sliderstyle: {
    width: '100%',
    height: 40,
  },
});

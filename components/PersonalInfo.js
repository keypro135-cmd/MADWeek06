
import {
  Text,
  TextInput,
  StyleSheet,
  View
} from 'react-native';

import DatePicker from '../components/DatePicker.js';
import { useState } from 'react';

export default function PersonalInfo({screenstyle, data, setData}) {

  const [dob, setDob] = useState(new Date("2000-01-01"));

  return (
    <View style={screenstyle}>

      <Text style={styles.label}>Firstname</Text>
      <TextInput
        style={styles.textbox}
        placeholder="Enter your first name"
      />

      <Text style={styles.label}>Lastname</Text>
      <TextInput
        style={styles.textbox}
        placeholder="Enter your last name"
      />

      <View style={styles.section}>
        <DatePicker
          thisDate={dob}
          setThisdate={setDob}
          datelabel="Date of Birth"
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
  textbox: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    fontSize: 16,
    marginBottom: 18,
    backgroundColor: 'white',
  },
  section: {
    marginTop: 5,
  },
});

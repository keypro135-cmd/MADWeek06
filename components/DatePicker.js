
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function DatePicker({ thisDate, setThisdate, datelabel }) {
  const [showDTP, setShowDTP] = useState(false);

  function showDatePicker() {
    setShowDTP(true);
  }

  function hideDatePicker(event, selectedDate) {
    setShowDTP(false);

    if (event.type === 'set' && selectedDate) {
      setThisdate(selectedDate);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{datelabel}</Text>

      <Text style={styles.textbox}>
        {thisDate.toLocaleDateString()}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={showDatePicker}
      >
        <Text style={styles.buttonText}>Choose Date</Text>
      </TouchableOpacity>

      {showDTP && (
        <DateTimePicker
          value={thisDate}
          mode="date"
          display="default"
          onChange={hideDatePicker}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
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
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#0569FF',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

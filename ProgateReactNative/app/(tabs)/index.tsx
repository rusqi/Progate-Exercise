import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#674f74',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFF',
  },
});

export default App;
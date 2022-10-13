import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';	

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_960_720.jpg"}} style={styles.logo} />
      <Text style={styles.instructions}>¡Para compartir una foto desde tu teléfono con un amigo, solo presiona el botón de abajo!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => alert('QUE DUROOOOO')}
        style={{ backgroundColor: 'blue'}}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Klk' Nelson' toca mi boton </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },

});

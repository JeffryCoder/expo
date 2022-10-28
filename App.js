import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import logo from './assets/logo.png';	
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from 'expo-image-manipulator';

// INICIO DE DEPURACION DE IMAGEN SPLASH
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);
// FINAL DE DEPURACION DE IMAGEN SPLASH


export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });

    console.log(pickerResult); // for debugging
  
  };

  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web'){
      alert('Oye, manito, esta aplicación no funciona en la web. Descarga la app en tu celular.');
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  };




  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />

        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Compartir esta foto</Text>
        </TouchableOpacity>
      </View>
  
    );
  };
  return (
    <View style={styles.container}>

      <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_960_720.jpg"}} style={styles.logo} />
      <Text style={styles.instructions}>¡Para compartir una foto desde tu teléfono con un amigo, solo presiona el botón de abajo!</Text>
      <Text style={styles.instructions}></Text>
      
      <StatusBar style="auto" />
  
      
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Selecciona una foto</Text>
      </TouchableOpacity>

      <Text style={styles.instructions}>Por JeffryCoder</Text>
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
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
  },

});

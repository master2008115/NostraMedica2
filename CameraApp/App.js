//KAlU's App
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [photoUri, setPhotoUri] = useState(null);

  
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required!');
      return;
    }

    // Launch the camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    // If the user took a photo, store its URI in `photoUri`
    if (!result.canceled) {
      setPhotoUri(result.uri);  
      console.log('Photo URI:', result.uri);  
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Press the button to open the camera</Text>
      <Button
        title="Open Camera"
        onPress={openCamera}
        color="#8A9E9F"  // Button text color set to owl blue
      />
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',  
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',  
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,  
  },
});


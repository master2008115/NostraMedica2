// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// App.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);

//   // Request camera permission
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   // Handle camera access denial
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isCameraOpen ? (
//         <Camera style={styles.camera} />
//       ) : (
//         <>
//           <Text style={styles.text}>Press the button to open the camera</Text>
//           <Button title="Open Camera" onPress={() => setIsCameraOpen(true)} />
//         </>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   camera: {
//     flex: 1,
//     width: '100%',
//   },
// });



import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [photoUri, setPhotoUri] = useState(null);

  // Function to open the device camera
  const openCamera = async () => {
    // Request permissions to access the camera
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
      setPhotoUri(result.uri);  // photoUri can now be used as the captured image
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Press the button to open the camera</Text>
      <Button title="Open Camera" onPress={openCamera} />
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
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

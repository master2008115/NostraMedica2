// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('./assets/MainLogo1.png')} 
//         style={styles.image}
//         resizeMode="contain" 
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#E0CEC1', 
//   },
//   image: {
//     width: '80%', 
//     height: '50%',
//   },
// });



// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome, Entypo } from '@expo/vector-icons';

// export default function SignUpScreen() {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>

//       {/* Name Input */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="user" size={20} color="#8E8E8E" />
//         <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#8E8E8E" />
//       </View>

//       {/* Email Input */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="envelope" size={20} color="#8E8E8E" />
//         <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#8E8E8E" />
//       </View>

//       {/* Password Input */}
//       <View style={styles.inputContainer}>
//         <Entypo name="lock" size={20} color="#8E8E8E" />
//         <TextInput style={styles.input} placeholder="Enter your password" placeholderTextColor="#8E8E8E" secureTextEntry />
//         <Entypo name="eye-with-line" size={20} color="#8E8E8E" />
//       </View>

//       {/* Terms and Privacy Policy */}
//       <View style={styles.checkboxContainer}>
//         <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkbox}>
//           {isChecked && <View style={styles.checkboxChecked} />}
//         </TouchableOpacity>
//         <Text style={styles.termsText}>
//           I agree to the healthcare{' '}
//           <Text style={styles.linkText}>Terms of Service</Text> and{' '}
//           <Text style={styles.linkText}>Privacy Policy</Text>
//         </Text>
//       </View>

//       {/* Sign Up Button */}
//       <TouchableOpacity style={styles.signUpButton}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>

//       {/* Footer */}
//       <Text style={styles.footerText}>
//         If you have an account?{' '}
//         <Text style={styles.signInText}>Sign In</Text>
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E0CEC1', // Background color
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#5C4033', // Brownish text color
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     marginBottom: 15,
//     width: '100%',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 15,
//     width: '100%',
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: '#8E8E8E',
//     borderRadius: 3,
//     marginRight: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkboxChecked: {
//     width: 14,
//     height: 14,
//     backgroundColor: '#007BFF', // Blue color for the check
//   },
//   termsText: {
//     fontSize: 14,
//     color: '#5C4033',
//     flex: 1,
//     flexWrap: 'wrap',
//   },
//   linkText: {
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//   },
//   signUpButton: {
//     backgroundColor: '#007BFF',
//     borderRadius: 25,
//     paddingVertical: 12,
//     width: '100%',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#5C4033',
//     marginTop: 10,
//   },
//   signInText: {
//     color: '#007BFF',
//     fontWeight: 'bold',
//   },
// });


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { FontAwesome, Entypo } from '@expo/vector-icons';

// export default function SignUpScreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const handleSignUp = () => {
//     // Check if all fields are filled
//     if (!name || !email || !password) {
//       Alert.alert('Error', 'Please fill all fields before signing up.');
//       return;
//     }

//     // Log the form data
//     console.log('Sign Up Data:', {
//       name,
//       email,
//       password,
//       agreedToTerms: isChecked,
//     });

//     Alert.alert('Sign Up Successful!', `Welcome, ${name}!`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>

//       {/* Name Input */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="user" size={20} color="#8E8E8E" />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your name"
//           placeholderTextColor="#8E8E8E"
//           value={name}
//           onChangeText={setName}
//         />
//       </View>

//       {/* Email Input */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="envelope" size={20} color="#8E8E8E" />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your email"
//           placeholderTextColor="#8E8E8E"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//       </View>

//       {/* Password Input */}
//       <View style={styles.inputContainer}>
//         <Entypo name="lock" size={20} color="#8E8E8E" />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your password"
//           placeholderTextColor="#8E8E8E"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//       </View>

//       {/* Terms and Privacy Policy */}
//       <View style={styles.checkboxContainer}>
//         <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkbox}>
//           {isChecked && <View style={styles.checkboxChecked} />}
//         </TouchableOpacity>
//         <Text style={styles.termsText}>
//           I agree to the healthcare{' '}
//           <Text style={styles.linkText}>Terms of Service</Text> and{' '}
//           <Text style={styles.linkText}>Privacy Policy</Text>
//         </Text>
//       </View>

//       {/* Sign Up Button */}
//       <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//         <Text style={styles.signUpButtonText}>Sign Up</Text>
//       </TouchableOpacity>

//       {/* Footer */}
//       <Text style={styles.footerText}>
//         If you have an account?{' '}
//         <Text style={styles.signInText}>Sign In</Text>
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E0CEC1', // Background color
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#5C4033', // Brownish text color
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     marginBottom: 15,
//     width: '100%',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 15,
//     width: '100%',
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: '#8E8E8E',
//     borderRadius: 3,
//     marginRight: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkboxChecked: {
//     width: 14,
//     height: 14,
//     backgroundColor: '#007BFF', // Blue color for the check
//   },
//   termsText: {
//     fontSize: 14,
//     color: '#5C4033',
//     flex: 1,
//     flexWrap: 'wrap',
//   },
//   linkText: {
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//   },
//   signUpButton: {
//     backgroundColor: '#007BFF',
//     borderRadius: 25,
//     paddingVertical: 12,
//     width: '100%',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#5C4033',
//     marginTop: 10,
//   },
//   signInText: {
//     color: '#007BFF',
//     fontWeight: 'bold',
//   },
// });


// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSignUp = () => {
    console.log('Sign Up Data:', { name, email, password, isAgreed });
    navigation.navigate('Login');  // Navigate to the Login screen after sign up
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#8E8E8E"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#8E8E8E"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#8E8E8E"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Terms and Conditions */}
      <TouchableOpacity onPress={() => setIsAgreed(!isAgreed)} style={styles.checkboxContainer}>
        <Text style={styles.checkbox}>{isAgreed ? '☑️' : '⬜️'}</Text>
        <Text style={styles.checkboxText}>
          I agree to the healthcare{' '}
          <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0CEC1', // Background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5C4033', // Brownish text color
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#8E8E8E',
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 14,
    height: 14,
    backgroundColor: '#007BFF', // Blue color for the check
  },
  termsText: {
    fontSize: 14,
    color: '#5C4033',
    flex: 1,
    flexWrap: 'wrap',
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#5C4033',
    marginTop: 10,
  },
  signInText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

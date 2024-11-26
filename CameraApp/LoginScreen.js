import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login Data:', { email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#8E8E8E" />
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
        <Entypo name="lock" size={20} color="#8E8E8E" />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#8E8E8E"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.signUpText}>Sign up</Text>
      </Text>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.socialText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.socialText}>Sign in with Facebook</Text>
      </TouchableOpacity>
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
  forgotPassword: {
    fontSize: 14,
    color: '#007BFF',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#5C4033',
    marginBottom: 20,
  },
  signUpText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#5C4033',
  },
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#8E8E8E',
  },
  facebookButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8E8E8E',
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

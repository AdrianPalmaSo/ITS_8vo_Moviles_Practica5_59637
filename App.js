import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const [limpiar, setLimpiar] = useState(false);

  const validar = () => {
    if (!email || !password) {
      setValidationError('Ambos campos son obligatorios');
      return;
    }

    // Validación del correo electrónico (formato simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError('El correo electrónico no es válido');
      return;
    }

    // Validación de la contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
      setValidationError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si pasa la validación, mostrar pantalla de bienvenida
    mostrarBienvenida();
    setLimpiar(true);
  };

  const mostrarBienvenida = () => {
    const nombreUsuario = email.split('@')[0]; // Extraer nombre de usuario del correo electrónico
    Alert.alert('Bienvenido', `Hola ${nombreUsuario}!`);
    setValidationError('');
  };

  return (
    <LinearGradient colors={['steelblue','skyblue']} style={styles.container}>
      <Text style={styles.Titulo}>Creando mi primera app con Expo y React Native!</Text>
      <Text style={styles.Subtitulo}>Adrian Palma Sosa</Text>
      <TextInput
      placeholder='@gmail.com'
      style={styles.Login}
      value={limpiar ? '' : email}
      onChangeText={text => setEmail(text)}
    />
    <TextInput
      placeholder='password'
      style={styles.Login}
      secureTextEntry={true}
      value={limpiar ? '' : password}
      onChangeText={text => setPassword(text)}
    />
      {validationError ? <Text style={styles.Error}>{validationError}</Text> : null}
      <TouchableOpacity onPress={validar}>
        <LinearGradient colors={['#0099FF','#00FFFF']} style={styles.Boton}>
          <Text style={{fontSize:15,fontWeight: 'bold', color:'white'}}>Aceptar</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setLimpiar(true)}>
        <Text style={styles.Limpiar}>Limpiar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Subtitulo: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
  },
  Login: {
    color : 'white',
    fontStyle : 'italic',
    borderWidth : 1,
    borderColor : 'white',
    padding: 10,
    paddingStart : 20,
    width : '80%',
    height : 50,
    marginTop : 20,
    borderRadius : 30,
  },
  Boton: {
    padding: 15,
    marginTop : 40,
    borderColor : 'white',
    borderWidth : 3,
    borderRadius : 30,
  },
  Error: {
    color: 'red',
    marginTop: 10,
  },
  Limpiar: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

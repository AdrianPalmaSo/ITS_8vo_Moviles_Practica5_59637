import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";

export default function App() {
  return (
    <LinearGradient colors={['steelblue','skyblue']} style={styles.container}>
      <Text style={styles.Titulo}>Creando mi primera app con Expo y React Native!</Text>
      <Text style={styles.Subtitulo}>Adrian Palma Sosa</Text>
      <TextInput placeholder='@gmail.com' style={styles.Login}/>
      <TextInput placeholder='password' style={styles.Login}/>
      <StatusBar style="auto" />
      <TouchableOpacity>
        <LinearGradient colors={['#0099FF','#00FFFF']} style={styles.Boton}>
            <Text style={{fontSize:15,fontWeight: 'bold', color:'white'}}>Aceptar</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  }
});

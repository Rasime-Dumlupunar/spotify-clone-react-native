import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#040306", "#131624"]} 
    style={{flex:1}}>
      <SafeAreaView>
        <View style={{height:80}} />
          <Entypo name="spotify" color="white" 
          size={80} style={{textAlign: 'center'}} />
          <Text style={styles.loginTitle}> Millions of Songs Free on Spotify!</Text>
        <View style={{height:80}} />
        <Pressable style={styles.loginButton}>
          <Text 
          onPress={() => navigation.navigate('Main')}
          style={{fontSize: 18}}> Sign In With Spotify!</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <MaterialIcons name='phone-android' color='white' size={26}/>
          <Text style={styles.buttonText}> Continue with phone number</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <AntDesign name='google' size={26} color='white' />
          <Text style={styles.buttonText}> Continue with Google</Text>
        </Pressable>
        <Pressable style={styles.button}>
        <Entypo name='facebook' size={26} color='white' />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </Pressable>

      </SafeAreaView>
      
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginHorizontal:35,
  },
  loginButton: {
    backgroundColor: "#1AD35E",
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 25,
  
  },
  button: {
    backgroundColor: '#131624',
    padding:10,
    paddingLeft:15,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    borderColor: '#C0C0C0',
    borderWidth: 0.8,
    marginVertical: 10,
    borderRadius: 25,
    width: 320,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    flex:1,
    fontSize: 18,
  }
});
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const SonginfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //Homescreen den gönderilen veriyi useRoute ile aldık.
  const {album} = route.params || {};

  // Gelen verileri parçalayaarak aldık
  const {name, artist, coverArt, year} = album ||{};

  return (
    <LinearGradient colors={["#040306", "#131624"]}
    style={{flex:1}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.paddingView}>
          <TouchableOpacity
          onPress={() =>navigation.goBack()}>
            <AntDesign name="arrowleft" size={28} color="#1AD35E" />
          </TouchableOpacity>
            <View stle={styles.imageWiew}>
              <Image source={{uri: coverArt}} style={styles.coverImage}/>
            </View>
        </View>
        <Text style={styles.albumNameText}>{name}</Text>
        <View style={styles.artistWiew}>
          <Text style={styles.artistText}>{artist}</Text>
        </View>
          <Pressable style={styles.controlView}>
              <Pressable style={styles.downloadButton}>
                <AntDesign name="arrowdown" size={24} color="white"/>
              </Pressable>
            <View style={styles.playButtonView}>
              <Entypo name="yelp" size={24} color="#1AD35E"/>
                <Pressable style={styles.playButton}>
                  <Entypo name='controller-play' size={29} color="white"/>
                </Pressable>
            </View>
        </Pressable>
        <View>
          <View style={styles.infoView}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Album : {name}</Text>
              <Text style={styles.infoText}>Artist : {artist}</Text>
              <Text style={styles.infoText}>Year : {year}</Text>
            </View>
            <Entypo name="dots-three-vertical" size={28} color="white"/>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default SonginfoScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    marginTop:70,
  },
  paddingView: {
    padding:15,
  },
  coverImage: {
    width: 200,
    height:200,
    marginTop: 20,
    borderRadius:30,
    
  },
  imageWiew: {
    alignItems: 'center',
   
  },
  albumNameText: {
    color: 'white',
    marginHorizontal: 12,
    marginTop:10,
    fontSize:22,
    fontWeight:'bold',
  },
  artistWiew: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  artistText: {
    color: '#909090',
    fontSize: 13,
    fontWeight: 'bold',
  },
  controlView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems:'center',
    marginVertical: 20,

  },
  downloadButton: {
    backgroundColor: "#1DB954",
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  playButton: {
    backgroundColor: "#1DB954",
    width: 60,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  playButtonView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  infoContainer: {
    gap: 5,
    
  },
  infoText:{
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
});
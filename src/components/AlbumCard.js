import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const AlbumCard = ({album}) => {
  const navigation = useNavigation();

  const lenghtText = (text, length) => {
    if (text.length > length) {
      return `${text.substring(0, length)}...`;}
      return text;
  }
  return (
    <TouchableOpacity style={styles.albumContainer}
    onPress={() => navigation.navigate('Info', {album})}>
        <Image source={{uri: album.coverArt}} style={styles.albumImage}/>
        <Text style={styles.albumName}>{lenghtText(album.name, 11)}</Text>
        <Text style={styles.albumArtist} >{album.artist} </Text>
    </TouchableOpacity>
  )
};

export default AlbumCard;

const styles = StyleSheet.create({
    albumContainer: {
      width: 100,
      marginHorizontal: 10,
      marginVertical:5,
    },
    albumImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginTop: 10,
    },
    albumName: {
      color: 'white',
      marginTop: 7,
      fontSize:15,
      marginBottom:3,
    },
    albumArtist: {
      color: '#3f3f',
      fontSize: 13,
    },
});
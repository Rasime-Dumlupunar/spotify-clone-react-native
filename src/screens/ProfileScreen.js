import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ProfileContext } from '../context/ProfilContext';
import round from 'lodash/round';

const ProfileScreen = () => {
  
  const {profilData, loading, error} = useContext(ProfileContext);
  const {name, image_url, followers_count, public_playlists} = profilData || {};
  
  const formatFollowers = count =>{
    if (count >= 1000000) {
      return `${round(count/1000000, 1)} M`
    } 
      if(count >=1000){
        return `${round(count/1000, 1)}K`;
      }
      if(count<=1000){
        return count;
      }

  };

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{flex:1}}>
      <ScrollView style={{marginTop:50}}>
        <View style={{padding:15}}>
          <View style={styles.profileContainer}>
            <Image source={{uri: image_url}} style={styles.profilImage}/>
        
        <View>
          <Text style={styles.profilName}>{name}</Text>
          <Text style={styles.profilFollowers}>{formatFollowers(followers_count)}</Text>
        </View>
      </View>
      </View>
      <Text style={styles.sectionTitle}>Your Playlist</Text>
      <View style={styles.playlistContainer}>{public_playlists && public_playlists.map((playlist, index) =>(
            <View key={playlist.uri} style={{marginVertical: 10,
              flexDirection: 'row', alignItems: 'center', gap: 5
            }}>
              <Image source={{uri:"https://picsum.photos/200/300" }} style={styles.playlistImage}/>
            <View>
                <Text style={styles.playlistName}>{playlist.name}</Text>
                <Text style={styles.playlistFollowers}>{formatFollowers(playlist.followers_count)}</Text>
            </View>
      </View>
             
           
          ))
        }
         
      </View>
      </ScrollView>

    </LinearGradient>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    borderBottomWidth:0.2,
    borderBottomColor: 'white',
    marginBottom:15,
  },
  profilImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    borderColor:'white',
    borderWidth: 0.7,
    margin:15,
  },
  profilName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:5
  },
  profilFollowers: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginHorizontal: 12,
  },
  playlistContainer: {
    padding: 15,
  },
  playlistImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight:10,
  },
  playlistName: {
    color: 'white',
    fontSize: 18,
    fontWeight:'600',
  },
  playlistFollowers: {
    color: "#1AD35E",
    marginTop: 7,
    fontSize:15,
    fontWeight:'bold',
  }
});
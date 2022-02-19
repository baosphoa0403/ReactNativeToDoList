/* eslint-disable react-native/no-inline-styles */
import ImagePicker from 'react-native-image-crop-picker';
import {useFocusEffect} from '@react-navigation/native';
// import axios from 'axios';
import React, {useCallback, useState} from 'react';
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getMe} from '../../app/UserProvider/User.service';
import {User} from '../../app/UserProvider/User.type';
import {restAPI} from '../../config/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
const Profile = () => {
  const [profile, setProfile] = useState<User | null>(null);
  useFocusEffect(
    useCallback(() => {
      getMe(restAPI)
        .then(res => {
          setProfile(res);
        })
        .catch(err => {
          console.log({...err});
        });
    }, []),
  );
  const choosePhotoFormLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfile({
        avatar: image.path as string,
        id: profile?.id as number,
        password: profile?.password as string,
        name: profile?.name as string,
        phone: profile?.phone as string,
        username: profile?.username as string,
      });

      const formdata = new FormData();

      formdata.append('image', {
        uri:
          Platform.OS === 'android'
            ? image.sourceURL
            : (image.sourceURL as string).replace('file://', ''),
        type: image.mime,
        name: image.filename,
      });
      fetch(
        'https://api.imgbb.com/1/upload?key=f07c39c75e96768f44b57b977f280e90',
        {
          method: 'POST',
          body: formdata,
        },
      )
        .then(res => {
          res.json().then(i => {
            console.log(i.data.display_url);
            AsyncStorage.getItem('token').then(token => {
              axios({
                url: 'http://localhost:3000/user/uploadAvatar',
                data: {img: i.data.display_url},
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
                .then(result => {
                  console.log(result.data);
                  Alert.alert(result.data);
                })
                .catch(err => {
                  console.log({...err});
                });
            });
          });
        })
        .catch(err => {
          console.log({...err});
        });
    });
  };
  return (
    <View style={styles.container}>
      {/* <Text>Hello Profile {profile?.name}</Text> */}
      <View style={{position: 'relative'}}>
        <Image style={styles.avatar} source={{uri: profile?.avatar}} />
        <TouchableOpacity
          onPress={choosePhotoFormLibrary}
          style={{position: 'absolute', bottom: 100, left: 110}}>
          <Icon name="upload" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: 100,
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>
        <View style={styles.item}>
          <Text style={{marginBottom: 30}}>Username </Text>
          <Text style={{marginBottom: 30}}>Name </Text>
          <Text style={{marginBottom: 30}}>Phone </Text>
          <Text style={{marginBottom: 30}}>Password </Text>
        </View>
        <View style={styles.item}>
          <Text style={{marginBottom: 30}}>{profile?.username} </Text>
          <Text style={{marginBottom: 30}}>{profile?.name.toUpperCase()} </Text>
          <Text style={{marginBottom: 30}}>{profile?.phone} </Text>
          <Text style={{marginBottom: 30}}>****** </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  avatar: {
    width: 250,
    height: 250,
    marginVertical: 50,
    borderRadius: 200,
  },
  item: {
    width: '50%', // is 50% of container width
  },
});

export default Profile;

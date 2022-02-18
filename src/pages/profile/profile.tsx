/* eslint-disable react-native/no-inline-styles */
import {useFocusEffect} from '@react-navigation/native';
// import axios from 'axios';
import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getMe} from '../../app/UserProvider/User.service';
import {User} from '../../app/UserProvider/User.type';
import {restAPI} from '../../config/api';

const Profile = () => {
  const [profile, setProfile] = useState<User | null>(null);
  useFocusEffect(
    useCallback(() => {
      getMe(restAPI)
        .then(res => {
          console.log(res);
          setProfile(res);
        })
        .catch(err => {
          console.log({...err});
        });
    }, []),
  );
  return (
    <View style={styles.container}>
      {/* <Text>Hello Profile {profile?.name}</Text> */}
      <Image style={styles.avatar} source={{uri: profile?.avatar}} />
      <View
        style={{
          marginHorizontal: 100,
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>
        <View style={styles.item}>
          <Text style={{marginBottom: 50}}>Username </Text>
          <Text style={{marginBottom: 50}}>Name </Text>
          <Text style={{marginBottom: 50}}>Phone </Text>
        </View>
        <View style={styles.item}>
          <Text style={{marginBottom: 50}}>{profile?.username} </Text>
          <Text style={{marginBottom: 50}}>{profile?.name.toUpperCase()} </Text>
          <Text style={{marginBottom: 50}}>{profile?.phone} </Text>
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

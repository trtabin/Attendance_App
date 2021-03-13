
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  ActivityIndicator,
          StyleSheet,
          View,
       } from 'react-native';

export default function AuthLoading() {

    return (
      <View>
        <ActivityIndicator />
        <StatusBar hidden={true} />
      </View>
    );
}
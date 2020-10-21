import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, 
          Text, 
          View,
          TextInput,
          TouchableOpacity,
          Image,

} from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class App extends React.Component{
  render(){
      return (
        <View>
          <View style={{height:windowHeight*2/5, margin:20}}>
            <Image
              style={{height:windowHeight*2/5 - 40, width:windowWidth - 40 }}
              source={require('./assets/image/chart.png')}
            />
          </View>
          <View>
              <View style={{alignItems:'center', flexDirection:'row'}}>
                <Text style={{flex:1,  marginLeft:30, fontSize:35, fontWeight:'bold', color:'#E86A6A'}}>Sign Up</Text>  
                <Text style={{flex:1, fontSize:20, fontWeight:'bold', color:'#BBBBBB'}}>Login</Text> 
              </View>
            <TextInput
                style={{paddingLeft: 25 ,marginTop: 30,marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Name"
            />  

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Email"
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Password"
            />

                
            <TouchableOpacity
                style={{padding:10, marginLeft:20,marginRight:20, borderRadius:50, height:50, backgroundColor:'rgba(232, 106, 106, 1)',}}
            >
              <Text style={{textAlign:'center',color:'white', fontSize:20, fontWeight:'bold' }}>Sign Up</Text>
            </TouchableOpacity>


          </View>
          <StatusBar hidden={true} />
        </View>
      ); 
  }
}



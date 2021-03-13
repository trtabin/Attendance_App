import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, 
          Text, 
          View,
          TextInput,
          TouchableOpacity,
          Image,
          Alert,
          ScrollView,

} from 'react-native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from './Context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*

export default class Login extends React.Component{
  constructor () {
    super();
    this.state = {
      email: null,
      password: null,
    };
    
    this.checkInfo = async () => {
        //console.log(this.state.email,this.state.password);
        try {
          let response = await fetch('http://127.0.0.1:8000/api/mobileApp/login', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
              }),
            });
          let responseJson = await response.json();
          console.log( responseJson.message);
          if(responseJson.message=="Login Successful"){
            await AsyncStorage.setItem('isLoggedIn','1');
            Alert.alert("Login Successful","Congratulations");
          }else{
            Alert.alert("Login Failed","Invaild email or password",[
              {text:"Try Again"}
            ]);
            await AsyncStorage.setItem('isLoggedIn',0);
          }
        } catch (error) {
          console.error(error);
          Alert.alert("Login Failed","Something went worng.",[
              {text:"Try Again"}
            ]);
          await AsyncStorage.setItem('isLoggedIn',0);
        }

    }
  }

  _showSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render(){
      return (
        <View>
          <View style={{height:windowHeight*2/5, margin:20}}>
            <Image
              style={{height:windowHeight*2/5 - 40, width:windowWidth - 40 }}
              source={require('../image/chart.png')}
            />
          </View>
          <View>
              <View style={{alignItems:'center', flexDirection:'row'}}>
                <Text style={{flex:1,  marginLeft:30, fontSize:35, fontWeight:'bold', color:'#E86A6A'}}>Login</Text>
                <TouchableOpacity style={{flex:1, alignItems: 'center'}} onPress={this._showSignUp}>  
                  <Text style={{ fontSize:20, fontWeight:'bold', color:'#BBBBBB'}}>Sign Up</Text>
                </TouchableOpacity> 
              </View>
            <TextInput
                style={{paddingLeft: 25 ,marginTop: 30,marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Email"
                onChangeText={text => this.setState({email:text})}
            />  

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Password"
                secureTextEntry={true} 
                onChangeText={text => this.setState({password:text})}
            />
                
            <TouchableOpacity
                onPress={()=>{signIn()}}
                style={{padding:10, marginLeft:20,marginRight:20, borderRadius:50, height:50, backgroundColor:'rgba(232, 106, 106, 1)',}}
            >
              <Text style={{textAlign:'center',color:'white', fontSize:20, fontWeight:'bold' }}>Login</Text>
            </TouchableOpacity>


          </View>
          <StatusBar hidden={true} />
        </View>
      ); 
  }
}

*/

export default function Login({ navigation }) {


      const {signIn} = React.useContext(AuthContext);
      const [email, setEmail] = React.useState('');
      const [password, setPassword] = React.useState('');
      
      return (
        <View>
          <View style={{height:windowHeight*2/5, margin:20}}>
            <Image
              style={{height:windowHeight*2/5 - 40, width:windowWidth - 40 }}
              source={require('../image/chart.png')}
            />
          </View>
          <View>
              <View style={{alignItems:'center', flexDirection:'row'}}>
                <Text style={{flex:1,  marginLeft:30, fontSize:35, fontWeight:'bold', color:'#E86A6A'}}>Login</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{flex:1, alignItems: 'center'}}>  
                  <Text style={{ fontSize:20, fontWeight:'bold', color:'#BBBBBB'}}>Sign Up</Text>
                </TouchableOpacity> 
              </View>
            <TextInput
                style={{paddingLeft: 25 ,marginTop: 30,marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Email"
                onChangeText={text => setEmail(text)}
            />  

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Password"
                secureTextEntry={true} 
                onChangeText={text => setPassword(text)}
            />
                
            <TouchableOpacity
                onPress={()=>{signIn(email,password)}}
                style={{padding:10, marginLeft:20,marginRight:20, borderRadius:50, height:50, backgroundColor:'rgba(232, 106, 106, 1)',}}
            >
              <Text style={{textAlign:'center',color:'white', fontSize:20, fontWeight:'bold' }}>Login</Text>
            </TouchableOpacity>


          </View>
          <StatusBar hidden={true} />
        </View>
      ); 

}

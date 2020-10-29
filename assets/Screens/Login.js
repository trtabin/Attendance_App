import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, 
          Text, 
          View,
          TextInput,
          TouchableOpacity,
          Image,
          Alert ,

} from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class App extends React.Component{
  constructor () {
    super();
    this.state = {
      email: null,
      password: null,
    };
    
    this.checkInfo = async () => {
        //console.log(this.state.email,this.state.password);
        try {
          let response = await fetch('https://58050df9e6eb.ngrok.io/api/mobileApp/login', {
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
            Alert.alert("Login Successful","Congratulations");
          }else{
            Alert.alert("Login Failed","Invaild email or password",[
              {text:"Try Again"}
            ]);
          }
        } catch (error) {
          console.error(error);
          Alert.alert("Login Failed","Something went worng.",[
              {text:"Try Again"}
            ]);
        }

    }
  }
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
                <Text style={{flex:1,  marginLeft:30, fontSize:35, fontWeight:'bold', color:'#E86A6A'}}>Login</Text>  
                <Text style={{flex:1, fontSize:20, fontWeight:'bold', color:'#BBBBBB'}}>Sign Up</Text> 
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
                onPress={this.checkInfo}
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



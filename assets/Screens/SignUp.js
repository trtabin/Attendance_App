import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, 
          Text, 
          View,
          TextInput,
          TouchableOpacity,
          Image,
          ScrollView,
          Alert, 

} from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*

export default class SignUp extends React.Component{
    constructor () {
    super();
    this.state = {
      name: null,
      email: null,
      password: null,
      dept: null,
      session: null,
      student_id: null,
    };
    
    this.checkInfo = async () => {
        //console.log(this.state.email,this.state.password);
        try {
          let response = await fetch('https://96a911ba4fed.ngrok.io/api/mobileApp/signUp', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                deptSession: this.state.dept + this.state.session,
                session: this.state.session,
                student_id: this.state.student_id,
                image: "0",
              }),
            });
          let responseJson = await response.json();
          console.log( responseJson.message);
          if(responseJson.message=="Sign Up Successful"){
            Alert.alert("SignUp Successful","Congratulations");
          }else{
            Alert.alert("SignUp Failed","Invaild Info",[
              {text:"Try Again"}
            ]);
          }
        } catch (error) {
          console.error(error);
          Alert.alert("SignUp Failed","Something went worng.",[
              {text:"Try Again"}
            ]);
        }

    }
  }

  _showLogin = () => {
    this.props.navigation.navigate('Login');
  };


  render(){
      return (
        <View>
        <ScrollView style={{ width: windowWidth, height: windowHeight}}>
          <View style={{height:windowHeight*2/5, margin:20}}>
            <Image
              style={{height:windowHeight*2/5 - 40, width:windowWidth - 40 }}
              source={require('../image/chart.png')}
            />
          </View>
          <View style={{marginBottom: 40, }}>
              <View style={{alignItems:'center', flexDirection:'row'}}>
                <Text style={{flex:1,  marginLeft:30, fontSize:35, fontWeight:'bold', color:'#E86A6A'}}>Sign Up</Text>  
                <TouchableOpacity style={{flex:1, alignItems: 'center'}} onPress={this._showLogin}>
                  <Text style={{ fontSize:20, fontWeight:'bold', color:'#BBBBBB'}}>Login</Text> 
                </TouchableOpacity>             
              </View>
            <TextInput
                style={{paddingLeft: 25 ,marginTop: 30,marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Name"
                onChangeText={text => this.setState({name:text})}
            />  

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Email"
                onChangeText={text => this.setState({email:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Password"
                onChangeText={text => this.setState({password:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Department"
                onChangeText={text => this.setState({dept:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Session"
                onChangeText={text => this.setState({session:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Student ID"
                onChangeText={text => this.setState({student_id:text})}
            />
     
            <TouchableOpacity
                onPress={this.checkInfo}
                style={{padding:10, marginLeft:20,marginRight:20, borderRadius:50, height:50, backgroundColor:'rgba(232, 106, 106, 1)',}}
            >
              <Text style={{textAlign:'center',color:'white', fontSize:20, fontWeight:'bold' }}>Sign Up</Text>
            </TouchableOpacity>

          </View>
          </ScrollView>
          <StatusBar hidden={true} />
        </View>
      ); 
  }
}

*/
export default function SignUp({ navigation }) { 

    const [state, setState] = React.useState({
      name: null,
      email: null,
      password: null,
      dept: null,
      session: null,
      student_id: null,
    });

      return (
        <View>
        <ScrollView style={{ width: windowWidth, height: windowHeight}}>
          <View style={{height:windowHeight*2/5, margin:20}}>
            <Image
              style={{height:windowHeight*2/5 - 40, width:windowWidth - 40 }}
              source={require('../image/chart.png')}
            />
          </View>
          <View style={{marginBottom: 40, }}>
              <View style={{alignItems:'center', flexDirection:'row'}}>
                <Text style={{flex:1,  marginLeft:30, fontSize:35, fontWeight:'bold', color:'#E86A6A'}}>Sign Up</Text>  
                <TouchableOpacity style={{flex:1, alignItems: 'center'}}  onPress={() => navigation.navigate('Login')}>
                  <Text style={{ fontSize:20, fontWeight:'bold', color:'#BBBBBB'}}>Login</Text> 
                </TouchableOpacity>             
              </View>
            <TextInput
                style={{paddingLeft: 25 ,marginTop: 30,marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Name"
                onChangeText={text => setState({name:text})}
            />  

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Email"
                onChangeText={text => setState({email:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Password"
                onChangeText={text => setState({password:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Department"
                onChangeText={text => setState({dept:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Session"
                onChangeText={text => setState({session:text})}
            />

            <TextInput
                style={{paddingLeft: 25, marginBottom:10, marginLeft: 20, marginRight: 20 ,backgroundColor:'rgba(232, 106, 106, 0.5)', borderRadius: 50, height: 50}}
                placeholder="Enter Student ID"
                onChangeText={text => setState({student_id:text})}
            />
     
            <TouchableOpacity
                onPress={()=>{signUp()}}
                style={{padding:10, marginLeft:20,marginRight:20, borderRadius:50, height:50, backgroundColor:'rgba(232, 106, 106, 1)',}}
            >
              <Text style={{textAlign:'center',color:'white', fontSize:20, fontWeight:'bold' }}>Sign Up</Text>
            </TouchableOpacity>

          </View>
          </ScrollView>
          <StatusBar hidden={true} />
        </View>
      ); 
    }

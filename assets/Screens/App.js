import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './assets/Screens/Login';
import SignUp from './assets/Screens/SignUp';
import Home from './assets/Screens/Home';
import Attendance from './assets/Screens/Attendance';
import AuthLoading from './assets/Screens/AuthLoading';

import {AuthContext} from './assets/Screens/Context';

const Stack = createStackNavigator();
 
export default function App() {

  const initialLoginState ={
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return{
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

    }
  }

  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(true);

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(()=> ({
    signIn: async(userName, password) => {
      //setUserToken('fgkj');
      //setIsLoading(false);
      loginState.isLoading = true;
      try {
        let response = await fetch('https://6a102f55c173.ngrok.io/api/mobileApp/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: userName,
              password: password,
            }),
          });
        let responseJson = await response.json();
        console.log( responseJson.message);
        if(responseJson.message=="Login Successful"){
          //await AsyncStorage.setItem('isLoggedIn','1');
          //Alert.alert("Login Successful","Congratulations");
          let userToken;
          userToken = null;
          
          try{
            userToken = 'dgfdgf';
            await AsyncStorage.setItem('userToken', userToken);
          } catch(e){
            console.log(e);
          }
          dispatch({type: 'LOGIN' , id: userName, token: userToken})

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

      /*
     let userToken;
      userToken = null;
      if(userName == 'user' && password == 'pass'){
        try{
          userToken = 'dgfdgf';
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e){
          console.log(e);
        }
        dispatch({type: 'LOGIN' , id: userName, token: userToken})
      }

      */
  },
    signOut: async() => {
      //setUserToken(null);
      //setIsLoading(false);
      try{
        userToken = 'dgfdgf';
        await AsyncStorage.removeItem('userToken');
      } catch(e){
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },

  }));  

  React.useEffect(()=> {
    setTimeout(async()=> {
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e){
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, [] );


  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
    return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }}> 
      {/* For testing purpose using different(!=) conditon*/}
        {loginState.userToken != null? (
          <>
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="SignUp" component={SignUp} />     
          </>  
        ):( 
          <>
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Attendance" component={Attendance} /> 
          </>  
          )
        }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    );
}






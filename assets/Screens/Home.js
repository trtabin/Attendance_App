import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, 
          View,
          Image,
          TouchableOpacity,
          ScrollView,
          Button,

} from 'react-native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from './Context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*
export default class Home extends React.Component{

  _logout= async () => {
    const jsonValue = JSON.stringify(0)
    //console.log(jsonValue)
    await AsyncStorage.setItem('isLoggedIn', jsonValue)
    //await AsyncStorage.setItem('isLoggedIn',0);

  }
  render(){
      return (
        <ScrollView showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>
            <View style={{marginTop: 30, justifyContent:'center', alignItems:'center'}}>
                      <Image
                          style={{width:130, height:130, borderRadius:100}}
                          source={{uri:'https://nstueee.000webhostapp.com/Portfolio/assets/tabin2.JPG'}}
                      />
                      <Text style={{fontSize:25}}>Tahmidur Rahman Tabin</Text>
            </View>

            <View style={{padding:30 , borderTopEndRadius: 30, borderTopStartRadius: 30, }}>
              
                      <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {alert('Y:1, S:1')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>1st Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {alert('Y:1, S:2')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>1st Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>

                      

                      <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {alert('Y:2, S:1')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>2nd Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {alert('Y:2, S:2')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>2nd Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>

                      

                      <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {alert('Y:3, S:1')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>3rd Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {alert('Y:3, S:2')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>3rd Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>

                       <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {alert('Y:4, S:1')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>4th Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {alert('Y:4, S:2')}}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>4th Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>
            </View>

            <Button onPress={this._logout}>Logout</Button>
        </ScrollView>
      ); 
  }
}
*/


export default function Home({ navigation }){

    const {signOut} = React.useContext(AuthContext);
      return (
        <ScrollView showsVerticalScrollIndicator ={false} showsHorizontalScrollIndicator={false}>
            <View style={{marginTop: 30, justifyContent:'center', alignItems:'center'}}>
                      <Image
                          style={{width:130, height:130, borderRadius:100}}
                          source={{uri:'https://nstueee.000webhostapp.com/Portfolio/assets/tabin2.JPG'}}
                      />
                      <Text style={{fontSize:25}}>{global.userName}</Text>
            </View>

            <View style={{padding:30 , borderTopEndRadius: 30, borderTopStartRadius: 30, }}>
              
                      <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 1, Session: 1 }); }} >
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>1st Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 1, Session: 2 }); }} >
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>1st Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>

                      

                      <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 2, Session: 1 }); }} >
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>2nd Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 2, Session: 2 }); }}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>2nd Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>

                      

                      <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 3, Session: 1 }); }}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>3rd Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 3, Session: 2 }); }}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>3rd Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>

                       <View style={{marginBottom:30, flexDirection:'row', justifyContent:'space-between'}}>  
                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 4, Session: 1 }); }}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>4th Year</Text>
                                <Text style={{fontSize:15}}>Semester 1</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> {navigation.navigate('Attendance', {Year: 4, Session: 2 }); }}>
                            <View style={{justifyContent:'center', alignItems:'center',width:122, height:128, backgroundColor:"rgba(232, 106, 106, 0.2)", borderRadius:15}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>4th Year</Text>
                                <Text style={{fontSize:15}}>Semester 2</Text>
                            </View>
                        </TouchableOpacity>
                      </View>
            </View>

            <TouchableOpacity
                onPress={()=> {signOut()}}
                style={{padding:10, marginBottom: 30, marginLeft:20,marginRight:20, borderRadius:50, height:50, backgroundColor:'rgba(232, 106, 106, 1)',}}
            >
              <Text style={{textAlign:'center',color:'white', fontSize:20, fontWeight:'bold' }}>Logout</Text>
            </TouchableOpacity>


            <StatusBar hidden={true} />
        </ScrollView>
      ); 

}
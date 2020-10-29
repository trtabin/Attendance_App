import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, 
          View,
          Image,
          TouchableOpacity,
          ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Home extends React.Component{
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
        </ScrollView>
      ); 
  }
}



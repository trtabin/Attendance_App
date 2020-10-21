import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, 
          View,

} from 'react-native';
import { Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class App extends React.Component{
  render(){
      return (
        <View>
            <View style={{height:windowHeight*2/5,justifyContent:'center', alignItems:'center'}}>
              <AnimatedCircularProgress
                size={180}
                width={20}
                fill={60}
                rotation={-180}
                tintColor="#E86A6A"
                backgroundColor="#FFF">
                  {fill => <Text style={{fontSize:35, color:"#E86A6A"}}>60%</Text>}
              </AnimatedCircularProgress>
              <Text style={{fontSize:35}}>Total Attendance</Text>

            </View>

            <View style={{padding:30 ,height:windowHeight*3/5, backgroundColor:"rgba(232, 106, 106, 0.2)", borderTopEndRadius: 30, borderTopStartRadius: 30, }}>
                <View>
                    <Text style={{fontSize:20, marginBottom:10}}>Course Code: 90% </Text>
                    <Progress.Bar style={{marginBottom:30}} height={10} color={"#E86A6A"} unfilledColor={"#C4C4C4"} borderWidth={0} progress={0.3} width={windowWidth-60} />
                </View>
            </View>
          <StatusBar hidden={true} />
        </View>
      ); 
  }
}



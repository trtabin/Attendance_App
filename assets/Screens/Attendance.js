import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, 
          View,
          TouchableOpacity,
          Alert,

} from 'react-native';
import { Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class App extends React.Component{
  constructor () {
    super();
    this.state = {
      courseCode: null,
      present: null,
      absent: null,
      attendance: null,
    };
    
    this.checkInfo = async () => {
        //console.log(this.state.email,this.state.password);
        try {
          let response = await fetch('https://96a911ba4fed.ngrok.io/api/mobileApp/attendancePerSubject', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                deptSession: "EEE2016-17",
                student_id: "ASH1717010M",
              }),
            });
          let responseJson = await response.json();
          console.log( responseJson );
          if(responseJson!= null){
            this.setState({courseCode: responseJson.courseCode});
            this.setState({present: responseJson.present});
            this.setState({absent: responseJson.absent});
            this.setState({attendance: (responseJson.present/(responseJson.present+responseJson.absent)).toFixed(2) });
          }
        } catch (error) {
          console.error(error);
          Alert.alert("Login Failed","Something went worng.",[
              {text:"Try Again"}
            ]);
        }

    }

    this.checkInfo();
  }


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
                <View >
                    <Text style={{fontSize:20, marginBottom:10}}>{this.state.courseCode} : {this.state.attendance*100}%</Text>
                    <Progress.Bar style={{marginBottom:30}} height={10} color={"#E86A6A"} unfilledColor={"#C4C4C4"} borderWidth={0} progress={this.state.attendance} width={windowWidth-60} />
                </View>
            </View>
          <StatusBar hidden={true} />
        </View>
      ); 
  }
}



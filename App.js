import React, {Component} from 'react';
import {Home } from './app/views/Home';
import WelcomeScreen from './app/views/WelcomeScreen'
import {Video } from './app/views/Video';
import {VideoDetail} from './app/views/VideoDetails'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Register} from './app/views/Register';
import {Login} from './app/views/Login';
import {Quiz} from './app/views/Quiz';
import DetailScreen from './app/src/screens/DetailsScreen'
import {Finish} from './app/views/QuizFinish'
import * as Font from 'expo-font';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { func } from './app/src/constants';
import Stack from './app/src/navigation/Stack';
import Expo from 'expo'



const MyRoutes = createStackNavigator({
  HomeRT:{
    screen:Home
  },
  StackRT:{
    screen:Stack,
    navigationOptions: () => ({
      headerLeft: null,
      headerBackground:false,
      headerMode: 'none',
      header: null,
    }),
    
  },
  WelcomeRT:{
    screen:WelcomeScreen
  },
  DetailRT:{
    screen:DetailScreen,
    navigationOptions: () => ({
      headerLeft: null,
      headerBackground:false,
      headerMode: 'none',
      header: null,
    }),
    
  },
  
  LessonsRT:{
    screen:Video
  },
  VideoDetailsRT:{
    screen:VideoDetail
  },
  RegisterRT:{
    screen:Register
  },
  LoginRT:{
      screen:Login
  },
  QuizRT:{
    screen:Quiz
  },
  FinishRT:{
    screen:Finish
  }


  
},
{
  initialRouteName:'WelcomeRT'
    
}

);
const AppContainer = createAppContainer(MyRoutes)


export default class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = { 
      // fontLoaded: true,
      isLoading: true

    
    };
  }

   async componentWillMount() {
    Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Meduim': require('./assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),



    });
    this.setState({ fontLoaded: false });
  }
  
  render(){
    const { isLoading } = this.state;

    if(isLoading){
      <AppLoading
      onFinish={() => this.setState({ isLoading: false })}
      startAsync={func.loadAssetsAsync}
    />

    }
    return <AppContainer/>
  
    

  }

 
}



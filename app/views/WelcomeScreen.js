import React from 'react';
import { View, Text, Dimensions, BackHandler,ImageBackground,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AppLoading, Asset, Video } from 'expo';
import Swiper from 'react-native-swiper';
import {Home} from './Home';
import { Ionicons } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');


import { createStackNavigator } from 'react-navigation'
import Animated from 'react-native-reanimated';

// 1.5.9

export class WelcomeScreen extends React.Component {

    static navigationOptions = {
        header:null

    }

    constructor(props){
      super(props);
      this.state={
        backgroundOpacity:new Animated.Value(0),
        loaded: false,
        videoHeight: height,
        videoWidth: width
      }
    }
  /////***** HANDLE BACK PRESS ******//////
  componentWillMount() {
    // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    console.log('unmount dashboard');
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onPress =()=>{
    this.props.navigation.navigate('HomeRT');
  }
  onHome =()=>{
    this.props.navigation.navigate('StackRT');

  }


    onBackPress = () => {
      if (this.props.currentRoute.index === 0) {
        BackHandler.exitApp();
        return false;
      }
    this.props.navigation.goBack(null);
    return true;
  };

  openAuth() {
    this.props.navigation.navigate('auth');
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Swiper showsPagination={false}
        style={styles.wrapper}>
        <View style={styles.slide1}>
        <ImageBackground   source={require('../sections/img/first.png')} style={styles.container}>
        </ImageBackground>
        </View>
        <View style={styles.slide2}>
        <TouchableOpacity onPress={this.onPress} >
        <ImageBackground   source={require('../sections/img/third.png')} style={styles.container2}>
        </ImageBackground>
        </TouchableOpacity>

        </View>
        <View style={styles.slide3}>

              <Video
              source={{ uri: "https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Lighthouse%20stands%20in%20Istanbul%E2%80%99s%20harbour_0554659b-5dc1-43d6-8a93-b31ec6b67f63/Cinemagraph_plain/1920x1080/cinemagraph.mp4"}}
              style={styles.backgroundVideo}
              rate={1}
              shouldPlay={true}
              isLooping={true}
              volume={1}
              muted={true}
              resizeMode="cover"
              />

              <KeyboardAvoidingView behavior='padding' style={styles.container}>


                <View style={styles.loginContainer}>


                </View>

              </KeyboardAvoidingView>
              </View>
       
        {/* <ImageBackground   source={require('../sections/img/Rectangle.png')} style={styles.container}>

         
          
        </ImageBackground> */}

      </Swiper>
    );
  }
}

const styles = {
  
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F7DD8',
  },
  slide2: {
      flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F7DD8',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F7DD8',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container:{
    flex:1,
    backgroundColor: '#2F7DD8',
    justifyContent: 'center',
    width: '100%',
    height: '100%',

},container2:{
    backgroundColor: '#2F7DD8',
    justifyContent: 'center',
    width:300,
    height:200

},
container3:{
  flex: 1,
  backgroundColor: 'transparent',
},
backgroundVideo: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},

};



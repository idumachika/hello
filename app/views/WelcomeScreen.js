import React,{Component} from 'react';
import { View, Text, Dimensions, BackHandler,ImageBackground,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AppLoading, Asset, Video } from 'expo';
import Swiper from 'react-native-swiper';
import {Home} from './Home';
import { Ionicons } from '@expo/vector-icons';
const { height, width,MaterialIcons, Octicons } = Dimensions.get('window');
import { createStackNavigator } from 'react-navigation'
import Animated from 'react-native-reanimated';

// 1.5.9

 class WelcomeScreen extends Component {

    static navigationOptions = {
        header:null

    }

    constructor(props){
      super(props);
      this.state={
        backgroundOpacity:new Animated.Value(0),
        loaded: false,
        videoHeight: height,
        videoWidth: width,
        currentVideo: 0,
          mute: false,
          shouldPlay: true,
      }
    }
  
  onPress =()=>{
    this.props.navigation.navigate('HomeRT');
  }
  onHome =()=>{
    this.props.navigation.navigate('StackRT');

  }
  handlePlayAndPause = () => {
    this.setState((prevState) => ({
       shouldPlay: !prevState.shouldPlay
    }));
  }
  handleVolume = () => {
     this.setState((prevState) => ({
        mute: !prevState.mute
     }));
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
    const { width } = Dimensions.get('window')


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
        <View>
         <View style={styles.slide3}>
               
               {/* <Video
                 source={{ uri:    
                    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                 shouldPlay={this.state.shouldPlay}
                 resizeMode="cover"
                 style={{height:1000, opacity:0.3, backgroundColor:'#000000' }}
                 isMuted={this.state.mute}
               /> */}
              {/* <View style={styles.controlBar}>
                   <MaterialIcons
                      name={this.state.mute ? "volume-mute" :
                          "volume-up"}
                      size={45}
                      color="white"
                      onPress={this.handleVolume}
                   />
                   <MaterialIcons
                      name={this.state.shouldPlay ? "pause" : 
                           "play-arrow"}
                      size={45}
                      color="white"
                      onPress={this.handlePlayAndPause}
                   />
               </View>  */}
            </View>
        

        </View>
       
       

      </Swiper>
    );
  }
}

export default WelcomeScreen;
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
    height:1000,
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

controlBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 45,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "rgba(0, 0, 0, 0.5)",



}
};



import React from 'react';
import { StyleSheet,BackHandler, Text, Image, View,ImageBackground } from 'react-native';
import {Header} from '../sections/Header';
import {Menu} from '../sections/Menu';
import * as Font from 'expo-font'
import { StackNavigator } from 'react-navigation'

export  class Home extends React.Component {
    
    static navigationOptions = {
        header :null
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
    onBackPress = () => {
    if (this.props.currentRoute.index === 0) {
      BackHandler.exitApp();
      return false;
    }
    this.props.navigation.goBack(null);
    return true;
    };
    render(){
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>  


                <ImageBackground   source={require('../sections/img/Rectangle.png')} style={styles.container}>
                <Image
                    source={require('../sections/img/logo.png')}
                    style={styles.logo}>

                </Image>

                <Text style={styles.text}>Your Home of MultiContent channels SignUp Now and enjoy moovetv</Text>
                    <Menu navigate = {navigate}/> 
                </ImageBackground>
               

            </View>

        );
    }
 
}
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#2F7DD8',
        justifyContent: 'center',
        width: null,
        height: null,
    
    },
    inputIcon:{
        width:'100%',
        height:50,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: '50%',
    },
    text:{
        position: 'absolute',
        left: '11.59%',
        right: '11.59%',
        top: '43.48%',
        bottom: '47.55%',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize:18,
        textAlign: 'center',
        color:'#FFFFFF',
        fontFamily:'Montserrat-Regular'


    }
    
})
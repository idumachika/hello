import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage,
    Image
} from 'react-native';
import { LinearGradient } from 'expo';


export class Login extends React.Component{

    static navigationOptions = {
        headerBackground: (
            <Image 
            style={{ 
            position: 'absolute',
            left:'32.13%',
            right: '32.19%',
            top: '55.47%',
            bottom: '88.45%',
            }}
            source={ require('../sections/img/logo.png')}/>
        ),
        
        // title: 'MooveTV',
        headerStyle: {
          backgroundColor: '#2F7DD8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
           
        }
    }
    
    

    cancelLogin=()=>{
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('HomeRT')

    }

    loginUser =()=>{
         this.props.navigation.navigate('StackRT')

        // if(!this.state.username){
        //     Alert.alert('Please enter a username')
        // }else if( !this.state.password){
        //     Alert.alert('Please enter a password')
        // }else{
        //     AsyncStorage.getItem('userLoggedIn', (err, result) =>{
        //         if(result!== 'none'){
        //             Alert.alert('Someone already logged on');
        //             this.props.navigation.navigate('StackRT')
        //         }else{
        //             AsyncStorage.getItem(this.state.username,(err,result) =>{
        //                 if(result !==null){
        //                     if(result !==this.state.password){
        //                         Alert.alert('Password incorrect')
        //                     }else{
        //                         AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) =>{
        //                             Alert.alert(`${this.state.username} Logged in`);
        //                             this.props.navigation.navigate('StackRT')
        //                         })
        //                     }
        //                 }else{
        //                     Alert.alert(`No account for ${this.state.email}`)
        //                 }
        //             })
        //         }
        //     });
        // }
    }

    render(){
        const { navigate } = this.props.navigation;

        
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Sign in here to enjoy all your MooveTv Shows for free</Text>

                <View style={styles.inputContainer}>

                <TextInput style={styles.inputs}
                    placeholder="Email or Phone number"
                    keyboardType="email-address"
                    placeholderTextColor='#6B6B6B'
                    underlineColorAndroid='transparent'
                    onChangeText={(username) => this.setState({username})}/>
                </View>
                
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor='#6B6B6B'
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>this.props.navigation.navigate('StackRT')}>
                <Text style={styles.loginText}>Sign In</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={this.cancelLogin}>
                    <Text style={styles.recoverText}>Recover password?</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2F7DD8',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:7,
        borderBottomWidth: 1,
        width:346,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:346,
      borderRadius:7,
      borderRightColor: '#FFF',
      
    
    },
    loginButton: {
      backgroundColor: "#2F7DD8",
      borderColor: 'white', 
      borderWidth: 1
    
      
    },
    loginText: {
      color: 'white',
      fontFamily:'Montserrat-Regular'

    },
    recoverText:{
        color:'white',
        fontFamily:'Montserrat-Regular'

    },
    logo:{
        width:30,
        height:30,
        textAlign: 'center'

    },
    text:{
        position: 'absolute',
        left: '11.59%',
        right: '11.59%',
        top: '20.48%',
        bottom: '47.55%',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',
        color:'#FFFFFF',
        fontFamily: 'Montserrat-Regular'


    }
    
  });

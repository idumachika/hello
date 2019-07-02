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
import { Ionicons} from '@expo/vector-icons';


export class Register extends React.Component{

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
        
        title: 'Help',
        headerStyle: {
          backgroundColor: '#2F7DD8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          position: 'absolute',
          left: '70.57%',
          right: '5.8%',
          top:'40%',
          fontSize:17,
          fontFamily:'Montserrat-SemiBold'       
        },
    }

    constructor(props){
        super(props);
        this.state={
            fullname:'',
            username:'',
            isPassword:true,
            eye: 'md-eye-off'
        }
    }
    changePwdType = () => {
        const { isPassword } = this.state;
        // set new state value
        this.setState({
            eye: isPassword ? "ios-eye" : "md-eye-off",
            isPassword: !isPassword,
        });

    };
    

    cancelRegister=()=>{
        Alert.alert('Registration cancelled');
        this.props.navigation.navigate('HomeRT')

    }

    registerAccount =()=>{
        if(!this.state.email){
            Alert.alert('Please enter a username')
        }else if(!this.state.password){
            Alert.alert('passwords do not match')
        }else{
            AsyncStorage.getItem(this.state.email, (err, result) =>{
                if(result!==null){
                    Alert.alert(`${this.state.email} already exists`)
                }else{
                    AsyncStorage.setItem(this.state.email, this.state.password,(err,result) =>{
                        Alert.alert(`${this.state.email} account created`);
                        this.props.navigation.navigate('HomeRT')
                    })
                }
            });
        }
    }

    render(){
        const { eye, isPassword } = this.state;

        return(
            

            <View style={styles.container}>
                <Text style={styles.text}>Create a free MooveTv account to enjoy all MooveTv Shows</Text>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Full Name"
                    placeholderTextColor='#6B6B6B'
                    underlineColorAndroid='transparent'
                    onChangeText={(fullname) => this.setState({fullname})}/>
                </View>
                
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Email or Phone Number"
                    secureTextEntry={true}
                    keyboardType="email-address"
                    placeholderTextColor='#6B6B6B'
                    underlineColorAndroid='transparent'
                    onChangeText={(username) => this.setState({username})}/>
                </View>

                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    secureTextEntry={this.state.isPassword}
                    placeholderTextColor='#6B6B6B'
                    placeholder="password"
                    underlineColorAndroid="transparent"
                    onChangeText={(isPassword) => this.setState({isPassword})}/>

                <Ionicons style={styles.icon}
                    name={eye}
                    size={25}
                    color="#6B6B6B"
                    onPress={this.changePwdType}/>
                </View>

                <TouchableHighlight  underlayColor='rgb(255, 255, 255)' style={[styles.buttonContainer, styles.loginButton]} onPress={this.registerAccount}>
                <Text style={styles.loginText}>Sign Up</Text>
                </TouchableHighlight>

    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#2F7DD8',
      justifyContent:'center'
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
        fontFamily:'Montserrat-Regular'
    },
    headerImage:{
        position: 'absolute',
        left:'32.13%',
        right: '32.19%',
        top: '7.47%',
        bottom: '88.45%',
    },
    icon:{
        flex:1,
        position: 'absolute',
        left: '90.44%',
        top: '25.9%',
        
               
    }
    
  });

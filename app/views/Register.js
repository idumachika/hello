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
        
        // title: 'Help',
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
            fullname:'',
            username:'',
            password:''
        }
    }

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
                    placeholder="Password"
                    placeholderTextColor='#6B6B6B'
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.registerAccount}>
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
    }
    
  });

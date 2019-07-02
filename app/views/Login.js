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
import { TextField } from 'react-native-material-textfield';
import { Ionicons} from '@expo/vector-icons';




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
            username:'',
            isPassword:true,
            eye: 'md-eye-off',
           
        }
    }
    
    getRef = (ref) => {
        if (this.props.getRef)
            this.props.getRef(ref)
    }
    changePwdType = () => {
        const { isPassword } = this.state;
        // set new state value
        this.setState({
            eye: isPassword ? "ios-eye" : "md-eye-off",
            isPassword: !isPassword,
        });

    };
    

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
        const { iconSize, iconColor, label, style } = this.props;
        const { eye, isPassword } = this.state;

        
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

                <TouchableHighlight underlayColor='#2F7DD8' style={[styles.buttonContainer, styles.loginButton]} onPress={()=>this.props.navigation.navigate('StackRT')}>
                <Text style={styles.loginText}>Sign In</Text>
                </TouchableHighlight>

                <TouchableHighlight  underlayColor='#2F7DD8' style={styles.buttonContainer} onPress={this.cancelLogin}>
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


    },
    icon:{
        flex:1,
        position: 'absolute',
         left: '90.44%',
        // right: '13.69%',
        top: '25.9%',
            // bottom: '31.63%',     
    }
    
  });
  

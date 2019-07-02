import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, Alert} from 'react-native';
import { Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { Video } from 'expo';



export class Menu extends React.Component{

    onPress =()=>{
        Alert.alert('You tapped the button!')
    }

    render(){
        return(
           <View style={styles.container}>
               
               <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonSignUp} onPress={()=>this.props.navigate('RegisterRT')}>
                <Text style={styles.buttonTextSignUp}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin} onPress={()=>this.props.navigate('LoginRT')}>
                    <Text style={styles.buttonTextLogin}>LOGIN</Text>
                </TouchableOpacity>
               </View>
               <View style={styles.buttonColumn}>
                <TouchableOpacity style={styles.buttonFacebook} onPress={ ()=>this.props.navigate('WelcomeRT')}>
                <MaterialCommunityIcons
                    style={styles.iconLeft} name="facebook" size={25} color="#2F7DD8" />
                    <Text style={styles.buttonText}>Connect with Facebook</Text>
                </TouchableOpacity>
               </View>
               {/* <View style={styles.buttonColumn}>
                <TouchableOpacity style={styles.buttonGoogle} onPress={ ()=>this.props.navigate('StackRT')}>

                    <Image style={styles.iconGoogle} source={require('../../app/src/assets/images/content/google.png')}/>
                

                    <Text style={styles.GoogleText}>Connect with Google</Text>
                  
                </TouchableOpacity>
               </View>  */}

           </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    buttonRow:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 50,
    },
    buttonColumn:{
        flex:1,
        alignItems:'center',
    },
    buttonSignUp:{
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:'50%',
        textAlign:'center',
        height:60,
        justifyContent:'center',
       
        
    },
    buttonLogin:{
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:"30%",
        height:60,
        justifyContent: 'center',
        marginLeft:15,
        textAlign:'center',
    },
    buttonFacebook:{
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width:'70%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    inputIcon:{
        // marginTop: 15,
        // marginLeft:80,
        // justifyContent: 'center'
    },
    buttonGoogle:{
        backgroundColor: '#FFFFFF',
        borderRadius: 30,

    },
    buttonText:{
        fontStyle: 'normal',
        fontWeight: '500',
        fontFamily:'Montserrat-Meduim'

    },
    buttonTextSignUp:{
        fontSize: 16,
        color: '#2F7DD8',
        fontStyle: 'normal',
        fontWeight: '500',
        fontFamily:'Montserrat-Meduim',
        textAlign:'center',

    },
    buttonTextLogin:{
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        color: '#2F7DD8',
        fontFamily:'Montserrat-Meduim',
        textAlign:'center'
    },
    iconLeft:{
        justifyContent:'center'
       
    },
    iconGoogle:{
    },
    GoogleText:{
        color:'#2F7DD8',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        fontFamily:'Montserrat-Meduim'



    }
    

})
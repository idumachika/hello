import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, Alert} from 'react-native';
import { Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';


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
               <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonContact} onPress={ ()=>this.props.navigate('WelcomeRT')}>
                <MaterialCommunityIcons
                    style={styles.iconLeft} name="facebook" size={25} color="#2F7DD8" />
                    <Text style={styles.buttonText}>Connect with Facebook</Text>
                </TouchableOpacity>
               </View>
               <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonGoogle} onPress={ ()=>this.props.navigate('StackRT')}>
                
                    <Ionicons style={styles.iconLeft} name="logo-google" size={20} color="green" />

                    <Text style={styles.buttonText}>Connect with Google</Text>
                  
                </TouchableOpacity>
               </View>

           </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        position:'relative',
        marginTop:'40%'
        
        
    },
    buttonRow:{
        flexDirection: 'row',
        alignItems: 'center',
        padding:35,
    


    },
    buttonSignUp:{
        position: 'absolute',
        left: '8.21%',
        right: '39.37%',
        top: '61.96%',
        width:217,
        height:60,
        bottom: '29.89%',
        backgroundColor: '#FFFFFF',
        borderRadius:30
        
    },
    buttonLogin:{
        position: 'absolute',
        left: '75.22%',
        right: '8.21%',
        height:60,
        width:110,
        top: '61.96%',
        bottom: '29.89%',
        backgroundColor: '#FFFFFF',
        borderRadius:30
    },
    buttonContact:{
        position:'absolute',
        left: "8.21%",
        right: '8.21%',
        top: '72.83%',
        bottom: '19.02%',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width:346,
        height:60,
    },
    inputIcon:{
        width:15,
        height:15,
        marginTop: 15,
        marginLeft:80,
        justifyContent: 'center'
    },
    buttonGoogle:{
        position: "absolute",
        left:' 8.21%',
        right: '8.21%',
        top: '83.7%',
        height:60,
        width:346,
        bottom: '8.15%',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,

    },
    buttonText:{
        color:'#2F7DD8',
        fontSize: 16,
        left:'27.47%',
        right:'20.67%',
        bottom:'35.6%',
        fontStyle: 'normal',
        fontWeight: '500',
        fontFamily:'Montserrat-Regular'

    },
    buttonTextSignUp:{
        position: 'absolute',
        left: '15.98%',
        // right: '14.98%',
        top: '35.81%',
        bottom: '32.47%',
        fontSize: 16,
        color: '#2F7DD8',
        fontStyle: 'normal',
        fontWeight: '500',
        fontFamily:'Montserrat-Regular',
        textAlign: 'center'
    },
    buttonTextLogin:{
        position: 'absolute',
        left: '28.98%',
        right: '14.98%',
        top: '35.81%',
        bottom: '32.47%',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        color: '#2F7DD8',
        fontFamily:'Montserrat-Regular'
    },
    iconLeft:{
        paddingLeft:70,
        paddingRight: 40,
        paddingTop: 15,
       
    }
    
    

})
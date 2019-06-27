import React,{Component} from  'react';
import  {Text, View, StyleSheet, Image,TouchableWithoutFeedback} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { colors, device, fonts, images } from '../constants';

export const HeaderMenu = props =>(
  
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={()=> props.toggle()}>
        <Image style={styles.nav}  source={require('../assets/images/content/Combined.png')}/>

        </TouchableWithoutFeedback>
        <Image style={styles.logo} source={require('../assets/images/content/moovetv.png')}/>
    </View>
)

  
  

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:'18%',
        width:'100%',
        alignItems:'center',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        // justifyContent: 'space-between'
    },
    logo:{
        marginLeft:15,
        
    },
    nav: {
     
    },
  
});

export default HeaderMenu 
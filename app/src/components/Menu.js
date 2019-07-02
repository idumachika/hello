import React, {Component} from 'React'

import { 
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    ScrollView

} from 'react-native'

import { Ionicons,FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import SvgBell from '../components/icons/Svg.ArrowRight';
const {width, height} = Dimensions.get('window')


class Menu extends Component{
    render(){
        return(
            <View style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarImage}>
                        <Image style={styles.avatar} source={require('../assets/images/user-icons/purple-penguin.jpg')}/>
                        <Text style={styles.textName}>Pastor Emmanuel</Text>
                    </View>
                </View>
                <ScrollView style={styles.ScrollContainer}>
                    <View style={styles.textWithIcon}>
                        <View style={styles.widthIcon}>
                            <MaterialCommunityIcons
                            style={styles.iconWithText}
                                name="movie-roll"
                                color="#3D3D3D"
                                size={20}
                                />
                                <Text style={styles.text}>Movies</Text>
                        </View>
                        <FontAwesome
                         style={styles.rightIcon}
                         name="chevron-right"
                         color="#949494"
                         size={15}/>
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.widthIcon}>
                            <Ionicons
                            style={styles.iconWithText}
                                name="md-notifications"
                                color="#3D3D3D"
                                size={20}
                                />
                                <Text style={styles.text}>Notification</Text>
                        </View>
                        <FontAwesome
                         style={styles.rightIcon}
                         name="chevron-right"
                         color="#949494"
                         size={15}/>
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.widthIcon}>
                            <FontAwesome
                                style={styles.iconWithText}
                                name="shopping-bag"
                                color="#3D3D3D"
                                size={20}
                                />
                                <Text style={styles.text}>Moove Mart</Text>
                        </View>
                        <FontAwesome
                         style={styles.rightIcon}
                         name="chevron-right"
                         color="#949494"
                         size={15}/>
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.widthIcon}>
                            <MaterialCommunityIcons
                                style={styles.iconWithText}
                                name="television-classic-off"
                                color="#3D3D3D"
                                size={20}
                                />
                                <Text style={styles.text}>Live Tv</Text>
                        </View>
                        <FontAwesome
                         style={styles.rightIcon}
                         name="chevron-right"
                         color="#949494"
                         size={15}/>
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.widthIcon}>
                            <Ionicons
                            style={styles.iconWithText}
                                name="md-settings"
                                color="#3D3D3D"
                                size={20}
                                />
                                <Text style={styles.text}>Settings</Text>
                        </View>
                        <FontAwesome
                         style={styles.rightIcon}
                         name="chevron-right"
                         color="#949494"
                         size={15}/>
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.widthIcon}>
                            <FontAwesome
                            style={styles.iconWithText}
                                name="heart-o"
                                color="#3D3D3D"
                                size={20}
                                />
                                <Text style={styles.text}>Tell a Friend</Text>
                        </View>
                        <FontAwesome
                         style={styles.rightIcon}
                         name="chevron-right"
                         color="#949494"
                         size={15}/>
                    </View>
                </ScrollView>
                <View style={styles.signOutContainer}>
                    <View style={styles.SignoutIcon}>
                        <FontAwesome name="sign-out" size={25} color="white"/>
                        <Text style={styles.textIcon}>Sign Out</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu:{
        flex: 1,
        width:width,
        height:height,
        backgroundColor: '#FFF',
    },
    avatarContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width / 2 + 59,
        borderColor:'#EDEDED',
        backgroundColor:'#2F7DD8',
        borderBottomWidth:1,
        paddingHorizontal:20,
        paddingVertical:30,
        height:"25%",
        width:'100%'
    },
    avatar:{
        width:80,
        height:80,
        marginRight: 20,
        borderRadius: 40
    },
    avatarImage:{
        flexDirection:"row",
        alignItems:'center',

    },
    text:{
        color:'#4F4F4F',
        fontSize: 15,
        fontFamily:'Montserrat-Meduim'
    },
    textWithIcon:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
        alignItems:'center',
        borderColor:'#EDEDED',
        borderBottomWidth:1,
        borderLeftWidth: 5,
    },
    widthIcon:{
        flexDirection:'row',
        alignItems:'center'

    },
    ScrollContainer:{
        width:width / 2 + 59
    },
    rightIcon:{
        paddingRight:20
    },
    iconWithText:{
        marginRight:10,
        paddingLeft: 20,
        borderRadius:30
    },
    textName:{
        color:'white',
        fontSize: 15,
        fontFamily:'Montserrat-SemiBold'
    },
    signOutContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width / 2 + 59,
        borderColor:'#EDEDED',
        backgroundColor:'#2F7DD8',
        paddingHorizontal:20,
        paddingVertical:30,
        height:"10%",
        width:'100%'

    },
    SignoutIcon:{
        flexDirection:"row",
        alignItems:'center',
        paddingLeft: 50,
    },
    textIcon:{
        textAlign:'center',
        color:'white',
        fontSize: 15,
        fontFamily:'Montserrat-SemiBold'
    }

})
export default Menu
import React from 'react';
import { 
    ScrollView,
     Text, 
     View,
     StyleSheet,
     Dimensions,
     TouchableWithoutFeedback,
     Image
    } from 'react-native';
    import { colors, images } from '../constants';

const {width, height} = Dimensions.get('window');
import ShowScroller from '../components/ShowScroller';

import { Ionicons,FontAwesome, Entypo,EvilIcons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';



export default class DetailScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log("details"+props)

  }

  render() {
    
    const { navigation } = this.props;
    const item = navigation.state.params.item
    const name = navigation.state.params.name
    return (
        <ScrollView style={styles.container} contentContainerStyle={{justifyContent:'center'}}>
            <Image style={styles.thumbnail}
            source={images[item]}/>
            <View  style={styles.button}>
            <TouchableWithoutFeedback>
                <Text style={styles.buttonText}>Play Now</Text>
            </TouchableWithoutFeedback>
            </View>

            <View style={styles.icons}>
                <View style={styles.backgroundIcon}>
                <FontAwesome name="heart-o" size={20} color="white" style={styles.iconheart} />
                </View>
                <View style={styles.backgroundIcon}>
                <Entypo name="share-alternative" size={20} color="white" style={styles.iconshare}/>
                </View>
                <View style={styles.backgroundIcon}>
                <AntDesign name="download" size={20} color='white' style={styles.icondownload}/>
                </View>
            </View>

            <View style={styles.starring}>
                <Text style={styles.starringtext}>
                    <Text style={{color:'white',fontFamily:'Montserrat-SemiBold', fontSize:16}}>Staring:</Text>{JSON.stringify(name)}
                </Text>
                <Text style={styles.starringtext}><Text style={{color:'white',fontFamily:'Montserrat-SemiBold', fontSize:16}}>Genres:</Text>{JSON.stringify(name)}</Text>
            </View>
            <Text style={{color:"white",marginTop:10,paddingHorizontal:10,fontFamily:'Montserrat-Meduim'}}>You may also like this</Text>

           <View style={styles.content}>
            <ShowScroller dataset="myList"/>
            <Text></Text>
            <ShowScroller dataset="myList"/>

           </View>
        
        </ScrollView>
       
        
      

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000000',
 
  },
  thumbnail:{
      width:width,
      height:300,
        opacity: 0.23,
  },
  button:{
    backgroundColor: '#2F7DD8',
    borderRadius: 2,
    justifyContent:'center',
    borderRadius: 2,
    width:width,
    paddingLeft: 10,
    paddingRight: 10,
},
buttonText:{
    color:'white',
    fontFamily: 'Montserrat-SemiBold',
    fontStyle: 'normal',
    fontWeight:'600',
    fontSize: 14,
    height:45,
    top: '33%',
    textAlign: 'center'
},
icons:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop: 15,
    borderBottomWidth:1,
    borderColor: '#373737',
    paddingVertical:15,
    paddingHorizontal:20,



},
starring:{
    borderBottomWidth:1,
    borderColor: '#373737',
    color:'white',
    paddingVertical:15,
    paddingHorizontal:5,

},
starringtext:{
    color:'white',
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal:5,
    paddingVertical:5



},
content:{
marginTop:10
},
iconheart:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    //marginRight: 30


},
iconshare:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
},
icondownload:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    // marginLeft: 30,

},
backgroundIcon:{
    borderRadius:30, 
    backgroundColor:'#3C3C3C',
    textAlign: 'center',
    padding: 5,
    marginLeft: 5,
    maxWidth: 70,
}
  
});


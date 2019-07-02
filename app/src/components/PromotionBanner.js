import React from 'react';
import { TouchableOpacity, ImageBackground, Image, Dimensions, Text, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
const {width} =Dimensions.get('window');
import { LinearGradient } from 'expo-linear-gradient';



const Slider = props =>(
  <View style={styles.container}>
    
    <ImageBackground style={styles.image} source={props.uri}>

      <View style={{flexDirection:'row'}}>

      <View style={{ marginStart:20, paddingTop:'75%', flex:1}}>
      
        <Text style={styles.title}>Lion Heart</Text>
        <Text style={{color:'white',fontSize:20}}> <Text style={{fontWeight:'500',fontFamily:'Montserrat-SemiBold',}}>PG</Text> 2018</Text>
        <Text style={{color:'white',fontSize:15,fontFamily:'Montserrat-Regular',marginStart:5}}>Nollywood</Text>
        </View>
          <TouchableOpacity style={{ marginTop:'90%', paddingLeft:20,paddingRight:20}}>
          <Image source={require('../../src/assets/images/content/plays.png')}/>
          </TouchableOpacity>
     </View>

   
     
    </ImageBackground>

  </View>
)



class PromotionBanner extends React.Component {
  constructor(props) {
    super(props);
      this.state ={
        ImagesSlider:[
          
          require('../assets/images/content/black-mirror-bandersnatch.jpg'),
          require('../assets/images/content/good-will-hunting.jpg'),
          require('../assets/images/content/peaky-blinders.jpg'),
          // require('../assets/images/content/john-mulaney-kid-gorgeous.jpg'),
          ],
          ImageTitle:[
            {
              "id":1,
              "title":"Black Mirrow",
              "year":"2018"
  
            },
            {
              "id":2,
              "title":"Good will hunting",
              "year":"2018"
  
              
            },
            {
              "id":3,
              "title":"Peaky Blinders",
              "year":"2018"
  
              
            },
            {
              "id":4,
              "title":"john-mulaney-kid-gorgeous",
              "year":"2018"
          }
          ]
  
        
        }
  }

  render() {
    // const { added } = this.state;

    // const icon = added ? <SvgCheck /> : <SvgPlus />;

    return (
      <View>
        <Swiper autoplay
        height={450}
        activeDotColor="white">
          {
            this.state.ImagesSlider.map((item, i)=><Slider 
            uri={item}
            key={i}/>)
          }
          
          
         
        </Swiper>
        </View>

     
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
    },
    image:{
      flex:1,
      width,
    },
    title:{
      fontFamily:'Montserrat-SemiBold',
      fontSize: 32,
      color:'white',
      paddingTop:20

    }
   
  
});

export default PromotionBanner;

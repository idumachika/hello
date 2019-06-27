import React from 'react';
import { Image, ImageBackground, Dimensions, Text, StyleSheet, View } from 'react-native';
import { gStyle, images } from '../constants';

import PromotionPlay from './PromotionPlay';
import TouchTextIcon from './TouchTextIcon';

import SvgCheck from './icons/Svg.Check';
import SvgInfo from './icons/Svg.Info';
import SvgPlus from './icons/Svg.Plus';
import Swiper from 'react-native-swiper';
const {width} =Dimensions.get('window')

const Slider = props =>(
  <View style={styles.container}>
    <Image style={styles.image} source={props.uri}/>

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
          require('../assets/images/content/john-mulaney-kid-gorgeous.jpg'),
        ]
       
        
      }
    // this.state = {
    //   added: false
    // };

    // this.myListPress = this.myListPress.bind(this);
  }

  // myListPress() {
  //   this.setState(prevState => ({
  //     added: !prevState.added
  //   }));
  // }

  render() {
    const { added } = this.state;

    const icon = added ? <SvgCheck /> : <SvgPlus />;

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

      // <ImageBackground
      //   imageStyle={{ resizeMode: 'contain' }}
      //   source={images.bannerBander}
      //   style={styles.imageBackground}
      // >
      //   <View style={styles.containerContent}>
      //     <Image source={images.logoBander} style={styles.image} />

      //     <View style={gStyle.flexRowSpace}>
      //       <TouchTextIcon
      //         icon={icon}
      //         onPress={this.myListPress}
      //         text="My List"
      //       />
      //       <PromotionPlay onPress={() => null} />
      //       <TouchTextIcon
      //         icon={<SvgInfo />}
      //         onPress={() => null}
      //         text="Info"
      //       />
      //     </View>
      //   </View>
      // </ImageBackground>
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
   
  // imageBackground: {
  //   height: 480
  // },
  // containerContent: {
  //   bottom: 24,
  //   position: 'absolute',
  //   width: '100%',
  //   zIndex: 1
  // },
  // image: {
  //   alignSelf: 'center',
  //   height: 69,
  //   marginBottom: 24,
  //   width: 291
  // }
});

export default PromotionBanner;

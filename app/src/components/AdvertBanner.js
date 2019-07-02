import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { gStyle, images } from '../constants';
import SvgCheck from './icons/Svg.Check';
import SvgPlus from './icons/Svg.Plus';

class AdvertBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false
    };

    this.myListPress = this.myListPress.bind(this);
  }

  myListPress() {
    this.setState(prevState => ({
      added: !prevState.added
    }));
  }

  render() {
    const { added } = this.state;

    const icon = added ? <SvgCheck /> : <SvgPlus />;

    return (
      <ImageBackground
        imageStyle={{ resizeMode: 'contain' }}
        source={images.AdvertImage}
        style={styles.imageBackground}
      >
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    height:256
  },
  containerContent: {
    bottom: 24,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  image: {
    alignSelf: 'center',
    height: 69,
    marginBottom: 24,
    width: 291
  }
});

export default AdvertBanner;

import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, fonts, images } from '../constants';

import TouchText from './TouchText';

class HeaderHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: new Animated.Value(0)
    };
  }

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    const { top } = this.state;

    if (prevProps.show !== show) {
      if (show) {
        Animated.timing(top, { duration: 200, toValue: 0 }).start();
      } else {
        Animated.timing(top, { duration: 200, toValue: -100 }).start();
      }
    }
  }

  render() {
    const { all, navigation } = this.props;
    const { top } = this.state;

    return (
      <Animated.View style={[styles.container, { top }]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('HomeMain')}
        >
          <Image source={images.netflixTransparent} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.containerMenu}>
          {all && (
            <React.Fragment>
              <TouchText
                onPress={() => navigation.navigate('HomeTvShows')}
                text="All"
                textStyle={styles.text}
              />
              <TouchText
                onPress={() => navigation.navigate('HomeMovies')}
                text="Live Channels"
                textStyle={styles.text}
              />
              <TouchText
                onPress={() => navigation.navigate('HomeMyList')}
                text="MooveMart"
                textStyle={styles.text}
              />
            </React.Fragment>
          )}
        </View>
      </Animated.View>
    );
  }
}

HeaderHome.defaultProps = {
  all: true
};

HeaderHome.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,

  // optional
  all: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.black20,
    flexDirection: 'row',
    paddingBottom: 4,
    paddingHorizontal: 16,
    marginLeft: 10,
    paddingTop: device.iPhoneX ? 54 : 30,
    position: 'absolute',
    zIndex: 10,
    width:'100%'
  },
  logo: {
    height: 35,
    marginRight: 48,
    width: 20
  },
  containerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    height:150,
    width:'100%',
    flex: 1,
    justifyContent: 'space-between'
  },
  text: {
    color: colors.white,
    // fontFamily: fonts.medium,
    fontFamily:'Montserrat-Regular',
    marginRight: 50,
    fontSize: 16,
    justifyContent:'center',
    alignItems:'center',
    fontWeight:'400'
  }
});

export default HeaderHome;

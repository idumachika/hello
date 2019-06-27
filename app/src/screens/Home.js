import React from 'react';
import { ScrollView, Text, View,StyleSheet,Animated,  TouchableOpacity,Image} from 'react-native';
import PropTypes from 'prop-types';
import { gStyle,colors, device, fonts, images  } from '../constants';



import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';
import {HeaderMenu} from '../components/HeaderMenu';
import SideMenu from 'react-native-side-menu';
import Menu from '../components/Menu';
import TouchText from '../components/TouchText';


class Home extends React.Component {
  static navigationOptions = {
    header :null
  }
  constructor(props) {
    super(props);

    this.state = {
      showHeader: true,
      isOpen:false,
      top: new Animated.Value(0)

    };
    
    this.offset = 0;

    this.onScroll = this.onScroll.bind(this);
  }
  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    })

  }
  updateMenu(isOpen){
    this.setState({isOpen})
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


  onScroll(event) {
    const { showHeader } = this.state;

    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < this.offset;

    if (show !== showHeader || this.offset <= 0) {
      // account for negative value with "bounce" offset
      if (this.offset <= 0) show = true;

      this.setState({
        showHeader: show
      });
    }

    this.offset = currentOffset;
  }

  render() {
    // const { navigation } = this.props;
    const { showHeader } = this.state;
    const { all, navigation } = this.props;
    const { top } = this.state;

    return (
      <SideMenu 
          menu={<Menu/>}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}

        >
      <View style={gStyle.container}>
        <HeaderMenu toggle={this.toggle.bind(this)}/>
        {/* <HeaderHome navigation={navigation} show={showHeader}/>  */}
        {/* <Animated.View style={[styles.container, { top }]}> */}
         <View style={styles.containerMenu}>
          
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
          
        </View>
      {/* </Animated.View> */}

        

        <ScrollView bounces onScroll={this.onScroll} scrollEventThrottle={16}>

         <PromotionBanner/>
         

          <Text style={gStyle.heading}>Recommended for you</Text>
          <ShowScroller dataset="myList" />

          {/* <ShowScroller dataset="previews" /> */}

          {/* <ShowScroller dataset="previews" type="rectangle" /> */}

          <Text style={gStyle.heading}>Recently Added</Text>
          <ShowScroller dataset="myList" />

          <Text style={gStyle.heading}>Advert</Text>
          <ShowScroller />

          <Text style={gStyle.heading}>E-Books For You</Text>
          <ShowScroller />

          <Text style={gStyle.heading}>Games For You</Text>
          <ShowScroller />

          <View style={gStyle.spacer24} />

        </ScrollView>
       


        <Cast navigation={navigation} />

      </View>
      </SideMenu>

    );
  }
}
Home.defaultProps = {
  all: true
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,

  // optional
  all: PropTypes.bool
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
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
    zIndex: 10
  },
  logo: {
    height: 35,
    marginRight: 48,
    width: 20
  },
  containerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    height:50,
    paddingLeft: 45,
    backgroundColor:'black',
    width:'100%',
    justifyContent:'space-between'
    // flex: 1,
  },
  text: {
    color: colors.white,
    // fontFamily: fonts.medium,
    fontFamily:'Montserrat-Regular',
    marginRight: 24,
    fontSize: 16,
    fontWeight:'400'
  }
});

export default Home;

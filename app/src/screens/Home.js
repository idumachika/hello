import React from 'react';
import { ScrollView, Text, View,StyleSheet,Animated,StatusBar,Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import { gStyle,colors, device, fonts, images  } from '../constants';
import Cast from '../components/Cast';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';
import HeaderMenu from '../components/HeaderMenu';
import SideMenu from 'react-native-side-menu';
import Menu from '../components/Menu';
import AdvertBanner from '../components/AdvertBanner'
import TouchText from '../components/TouchText';
import {FontAwesome,Ionicons} from '@expo/vector-icons';

import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#000000' }]}>
    <View style ={{paddingTop:10,}}>

    {/* <Showcroller dataset='myList'/>
    <AdvertBanner style={{flex:3}}/> */}

  </View>
  </View>
);


const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#00000' }]} />
);
const ThirdRoute =()=>(
  <View style={[styles.scene, { backgroundColor: '#00000' }]} />

);
const FourthRoute =()=>(
  <View style={[styles.scene, { backgroundColor: '#00000' }]} />

);




class Home extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = {
      showHeader: true,
      isOpen:false,
      top: new Animated.Value(0),
      active:true,
      index: 0,
    routes: [
      {  key: 'all', title: 'All' },
      { icon:'file-movie-o' ,key: 'movies', title: 'Movies' },
      { icon:'music' ,key: 'music', title: 'Music' },
      { icon:'book',key: 'books', title: 'Books' },

    ],

    };
    
    this.offset = 0

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
  _renderIcon = ({ route, tabStyle}) => {
    return <FontAwesome style={styles.icon} name={route.icon} size={15} color={colors.white} />;
  };

  _renderLabel= ({ route, focused, colors }) => (
    <Text style={{ color:'white',fontFamily:'Montserrat-SemiBold', fontSize:14,margin:3 }}>
      {route.title}
    </Text>
  )

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
        <View style={styles.tabView}>
        <React.Fragment>
              <TouchText
                style={this.state.active? styles.btnActive:styles.btn}
                onPress={() => navigation.navigate('HomeTvShows')}
                text="All"
                textStyle={styles.text2}
              />
              <TouchText
                onPress={() => navigation.navigate('HomeMovies')}
                text="Live Channels"
                textStyle={styles.text2}
              />
              <TouchText
                onPress={() => navigation.navigate('HomeMyList')}
                text="MooveMart"
                textStyle={styles.text2}
              />
            </React.Fragment>
            </View>
       
         <ScrollView bounces onScroll={this.onScroll} scrollEventThrottle={16}>
        
         <PromotionBanner />
         <TabView
            navigationState={this.state}
            scrollEnabled
            renderScene={SceneMap({
              all: FirstRoute,
              movies: SecondRoute,
              music:FourthRoute,
              books: ThirdRoute,

            })}
            renderTabBar={props =>
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'white' }}
                renderLabel={this._renderLabel}
                style={{ backgroundColor: 'black'}}
                tabStyle={{flexDirection:'row'}}
                renderIcon={this._renderIcon}
              />
        }
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
         

          <Text style={gStyle.heading}>Recommended for you</Text>
          <ShowScroller dataset="myList" navigation={this.props.navigation} />


          <Text style={gStyle.heading}>Recently Added</Text>
          <ShowScroller dataset="myList" navigation={this.props.navigation} />

          <Text></Text>
          <AdvertBanner/>


          <Text style={gStyle.heading}>E-Books For You</Text>
          <ShowScroller dataset="myList" navigation={this.props.navigation} />

          <Text style={gStyle.heading}>Games For You</Text>
          <ShowScroller dataset="myList" navigation={this.props.navigation} />


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
    justifyContent:'space-between',
    flex: 1,
  },
  text: {
    color: colors.white,
    fontFamily:'Montserrat-Meduim',
    marginRight: 24,
    fontSize: 16,
    fontWeight:'400'
  },
  container2: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:'#000000'
  },
  
  tabView:{
    flexDirection:'row',
    backgroundColor:'black',
    paddingTop:15,
    justifyContent: 'space-between',
    paddingVertical: 10
    // paddingLeft:25,

  },
  text2:{
    fontSize:14,
    fontWeight:'600',
    fontStyle: 'normal',
    fontFamily:'Montserrat-SemiBold',
    paddingLeft:40,
    paddingRight:30,
  },
  btnActive:{
    backgroundColor:'#ed1212'
  },
    icon:{
      // backgroundColor:'#FFFFFF',
      // borderRadius: 30,      
      // opacity:0.6,
      // flex:1,
      // justifyContent:'center',
      // alignItems:'center'
    }

});

export default Home;

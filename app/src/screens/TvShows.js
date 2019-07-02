import React from 'react';
import { Text, View,StyleSheet,ScrollView,Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle,colors } from '../constants';
import SideMenu from 'react-native-side-menu';
import Cast from '../components/Cast';
import Menu from '../components/Menu';
import HeaderMenu from '../components/HeaderMenu';
import TouchText from '../components/TouchText';
import PromotionBanner from '../components/PromotionBanner';
import AdvertBanner from '../components/AdvertBanner';
import ShowScroller from '../components/ShowScroller';
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





 class TvShows extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showHeader: true,
      isOpen:false,
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


  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    })

  }
  updateMenu(isOpen){
    this.setState({isOpen})
  }
  _renderIcon = ({ route, tabStyle}) => {
    return <FontAwesome style={styles.icon} name={route.icon} size={15} color={colors.white} />;
  };

  _renderLabel= ({ route, focused, colors }) => (
    <Text style={{ color:'white',fontFamily:'Montserrat-SemiBold', fontSize:14,margin:3 }}>
      {route.title}
    </Text>
  )

  render(){
    const { all, navigation } = this.props;

    return(
      <SideMenu 
      menu={<Menu/>}
      isOpen={this.state.isOpen}
      onChange={(isOpen) => this.updateMenu(isOpen)}>

      <View style={gStyle.container}>
      <HeaderMenu toggle={this.toggle.bind(this)}/> 

      <View style={styles.tabView}>
        <React.Fragment>
              <TouchText
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
      

      {/* <View style={gStyle.spacer96} /> */}

      <View style={gStyle.pH4}>
      <ScrollView bounces onScroll={this.onScroll} scrollEventThrottle={16}>
        
        <PromotionBanner />

        <TabView
            navigationState={this.state}
            
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

      </View>

      <Cast navigation={navigation} />
      </View>
      </SideMenu>
    );
  }
}
 
 

TvShows.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default TvShows;
const styles = StyleSheet.create({
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
    height: 17


  }
});
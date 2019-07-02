import * as React from 'react';
import { View, StyleSheet, Dimensions, Animated,Keyboard, Text,ScrollView,TouchableWithoutFeedback } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import HeaderMenu from '../components/HeaderMenu';
import SideMenu from 'react-native-side-menu';
import { gStyle, colors  } from '../constants';
import Menu from '../components/Menu';
import Showcroller from '../components/ShowScroller';
import AdvertBanner from '../components/AdvertBanner'
import Search from '../components/HeaderSearch'
import {FontAwesome} from '@expo/vector-icons';





const FirstRoute = () => (
  <ScrollView contentContainerStyle={[styles.scene, { backgroundColor: '#000000' }]}>
    <View style ={{paddingTop:10,}}>
    {/* <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <View style={gStyle.container}>
        <Search/>
      </View>
    </TouchableWithoutFeedback> */}

    <Showcroller dataset='myList'/>
    <AdvertBanner style={{flex:3}}/>
     <Showcroller dataset='myList'/>
  </View>
  </ScrollView>
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

export default class TabViewExample extends React.Component {

  state = {
    isOpen:false,
    index: 0,
    routes: [
      {  key: 'all', title: 'All' },
      { icon:'file-movie-o' ,key: 'movies', title: 'Movies' },
      { icon:'music' ,key: 'music', title: 'Music' },
      { icon:'book',key: 'books', title: 'Books' },

    ],
  };

  _renderIcon = ({ route, tabStyle}) => {
    return <FontAwesome style={styles.icon} name={route.icon} size={12} color={colors.white} />;
  };

  _renderLabel= ({ route, focused, colors }) => (
    <Text style={{ color:'white',fontFamily:'Montserrat-SemiBold', fontSize:14, margin:3 }}>
      {route.title}
    </Text>
  )
  
  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    })

  }
  updateMenu(isOpen){
    this.setState({isOpen})
  }

  render() {
    return (
      <SideMenu 
          menu={<Menu/>}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}

      >
      <View style={gStyle.container}>    
      <HeaderMenu toggle={this.toggle.bind(this)}/> 
      <View style={gStyle.spacer24} />

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
      </View>
      </SideMenu>

    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  icon:{
  // backgroundColor:'grey',
  // borderRadius: 30,    
  // height:20,
  // width:20,
  // opacity:0.6
  }
});
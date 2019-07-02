import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';
import SideMenu from 'react-native-side-menu';
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import Menu from '../components/Menu';
import HeaderMenu from '../components/HeaderMenu';
import TouchText from '../components/TouchText';



 class MyList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      showHeader: true,
      isOpen:false,
     

    };

  }

  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    })

  }
  updateMenu(isOpen){
    this.setState({isOpen})
  }

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
      
      <View style={gStyle.pH4}>
        <Text style={gStyle.heading}>MooveMart</Text>
      </View>

      <Cast navigation={navigation} />
      </View>
      </SideMenu>
    );
  }
}
 
 

MyList.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MyList;
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


  }
});
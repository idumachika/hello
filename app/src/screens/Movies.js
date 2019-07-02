import React from 'react';
import { Text, View,StyleSheet,ScrollView,Image } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';
import SideMenu from 'react-native-side-menu';
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import Menu from '../components/Menu';
import HeaderMenu from '../components/HeaderMenu';
import TouchText from '../components/TouchText';
import { Col,Row, Grid } from 'react-native-easy-grid';
import { Constants } from 'expo';






 class Movie extends React.Component{

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
            

            <View style={{ height:248, paddingTop:5}} >
            <Grid>
                <Col style={{backgroundColor:'red', left:' 7.73%', width:188, right:'51.21%', borderRadius:5}}>
                  <Image source={require('../../src/assets/images/content/Red.png')}/>
                </Col>
                <Col>
                    <Row style={{backgroundColor: 'white',right:'3.38%', left:' 9.73%', width:188, borderRadius:5}}>
                     <Image style={{height:119}} source={require('../../src/assets/images/content/play.png')}/> 
                    </Row>
                    <Row style={{backgroundColor: 'grey', borderRadius:5,right: '8.38%', left:' 9.73%', width:188, marginTop:14}}>
                    <Image style={{height:119}} source={require('../../src/assets/images/content/sport.png')}/>
                    </Row>
                </Col>
            </Grid>
            </View>
            <View style={{ height:248, paddingTop:10}}>
            <Grid>
               <Col>
                    <Row style={{backgroundColor: 'white', right:'3.38%', left:' 8.73%', width:188, borderRadius:5}}>
                     <Image style={{height:119}} source={require('../../src/assets/images/content/amazon.png')}/> 
                    </Row>
                    <Row style={{backgroundColor: 'grey', borderRadius:5,right: '8.38%', left:' 8.73%', width:188, marginTop:15}}>
                    <Image style={{height:119}} source={require('../../src/assets/images/content/news.png')}/>
                    </Row>
                </Col>
                <Col style={{backgroundColor:'red', width:188,right: '3.14%',borderRadius:5}}>
                  <Image source={require('../../src/assets/images/content/skit.png')}/>
                </Col>
            </Grid>
            </View>
            

      </View>

      </SideMenu>
    );
  }
}
 
 

Movie.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Movie;

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
  },
  container:{
    flex:1
  },
  
  

});
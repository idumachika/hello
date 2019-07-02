import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import navigationOptions from './defaultOptions';
import FavouriteScreen from '../screens/Favourite';

// const Icon = ({ focused }) => <SvgDownloads active={focused} />;
const Icon =({focused})=> <Ionicons name="md-heart" size={25} color="grey" active={focused}/>


Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    DownloadsMain: {
      screen: FavouriteScreen,
      navigationOptions
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Favourite',
      tabBarIcon: Icon
    }
  }
);



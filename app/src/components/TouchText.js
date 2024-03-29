import React from 'react';
import { StyleSheet, Text, TouchableOpacity,TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts } from '../constants';

const TouchText = ({ onPress, text, textStyle}) => (
  
  <TouchableOpacity
    activeOpacity={0.7}
    underlayColor='blue'
    onPress={onPress}

  >
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

TouchText.defaultProps = {
  textStyle: {}
};

TouchText.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'left'
  },
  text: {
    color: colors.white,
    fontFamily:'Montserrat-SemiBold',

    // fontFamily: fonts.medium
  }
  
});

export default TouchText;

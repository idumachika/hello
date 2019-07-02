import React from 'react';
import { FlatList, Image, StyleSheet, Text, View,TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import { colors, images } from '../constants';
import mockData from '../mockdata/data';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ShowScroller = ({ dataset, type, navigation }) => {
  const dataArray = Object.values(mockData[dataset]);


  return (
      
      <FlatList
      contentContainerStyle={{ paddingHorizontal: 4 }}
      data={dataArray}
      horizontal
      keyExtractor={itemObj => itemObj.id.toString()}
      renderItem={itemObj => {
        const { item } = itemObj;

        let renderItem = <View style={styles[type]} />;
        if (item.image) {
          renderItem = (
          <View>
             <TouchableOpacity onPress={
               () => navigation.navigate('DetailRT',{item:item.image, name:item.title})}>
              <Image source={images[item.image]} style={styles[`${type}Image`]} />
            </TouchableOpacity>
            
            <Text style={styles.imageText}>{item.title}</Text>
            </View>

            
            
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

ShowScroller.defaultProps = {
  dataset: 'dumbData',
  type: 'rectangle'
};

ShowScroller.propTypes = {
  // optional
  dataset: PropTypes.string,
  type: PropTypes.string
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: 131,
    marginRight: 8,
    width: 91,
  },
  rectangleImage: {
    height: 131,
    marginRight: 8,
    resizeMode: 'contain',
    width: 91,
    borderRadius:7,
  },
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  },
  roundImage: {
    height: 96,
    marginRight: 8,
    resizeMode: 'contain',
    width: 96
  },
  imageText:{
    color:'white',
    fontFamily:'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',    
    fontSize: 12,
    paddingTop: 3,
    width:100


  }
});

export default ShowScroller;

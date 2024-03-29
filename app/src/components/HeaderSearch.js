import React from 'react';
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Image
} from 'react-native';
import { colors, device, fonts } from '../constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const shows_first =[
  {
    key:1,
    name:'Suit',
    image:'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg'
  },
  {
    key:2,
    name:'Lion Heart',
    image:'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg'
  },
  {
    key:3,
    name:'Modern Family',
    image:'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg'
  },
  {
    key:4,
    name:'The Flash',
    image:'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg'
  },
  {
    key:5,
    name:'Supergirl',
    image:'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg'
  },
  {
    key:6,
    name:'Designated Survivor',
    image:'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg'
  }
]


class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      cancelOpacity: new Animated.Value(0),
      inputWidth: new Animated.Value(100),
      text:'',
      data:''
    };

    this.onBlur = this.onBlur.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onFocus = this.onFocus.bind(this);
    
  }
  filter(text){
      const newData = shows_first.filter(function(item){
      const itemData =item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      data:newData,
      text:text,
    })
  }
  deleteData(){
    this.setState({text:'', data:''})
  }
  _renderItem(item){
    return(
      <Image key={item.key} style={styles.image} source={{uri:item.image}}/>
    )
  }

  onBlur() {
    const { cancelOpacity, inputWidth, text } = this.state;

    this.setState({ focus: false });

    // if empty, go back to orignial state
    if (text === '') {
      Animated.timing(inputWidth, { duration: 300, toValue: 100 }).start();
      Animated.timing(cancelOpacity, { duration: 300, toValue: 0 }).start();
    }
  }

  onCancel() {
    Keyboard.dismiss();

    this.setState({ text: '' }, () => this.onBlur());
  }

  onFocus() {
    const { cancelOpacity, inputWidth } = this.state;

    this.setState({ focus: true });
    Animated.timing(inputWidth, { duration: 300, toValue: 80 }).start();
    Animated.timing(cancelOpacity, { duration: 300, toValue: 1 }).start();
  }

  render() {
    const { cancelOpacity, focus, inputWidth, text } = this.state;

    // if there is focus or text in input, align left
    const inputOverride = focus || text ? { textAlign: 'left' } : {};
    // convert to percentage
    const percentage = inputWidth.interpolate({
      inputRange: [80, 100],
      outputRange: ['80%', '100%']
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.containerInput, { width: percentage }]}>
          <TextInput
            autoCapitalize="none"
            autoFocus
            keyboardAppearance="dark"
            onBlur={this.onBlur}
            onChangeText={(text) =>this.filter(text)}
            onFocus={this.onFocus}
            placeholder="Search"
            placeholderTextColor={colors.searchIcon}
            selectionColor={colors.brandPrimary}
            style={[styles.input, inputOverride]}
            value={this.state.text}
          />
        </Animated.View>
      
        <Animated.View
          style={[styles.containerCancel, { opacity: cancelOpacity }]}
        >
          <TouchableOpacity activeOpacity={0.7} onPress={this.onCancel}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
        <ScrollView>
          <FlatList style={{marginHorizontal:5}}
          data={this.state.data}
          keyExtractor={item => item.key.toString()}
          renderItem={({item})=>this._renderItem(item)}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: colors.black,
    flexDirection: 'row',
    paddingBottom: 17,
    paddingHorizontal: 8,
    paddingTop: device.iPhoneX ? 54 : 30,
    width: '100%'
  },
  containerInput: {
    width: '80%'
  },
  input: {
    backgroundColor: colors.searchBarBg,
    borderRadius: 4,
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 20,
  },
  containerCancel: {
    width: '20%'
  },
  cancel: {
    color: colors.heading,
    fontFamily: fonts.light,
    fontSize: 16,
    paddingVertical: 4,
    textAlign: 'center',
    paddingTop:30
  },
  // iconInputClose:{
  //   position:'absolute',
  //   top:5,
  //   right:90,
  //   backgroundColor:'transparent',
  //   zIndex:1
  // },
  image:{
    marginRight:5,
    width:115,
    height: 170,
    backgroundColor:'white'

  }
});

export default HeaderSearch;

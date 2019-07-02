import React from 'react';
import {Text, View, FlatList, Image,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { StackNavigator } from 'react-navigation'


export class Video extends  React.Component{

    static navigationOptions = {
        header :null
    }

    constructor(props){
        super(props);
        this.state ={listLoaded:false};
    }

    componentDidMount(){

        return fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyAUdFlu5sdtwga5K2QVVr4c6GsWWycDzGA'
        )
        .then((response)=>response.json())
        .then((responseJson) =>{
           this.setState({
               listLoaded:true,
               videoList:Array.from(responseJson.items)
           })
        }).catch((error)=>{
            console.log(error)
        })
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
        <View>
            {
            this.state.listLoaded &&  (
                <View style={{paddingTop:30,flexDirection:'row'
            }}>
                    <FlatList data={this.state.videoList}
                        renderItem={({item})=> 
                            <TubeItem
                            navigate={navigate}
                            id={item.id.videoId}
                            title={item.snippet.title}
                            imageSrc={item.snippet.thumbnails.high.url}
                            
                            />
                        }/>

                </View>
            )}

            {
                !this.state.listLoaded && (
                    <View style={{paddingTop:30}}>
                        <Text>LOADING</Text>
                    </View>
                )
            }

        </View>
        );
    }
}

export class TubeItem extends React.Component{
    onPress =()=>{
        this.props.navigate('VideoDetailsRT', {ytubeId:this.props.id})
    }

    render(){


        return(

            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{paddingTop:20, alignItems:'center'}}>

                    <Image style={{width:'100%', height:200}}
                        source={{uri:this.props.imageSrc}}
                    />
                    <Text>
                        {this.props.title}
                    </Text>

                </View>

            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 4,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingTop:30
    },
})


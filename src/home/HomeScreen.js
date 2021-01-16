import React from 'react'
import { ScrollView, Text, View, Image, TextInput } from 'react-native'

export default HomeScreen = () => {
    return (
    <ScrollView>
        <Text>Some text</Text>
        <View>
            <Text>Some more text</Text>
            <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width:200,height:200}}/>
        </View>
        <TextInput style={{height:40,borderColor:'gray',borderWidth:1}} defaultValue="Type here"/>
    </ScrollView>
    )
}
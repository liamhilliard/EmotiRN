import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EmotionSelectorButton } from './EmotionSelectorButton'

export function EmotionSelectorGroup(props) {
    return (
        <View style={[ styles.container, props.style ]}>
            <Text style={styles.categoryTitle}>{ props.emotionCategory }</Text>
            
            <View style={styles.emotionsContainer}>
                {props.emotions.map((name) => {
                    return (<EmotionSelectorButton key={name} name={name}/>);
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        paddingBottom: 20,
        paddingStart: 10,
        paddingEnd: 20
    },
    categoryTitle: {
        fontSize:28
    },
    emotionsContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    }
})
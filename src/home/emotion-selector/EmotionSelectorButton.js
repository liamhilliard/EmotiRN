import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
 
export function EmotionSelectorButton(props){
    return(
        <Pressable>
            <Text style={styles.emotName}>{props.name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    emotName: {
        backgroundColor:'lightgray',
        color:'black',
        margin:3,
        padding: 3,
        fontSize: 16
    }
})
import React from 'react'
import { Text, Pressable } from 'react-native'
 
export function EmotionSelectorButton(props){
    return(
        <Pressable>
            <Text style={{backgroundColor:'gray',color:'black', margin:3, padding: 3, fontSize: 16}}>{props.name}</Text>
        </Pressable>
    )
}
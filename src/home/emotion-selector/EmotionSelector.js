import React from 'react'
import { Text, View } from 'react-native'

export function EmotionSelector(props) {
    return (
        <View style={{ backgroundColor:props.backgroundColor, paddingBottom: 20, paddingStart: 10, paddingEnd: 20 }}>
            <Text style={{ fontSize:35 }}>{ props.emotionCategory }</Text>
            {props.emotions.map((name) => {
                return <Text key={name}>{name}</Text>
            })}
        </View>
    )
}
import React from 'react'
import { Text, View } from 'react-native'
import { EmotionSelectorButton } from './EmotionSelectorButton'

export function EmotionSelectorGroup(props) {
    return (
        <View style={{ backgroundColor:props.backgroundColor, paddingBottom: 20, paddingStart: 10, paddingEnd: 20 }}>
            <Text style={{ fontSize:28 }}>{ props.emotionCategory }</Text>
            
            <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
                {props.emotions.map((name) => {
                    return <EmotionSelectorButton key={name} name={name}/>
                })}
            </View>
        </View>
    )
}
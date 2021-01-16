import React from 'react'
import { ScrollView, Text, View, Image, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { EmotionSelector } from './emotion-selector/EmotionSelector'

const emotionCategories = {
    'angry': [
        'hurt',
        'devastated',
        'threatened',
        'hateful',
        'resentful',
        'mad',
        'furious',
        'aggressive',
        'frustrated',
        'annoyed',
        'suspicious',
        'critical',
        'jealous',
        'disrespected',
        'enraged',
        'infuriated'
    ],

    'disgusted': [
        'disapproving',
        'judgemental',
        'disappointed',
        'loathing',
        'awful',
        'repugnant',
        'avoidant',
        'revolted',
        'detested',
        'hesitant',
        'bored',
        'humiliated'
    ],

    'afraid': [
        'embarrassed',
        'ridiculed',
        'rejected',
        'submissive',
        'insecure',
        'inadequate',
        'anxious',
        'insignificant',
        'scared',
        'worthless',
        'worried',
        'overwhelmed',
        'frightened',
        'terrified'
    ],

    'happy': [
        'optimistic',
        'inspired',
        'intimate',
        'playful',
        'peaceful',
        'content',
        'loving',
        'powerful',
        'respected',
        'proud',
        'amused',
        'joyful',
        'ecstatic',
        'free',
        'inquisitive',
        'confident',
        'adventurous',
        'fulfilled',
        'open'
    ],

    'sad': [
        'guilty',
        'abandoned',
        'despaired',
        'depressed',
        'lonely',
        'indifferent',
        'distant',
        'remorseful',
        'ashamed',
        'ignored',
        'withdrawn',
        'powerless',
        'vulnerable',
        'inferior',
        'empty',
        'isolated',
        'apathetic'
    ],

    'surprised': [
        'startled',
        'shocked',
        'confused',
        'dismayed',
        'amazed',
        'disillusioned',
        'excited',
        'astonished',
        'eager'
    ]
}

const colors = {
    'angry': 'red',
    'disgusted': 'purple',
    'afraid': 'darkorange',
    'happy': 'yellow',
    'sad': 'lightblue',
    'surprised': 'pink'
}

export function HomeScreen() {
    return (
        <ScrollView>
            <View style={{marginTop:20, marginBottom:30,justifyContent:'center', alignItems:'center',flex:1}}>
                <Text style={{ fontFamily:'sans-serif-light',fontSize:50, textAlign:'center'}}>How are you{'\n'}feeling?</Text>
            </View>
            {Object.keys(emotionCategories).map(category => {
                return (
                    <EmotionSelector
                        backgroundColor={colors[category]}
                        emotionCategory={category}
                        emotions={emotionCategories[category]}
                    />
                )
            })}
        </ScrollView>
    )
}
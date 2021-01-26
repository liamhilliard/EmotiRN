import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import EmotionSelectorScreen from './EmotionSelectorScreen';
import AddEmotionalStateScreen from './AddEmotionalStateScreen';

const Stack = createStackNavigator();
StatusBar.setBackgroundColor('#383636');

export default function HomeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Emotion Selector"
                component={EmotionSelectorScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Add Emotional State"
                component={AddEmotionalStateScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

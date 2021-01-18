import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmotionSelectorScreen from './emotion-selector/EmotionSelectorScreen';
import AddEmotionalStateScreen from './emotional-state/AddEmotionalStateScreen';

const Stack = createStackNavigator();

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
            />
        </Stack.Navigator>
    );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmotionSelectorScreen from './EmotionSelectorScreen';
import AddEmotionalStateScreen from './AddEmotionalStateScreen';

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
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

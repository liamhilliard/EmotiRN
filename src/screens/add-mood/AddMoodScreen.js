import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoodSelectorScreen from './selector/MoodSelectorScreen';
import MoodDetailsScreen from './details/MoodDetailsScreen';

const Stack = createStackNavigator();

export default function AddMoodScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MoodSelector"
                component={MoodSelectorScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MoodDetails"
                component={MoodDetailsScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

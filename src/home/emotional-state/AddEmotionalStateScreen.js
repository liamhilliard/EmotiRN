import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {emotions, groups, colors} from '../../core/emotions';

export default function AddEmotionalStateScreen({route}) {
    return (
        <ScrollView>
            <Text>{JSON.stringify(route.params)}</Text>
            <View>
                <Text>Describe what you're feeling</Text>
            </View>
            <View>
                <Text>Describe what you're feeling</Text>
            </View>
            <View>
                <Text>What caused you to feel this way?</Text>
            </View>
            <View>
                <Text>
                    Do you feel the urge to do, or avoid doing, something
                    because of these feelings?
                </Text>
            </View>
        </ScrollView>
    );
}

// const styles = StyleSheet.create({
//     titleContainer: {
//         marginTop: 20,
//         marginBottom: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1
//     },
//     titleText: {
//         fontFamily: 'sans-serif-light',
//         fontSize: 50,
//         textAlign: 'center'
//     }
// });

import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import EmotionPill from './EmotionPill';
import {emotions, groups, colors} from '../../core/emotions';

export default function AddEmotionalStateScreen({route}) {
    return (
        <ScrollView>
            <View style={styles.emotionsContainer}>
                {route.params.map((emotion) => {
                    return (
                        <EmotionPill
                            name={emotion}
                            categoryColor={colors[emotions[emotion]]}
                        />
                    );
                })}
            </View>
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

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingStart: 10,
        paddingEnd: 20,
        flex: 1,
        alignItems: 'center'
    },
    categoryTitle: {
        fontSize: 42,
        fontFamily: 'sans-serif-light',
        marginBottom: 3
    },
    emotionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 10
    }
});

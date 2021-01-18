import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, TextInput, Button} from 'react-native';
import EmotionPill from './emotional-state/EmotionPill';
import {emotions, groups, colors} from '../core/emotions';

export default function AddEmotionalStateScreen({route}) {
    return (
        <ScrollView>
            <View style={styles.emotionContainer}>
                <View style={styles.emotionPillsContainer}>
                    {route.params.map((emotion) => {
                        return (
                            <EmotionPill
                                key={emotion}
                                name={emotion}
                                categoryColor={colors[emotions[emotion]]}
                            />
                        );
                    })}
                </View>
            </View>
            <View style={styles.textInput}>
                <Text style={styles.textInputLabel}>
                    Describe what you're feeling
                </Text>
                <TextInput multiline={true} style={styles.textInputBox} />
            </View>
            <View style={styles.textInput}>
                <Text style={styles.textInputLabel}>
                    What caused you to feel this way?
                </Text>
                <TextInput multiline={true} style={styles.textInputBox} />
            </View>
            <View style={styles.textInput}>
                <Text style={styles.textInputLabel}>
                    Do you feel the urge to do, or avoid doing, something
                    because of these feelings?
                </Text>
                <TextInput style={styles.textInputBox} />
            </View>

            <Button title="Submit" onPress={() => {}} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    emotionContainer: {
        paddingTop: 15,
        paddingBottom: 10,
        paddingStart: 10,
        paddingEnd: 10,
        flex: 1,
        alignItems: 'center'
    },
    emotionsLabel: {
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        marginBottom: 8,
        marginTop: 8
    },
    emotionPillsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    textInput: {
        paddingBottom: 20,
        paddingStart: 15,
        paddingEnd: 15,
        flex: 1
    },
    textInputLabel: {
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        marginBottom: 8,
        marginTop: 8
    },
    textInputBox: {
        //backgroundColor: 'lightgray',
        height: 120,
        fontSize: 18,
        paddingStart: 8,
        paddingEnd: 5,
        textAlignVertical: 'top',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray'
    }
});

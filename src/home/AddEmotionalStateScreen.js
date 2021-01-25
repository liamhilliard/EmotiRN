import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, TextInput} from 'react-native';
import SelectorButton from './emotion-selector/SelectorButton';
import Button from './Button';

export default function AddEmotionalStateScreen({route}) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.emotionContainer}>
                <Text style={styles.textInputLabel}>Selected emotions</Text>
                <View style={styles.emotionPillsContainer}>
                    {route.params.map((emotion) => {
                        return (
                            <SelectorButton
                                key={emotion.name}
                                name={emotion.name}
                                selectedColor={emotion.group.color}
                                selected={true}
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

            <Button style={styles.button} title="Submit" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0eeeb'
    },
    emotionContainer: {
        marginStart: 15,
        marginEnd: 15
    },
    emotionPillsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    textInput: {
        marginStart: 15,
        marginEnd: 15
    },
    textInputLabel: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        marginBottom: 8,
        marginTop: 8
    },
    textInputBox: {
        height: 120,
        fontSize: 18,
        paddingStart: 8,
        paddingEnd: 5,
        textAlignVertical: 'top',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightgray'
    },
    button: {
        marginTop: 10,
        marginBottom: 25,
        marginStart: '20%',
        marginEnd: '20%'
    }
});

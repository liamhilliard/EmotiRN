import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, TextInput} from 'react-native';
import {Colors} from '../styles';
import Button from '../components/Button';
import { emotionGroups } from '../core/emotions';

export default function MoodDetailsScreen({route}) {
    const selectedIds = route.params;
    const emotions = emotionGroups.filter((emotion) => selectedIds[emotion.id]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                {emotions.length > 0 &&
                    <Text style={styles.textInputLabel}>Your mood</Text>
                }
                <View style={styles.emotionPillsContainer}>
                    {emotions.map(({icon}) => icon)}
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.textInputLabel}>
                    Describe what you're feeling
                </Text>
                <TextInput multiline={true} style={styles.textInputBox} />
            </View>
            <View style={styles.box}>
                <Text style={styles.textInputLabel}>
                    What caused you to feel this way?
                </Text>
                <TextInput multiline={true} style={styles.textInputBox} />
            </View>
            {/* <View style={styles.box}>
                <Text style={styles.textInputLabel}>
                    Do you feel the urge to do, or avoid doing, something
                    because of these feelings?
                </Text>
                <TextInput style={styles.textInputBox} />
            </View> */}

            <View style={styles.btnContainer}>
                <Button
                    title="Add"
                    onPress={() => {
                        // navigation.navigate('MoodDetails', []);
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background
    },
    emotionPillsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        paddingHorizontal: 30
    },
    textInputLabel: {
        fontFamily: 'Nunito-Bold',
        fontSize: 19,
        color: Colors.text,
        paddingTop: 20,
        paddingBottom: 10
    },
    textInputBox: {
        fontFamily: 'Nunito-Regular',
        color: Colors.text,
        height: 130,
        fontSize: 18,
        paddingStart: 8,
        paddingEnd: 5,
        textAlignVertical: 'top',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.backgroundAltRipple,
        backgroundColor: Colors.backgroundAlt
    },
    btnContainer: {
        marginHorizontal: '30%'
    }
});

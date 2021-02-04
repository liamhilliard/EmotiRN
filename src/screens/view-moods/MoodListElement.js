import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Mood} from '../../core';
import {Colors} from '../../styles';
import {Icons} from '../../components';

export default function MoodListElement({mood}) {
    const timeString = new Date(mood.date).toLocaleTimeString();

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{timeString}</Text>
            <Text style={styles.description}>{mood.description}</Text>
            <View style={styles.emotions}>
                {Mood.EMOTIONS.filter(({id}) => mood.emotions.includes(id)).map(
                    ({name}) => Icons[name]
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundAlt,
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 15
    },
    time: {
        fontFamily: 'Nunito-Bold',
        color: Colors.text,
        fontSize: 16
    },
    description: {

    },
    emotions: {
        flex: 1,
        flexDirection: 'row'
    }
});

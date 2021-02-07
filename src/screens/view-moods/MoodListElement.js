import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Mood} from '../../core';
import {Colors} from '../../styles';
import {Icons} from '../../components';

export default function MoodListElement({mood}) {
    const timeString = new Date(mood.date)
        .toLocaleTimeString()
        .replace(/:\d{2}$/, '');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.time}>{timeString}</Text>
                <View style={styles.emotions}>
                    {Mood.EMOTIONS.filter(({id}) =>
                        mood.emotions.includes(id)
                    ).map(({name}) => (
                        <View style={styles.emotionIcon} key={name}>
                            {Icons[name](25)}
                        </View>
                    ))}
                </View>
            </View>
            <Text style={styles.textTitle}>Description</Text>
            <Text style={styles.textBody}>{mood.description}</Text>
            <Text style={styles.textTitle}>Cause</Text>
            <Text style={styles.textBody}>{mood.cause}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderBottomWidth: 3,
        borderBottomColor: Colors.backgroundAlt
    },
    header: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        color: Colors.text
    },
    emotions: {
        flexDirection: 'row'
    },
    emotionIcon: {
        paddingStart: 6
    },
    textTitle: {
        fontFamily: 'Nunito-Bold',
        fontSize: 15,
        color: Colors.text,
        marginVertical: 5,
        paddingHorizontal: 10,
        // paddingStart: 30
    },
    textBody: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 15,
        color: Colors.text,
        marginBottom: 10,
        paddingHorizontal: 10,
        // paddingStart: 30
    }
});

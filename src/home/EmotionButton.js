import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function EmotionButton({feelings, color, icon, onSelect}) {
    return (
        <Pressable style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.icon}>
                <FontAwesomeIcon color={color} size={32} icon={icon} />
            </View>
            <Text style={styles.feelings}>
                {feelings.map((emotion) => {
                    return <Text key={emotion}>{emotion}</Text>;
                })}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        marginStart: 15,
        marginEnd: 15,
        elevation: 5,
        // flex: 1
    },
    icon: {
        // marginTop: 50,
        // marginBottom: 30
    },
    feelings: {
        fontFamily: 'Nunito-Regular',
        // fontSize: 48,
        textAlign: 'center',
        color: '#383636'
    }
});

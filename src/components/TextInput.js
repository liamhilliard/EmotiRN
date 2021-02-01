import React from 'react';
import {StyleSheet, Text, View, TextInput as RnTextInput} from 'react-native';
import {Colors} from '../styles';

export default function TextInput({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <RnTextInput multiline={true} style={styles.textInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    label: {
        fontFamily: 'Nunito-Bold',
        fontSize: 19,
        color: Colors.text,
        paddingBottom: 15
    },
    textInput: {
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
        backgroundColor: Colors.backgroundAlt2
    }
});

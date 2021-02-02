import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors} from '../../../styles';

export default function MoodDescriptor({title, onChange}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <TextInput
                multiline={true}
                style={styles.textInput}
                onChange={onChange}
            />
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
        height: 155,
        fontSize: 19,
        paddingStart: 10,
        paddingEnd: 5,
        textAlignVertical: 'top',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.backgroundAltRipple,
        backgroundColor: Colors.backgroundAlt2
    }
});

import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

export default function Button ({title, onPress, style}){
    return (
        <View style={[styles.container, style]}>
            <Pressable style={[styles.button]} onPress={onPress} android_ripple={{color:'white'}}>
                <Text style={styles.buttonTxt}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        elevation: 5,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 10,
        marginStart: '20%',
        marginEnd: '20%'
    },
    button: {
        backgroundColor: '#4287f5'
    },
    buttonTxt: {
        textAlign: 'center',
        overflow: 'hidden',
        color: 'white',
        fontSize: 24,
        padding: 8,
        fontFamily: 'Nunito-SemiBold'
    }
});

import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

export default function Button ({title, onPress, style}){
    return (
        <View style={[styles.container, style]}>
            <Pressable style={[styles.button]} onPress={onPress} android_ripple={{color:'white'}}>
                <Text style={styles.buttonTxt} >{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        elevation: 5,

        // margin: 20,
        overflow: 'hidden'
        // backgroundColor: 'red'
    },
    button: {
        backgroundColor: '#4287f5'
        // borderRadius: 15,
        // overflow: 'hidden',
        // padding: 2
    },
    buttonTxt: {
        textAlign: 'center',
        overflow: 'hidden',
        color: 'white',
        fontSize: 24,
        padding: 8
    }
});

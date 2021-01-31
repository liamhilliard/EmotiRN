import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

export default function Button({
    title,
    onPress,
    backgroundColor,
    color,
    rippleColor
}) {
    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Pressable
                style={[styles.button]}
                onPress={onPress}
                android_ripple={{color: rippleColor || 'white'}}>
                <Text style={[styles.buttonTxt, {color: color || 'white'}]}>
                    {title}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        elevation: 5,
        overflow: 'hidden'
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

import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {Colors} from '../styles';

export default function Button({
    title,
    onPress,
    backgroundColor,
    color,
    rippleColor,
    disabled
}) {
    let bgColor;
    if(disabled) {
        bgColor = Colors.backgroundAlt;
    } else {
        bgColor = (backgroundColor || Colors.secondary);
    }

    const fgColor = color || Colors.background;
    const fgRippleColor = rippleColor || Colors.secondaryAlt;
    return (
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <Pressable
                disabled={disabled}
                style={[styles.button]}
                onPress={onPress}
                android_ripple={{color: fgRippleColor}}>
                <Text style={[styles.buttonTxt, {color: fgColor}]}>
                    {title}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        overflow: 'hidden',
        marginHorizontal: '30%'
    },
    buttonTxt: {
        textAlign: 'center',
        overflow: 'hidden',
        fontSize: 24,
        padding: 8,
        fontFamily: 'Nunito-SemiBold'
    }
});

import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

export default function SelectorButton({
    name,
    selectedColor,
    selected,
    onPress,
    style
}) {
    const selectedStyles = {
        color: 'white',
        borderColor: selectedColor,
        backgroundColor: selectedColor
    };
    const unselectedStyles = {
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'transparent'
    };

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.btn,
                style,
                selected ? selectedStyles : unselectedStyles
            ]}>
            <Text style={[styles.txt, styles.icon, style]}>
                {selected ? '－' : '＋'}
            </Text>
            <Text style={[styles.txt]}>{name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        margin: 3,
        paddingTop: 1,
        paddingBottom: 4,
        paddingStart: 8,
        paddingEnd: 10,
        borderRadius: 14,
        borderWidth: 2
    },

    txt: {
        textAlign: 'center',
        fontSize: 18
    },

    icon: {
        marginTop: 5,
        marginEnd: 5,
        fontSize: 14,
        fontWeight: 'bold'
    }
});

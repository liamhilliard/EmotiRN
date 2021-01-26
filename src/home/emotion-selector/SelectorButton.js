/* eslint-disable indent */
import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

export default function SelectorButton({
    name,
    selectedColor,
    selected,
    onPress,
    style
}) {
    const colors = selected
        ? {
              color: 'white',
              backgroundColor: selectedColor,
              borderColor: selectedColor
          }
        : {
              color: selectedColor,
              backgroundColor: 'transparent',
              borderColor: selectedColor
          };

    const elevation = selected ? {elevation: 3} : {elevation: 0};

    return (
        <Pressable
            onPress={onPress}
            style={[styles.btn, style, colors, elevation]}>
            <Text style={[styles.txt, styles.icon, style, colors]}>
                {onPress && (selected ? '－' : '＋')}
            </Text>
            <Text style={[styles.txt, colors]}>{name}</Text>
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
        fontFamily: 'Nunito-Bold',
        fontSize: 16
    },
    icon: {
        marginTop: 5,
        marginEnd: 5,
        fontSize: 11,
        fontFamily: 'Nunito-Bold',
        fontWeight: 'bold'
    }
});

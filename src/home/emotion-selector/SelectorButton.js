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
        <Pressable onPress={onPress}>
            <Text
                style={[
                    style,
                    styles.emotName,
                    selected ? selectedStyles : unselectedStyles
                ]}>
                {name}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    emotName: {
        textAlign: 'center',
        fontSize: 18,
        margin: 3,
        paddingTop: 3,
        paddingBottom: 3,
        paddingStart: 10,
        paddingEnd: 10,
        borderRadius: 50,
        borderWidth: 1.5
    }
});

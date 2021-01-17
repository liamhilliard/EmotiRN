import React, {useState} from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

export default function EmotionSelectorButton(props) {
    const [isSelected, setIsSelected] = useState(false);

    const selectedStyles = {
        color: 'white',
        borderColor: props.categoryColor,
        backgroundColor: props.categoryColor
    };
    const unselectedStyles = {
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'transparent'
    };

    return (
        <Pressable
            onPress={() => {
                props.onElementSelect(props.name, !isSelected);
                setIsSelected(!isSelected);
            }}>
            <Text
                style={[
                    styles.emotName,
                    isSelected ? selectedStyles : unselectedStyles
                ]}>
                {props.name}
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

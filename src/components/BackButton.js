import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Colors} from '../styles';

export default function BackButton({color, onPress}) {
    const fgColor = color || Colors.secondary;
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <FontAwesomeIcon icon={faArrowLeft} color={fgColor} size={36} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        padding: 15,
        borderBottomEndRadius: 50
    }
});

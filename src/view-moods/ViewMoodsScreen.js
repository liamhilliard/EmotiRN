import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../styles';

export default function ViewMoodsScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello View Modds</Text>        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        height: '100%',
        width: '100%'
    }
});

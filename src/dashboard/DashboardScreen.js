import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Colors} from '../styles';

export default function DashboardScreen() {
    console.log('DASHBOARD SCREEN');

    return (
        <ScrollView style={styles.container}>
            <Text>Hello Dashboard</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20
    }
});

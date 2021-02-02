import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {Colors} from '../../styles';

export default function DashboardScreen() {
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

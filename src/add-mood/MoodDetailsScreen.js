import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {Colors} from '../styles';
import Button from '../components/Button';
import MoodDescriptor from '../components/MoodDescriptor';
import {emotionGroups} from '../core/emotions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faCheck} from '@fortawesome/free-solid-svg-icons';
import BackButton from '../components/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MoodDetailsScreen({navigation, route}) {
    const selectedIds = route.params;

    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>
                <View style={styles.emotions}>
                    {emotionGroups.map(({id, icon}) => {
                        return (
                            <View style={styles.emotionsCol} key={id}>
                                {icon}
                                <View style={styles.emotionSelect}>
                                    <FontAwesomeIcon
                                        color={Colors.secondary}
                                        size={selectedIds[id] ? 22 : 10}
                                        icon={selectedIds[id] ? faCheck : faCircle}
                                    />
                                </View>
                            </View>
                        );
                    })}
                </View>
                <MoodDescriptor title="Describe how you feel" />
                <MoodDescriptor title="What caused you to feel this way?" />

                <View style={styles.buttonWrapper}>
                    <Button
                        title="Add"
                        onPress={() => {
                            // Persist Mood
                            // AsyncStorage.setItem('MyApp', JSON.stringify().then().catch();
                        }}
                    />
                </View>
            </ScrollView>
            <BackButton onPress={navigation.goBack} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        height: '100%'
    },
    scrollView: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    emotions: {
        alignSelf: 'center',
        backgroundColor: Colors.backgroundAlt,
        flex: 1,
        padding: 12,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 40
    },
    emotionsCol: {
        paddingHorizontal: 4
    },
    emotionSelect: {
        marginTop: 10,
        height: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonWrapper: {
        marginBottom: 20
    }
});

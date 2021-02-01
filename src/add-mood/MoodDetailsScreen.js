import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {Colors} from '../styles';
import Button from '../components/Button';
import MoodDescriptor from '../components/MoodDescriptor';
import {emotionGroups} from '../core/emotions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faCheck} from '@fortawesome/free-solid-svg-icons';

export default function MoodDetailsScreen({route}) {
    const selectedIds = route.params;
    // const emotions = emotionGroups.filter((emotion) => selectedIds[emotion.id]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.emotions}>
                {emotionGroups.map(({id, icon}) => {
                    return (
                        <View style={styles.emotionsCol}>
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

            <Button
                title="Add"
                onPress={() => {
                    // navigation.navigate('MoodDetails', []);
                }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
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
    emotionSelect: {
        marginTop: 10,
        height: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

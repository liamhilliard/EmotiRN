import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MoodSelector from './MoodSelector';
import {emotionGroups} from '../core/emotions';
import Button from './Button';
import {Colors} from '../styles';

export default function MoodSelectorScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>How are you{'\n'}feeling?</Text>
            <View style={styles.moodContainer}>
                {emotionGroups.map(({id, feelings, color, icon}) => {
                    return (
                        <MoodSelector
                            key={id}
                            feelings={feelings}
                            color={color}
                            icon={icon}
                            onSelect={() => {
                                // something
                            }}
                        />
                    );
                })}
            </View>
            <View style={styles.btnContainer}>
                <Button
                    backgroundColor={Colors.secondary}
                    rippleColor={Colors.secondaryAlt}
                    color={Colors.background}
                    title="Next"
                    onPress={() => {
                        navigation.navigate('MoodDetails', []);
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20
    },
    titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 36,
        textAlign: 'center',
        color: Colors.text
    },
    btnContainer: {
        marginHorizontal: '30%'
    }
});

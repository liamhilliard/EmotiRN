import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export default function EmotionButton({feelings, icon, onSelect}) {
    const [isSelected, setSelected] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.pressable]}
                onPress={() => {
                    // onSelect();
                    setSelected(!isSelected);
                }}
                android_ripple={{color: '#bfab8e'}}>
                {icon}
                <Text style={styles.feelings}>{feelings.join(', ')}</Text>
                <FontAwesomeIcon
                    style={styles.checkContainer}
                    color={'#734e44'}
                    size={36}
                    icon={isSelected ? faCheckCircle : faCircle}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        height: 55,
        marginBottom: 10,
        borderRadius: 100
    },
    pressable: {
        backgroundColor: '#dbcfbd',
        paddingHorizontal: 11,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    feelings: {
        fontFamily: 'Nunito-Bold',
        fontSize: 19,
        paddingStart: 20,
        paddingEnd: 10,
        textAlignVertical: 'center',
        color: '#383636',
        flex: 1
    },
    checkContainer: {
        alignSelf: 'center'
    }
});

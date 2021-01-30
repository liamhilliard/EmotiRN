import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, PixelRatio} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function EmotionButton({feelings, color, icon, onSelect}) {
    const [isSelected, setSelected] = useState(false);

    return (
        <Pressable
            style={[
                styles.container,
                isSelected
                    ? {borderColor: color, backgroundColor: color, elevation: 5}
                    : {borderColor: '#888', backgroundColor: 'white', elevation: 0}
            ]}
            onPress={() => {
                // onSelect();
                setSelected(!isSelected);
            }}>
            <Text style={[styles.feelings, {color: isSelected ? 'white' : '#383636'}]}>{feelings.join(', ')}</Text>
            <View style={styles.icon}>
                <FontAwesomeIcon color={isSelected ? color : '#888'} size={32} icon={icon} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightgray',
        marginStart: 30,
        marginEnd: 30,
        marginBottom: 15,
        paddingStart: 15,
        paddingEnd: 0,
        // paddingVertical: 5,
        borderRadius: 50,
        borderWidth: 3,
        // elevation: 5,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    icon: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50
    },
    feelings: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        textAlignVertical: 'center',
        color: '#383636',
        // backgroundColor: '#94928b',
        flex: 1,
        flexDirection: 'row'
    }
});

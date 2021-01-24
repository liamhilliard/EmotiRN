import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Pressable, Animated, Easing} from 'react-native';
import SelectorButton from './SelectorButton';

/*
    TODO: Remove duplication between selected/not selected emotions
    TODO: Refactor to only accept an object for selectorOptions
*/

export default function SelectorGroup({selectorOptions, onUpdate, title, color}) {
    const [isOpen, setIsOpen] = useState(false);
    const animHeight = useRef(new Animated.Value(0)).current;
    const [options] = useState([...selectorOptions]);
    const [values, setValues] = useState({});
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        Animated.timing(animHeight, {
            toValue: isOpen ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }, [animHeight, isOpen]);

    const maxHeight = animHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
    });

    return (
        <View style={styles.container}>
            <Pressable style={styles.titleContainer} onPress={toggleOpen}>
                <Text style={[styles.titleText, {color}]}>{title}</Text>
                <View style={styles.titleIcon}>
                    <FontAwesomeIcon
                        color={color}
                        size={25}
                        icon={isOpen ? faChevronUp : faChevronDown}
                    />
                </View>
            </Pressable>
            <Animated.View
                style={[
                    styles.childContainer,
                    {maxHeight: isOpen ? maxHeight : 'auto'}
                ]}>
                {options
                    .filter((opt) => values[opt] || isOpen)
                    .map((opt) => {
                        return (
                            <SelectorButton
                                key={opt}
                                name={opt}
                                selectedColor={color}
                                selected={values[opt]}
                                onPress={() => {
                                    const change = {[opt]: !values[opt]};
                                    setValues({...values, ...change});
                                    onUpdate(change);
                                }}
                            />
                        );
                    })}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    titleContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-light',
        marginBottom: 4,
        marginStart: 4,
        color: 'white'
    },
    titleIcon: {
        justifyContent: 'center'
    },
    childContainer: {
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

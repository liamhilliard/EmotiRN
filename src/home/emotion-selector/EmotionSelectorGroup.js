import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Pressable, Animated, Easing} from 'react-native';
import { emotions } from '../../core/emotions';

export default function EmotionSelectorGroup({children, title, selectedColor}) {
    const [isOpen, setIsOpen] = useState(false);
    const animHeight = useRef(new Animated.Value(0)).current;
    //const [childHeight, setChildHeight] = useState(0);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            Animated.timing(animHeight, {
                toValue: 1,
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(animHeight, {
                toValue: 0,
                duration: 100,
                easing: Easing.linear,
                useNativeDriver: false
            }).start();
        }
    }, [animHeight, isOpen]);

    const maxHeight = animHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 200]
    });

    return (
        <View style={styles.container}>
            <Pressable style={styles.titleContainer} onPress={toggleOpen}>
                <Text style={[styles.titleText, {color: selectedColor}]}>
                    {title}
                </Text>
                <View style={styles.titleIcon}>
                    <FontAwesomeIcon
                        color={selectedColor}
                        size={25}
                        icon={isOpen ? faChevronUp : faChevronDown}
                    />
                </View>
            </Pressable>
            <Animated.View style={[styles.childContainer, {maxHeight}]}>
                {children}
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
        fontSize: 32,
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

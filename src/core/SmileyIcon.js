import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';

const defaultSize = 30;
const insetValue = 2;

export default function SmileyIcon({size, icon, accentColor}) {
    const bgColor = '#f0d78b';
    const bgColorAccent = accentColor || '#f0d28b';
    const fgColor = '#383636';
    const iconSize = size || defaultSize;
    const iconBgSize = iconSize - insetValue;
    const iconRadius = size / 2;
    const iconBgRadius = iconBgSize / 2;

    return (
        <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
                <Svg height={size} width={size}>
                    <Defs>
                        <LinearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%">
                            <Stop offset="0%" stopColor={bgColorAccent} />
                            <Stop offset="70%" stopColor={bgColor} />
                        </LinearGradient>
                    </Defs>
                    <Circle
                        cx={iconRadius}
                        cy={iconRadius}
                        r={iconBgRadius}
                        fill="url(#gradient)"
                    />
                </Svg>
            </View>
            <FontAwesomeIcon color={fgColor} size={size} icon={icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center'
    },
    iconBackground: {
        alignSelf: 'center',
        position: 'absolute'
    }
});

import {
    faFrownOpen as iconAfraid,
    faAngry as iconAnger,
    faTired as iconDisgusted,
    faSmile as iconHappy,
    faFrown as iconSad,
    faSurprise as iconSurprised
} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import {Colors} from '../styles';
import SmileyIcon from './SmileyIcon';

const Icons = {
    afraid: (size) => <SmileyIcon icon={iconAfraid} size={size || 36} />,
    angry: (size) => <SmileyIcon accentColor={Colors.smiley.moods.angry} icon={iconAnger} size={size || 36} />,
    disgusted: (size) => <SmileyIcon accentColor={Colors.smiley.moods.disgusted} icon={iconDisgusted} size={size || 36} />,
    happy: (size) => <SmileyIcon icon={iconHappy} size={size || 36} />,
    sad: (size) => <SmileyIcon icon={iconSad} size={size || 36} />,
    surprised: (size) => <SmileyIcon accentColor={Colors.smiley.moods.sad} icon={iconSurprised} size={size || 36} />
};

export default Icons;

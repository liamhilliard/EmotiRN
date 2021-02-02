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
    afraid: <SmileyIcon icon={iconAfraid} size={36} />,
    angry: <SmileyIcon accentColor={Colors.smiley.moods.angry} icon={iconAnger} size={36} />,
    disgusted: <SmileyIcon accentColor={Colors.smiley.moods.disgusted} icon={iconDisgusted} size={36} />,
    happy: <SmileyIcon icon={iconHappy} size={36} />,
    sad: <SmileyIcon icon={iconSad} size={36} />,
    surprised: <SmileyIcon accentColor={Colors.smiley.moods.sad} icon={iconSurprised} size={36} />
};

export default Icons;

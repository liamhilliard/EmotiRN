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

const emotionGroups = [
    {
        id: 1,
        feelings: ['anxious', 'afraid', 'terrified'],
        icon: <SmileyIcon icon={iconAfraid} size={36} />
    },
    {
        id: 2,
        feelings: ['annoyed', 'angry', 'furious'],
        icon: <SmileyIcon accentColor={Colors.smiley.moods.angry} icon={iconAnger} size={36} />
    },
    {
        id: 3,
        feelings: ['bored', 'disgusted', 'loathing'],
        icon: <SmileyIcon accentColor={Colors.smiley.moods.disgusted} icon={iconDisgusted} size={36} />
    },
    {
        id: 4,
        feelings: ['content', 'happy', 'ecstatic'],
        icon: <SmileyIcon icon={iconHappy} size={36} />
    },
    {
        id: 5,
        feelings: ['lonely', 'sad', 'depressed'],
        icon: <SmileyIcon icon={iconSad} size={36} />
    },
    {
        id: 6,
        feelings: ['distracted', 'surprised', 'amazed'],
        icon: <SmileyIcon accentColor={Colors.smiley.moods.sad} icon={iconSurprised} size={36} />
    }
];

export {emotionGroups};

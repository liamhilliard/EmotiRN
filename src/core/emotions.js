import {
    faAngry,
    faFlushed,
    faFrown,
    faSmile,
    faSurprise,
    faTired
} from '@fortawesome/free-regular-svg-icons';

const emotionGroups = [
    {
        id: 1,
        feelings: ['anxious', 'afraid', 'terrified'],
        color: '#74ac33',
        icon: faFlushed
    },
    {
        id: 2,
        feelings: ['annoyed', 'anger', 'furious'],
        color: '#f44336',
        icon: faAngry
    },
    {
        id: 3,
        feelings: ['bored', 'disgusted', 'loathing'],
        color: '#a13cb2',
        icon: faTired
    },
    {
        id: 4,
        feelings: ['content', 'happy', 'ecstatic'],
        color: '#f5a620',
        icon: faSmile
    },
    {
        id: 5,
        feelings: ['lonely', 'sad', 'depressed'],
        color: '#2f97ea',
        icon: faFrown
    },
    {
        id: 6,
        feelings: ['distracted', 'surprised', 'amazed'],
        color: '#678a9a',
        icon: faSurprise
    }
];

export {emotionGroups};

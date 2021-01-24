import {faAngry,faFlushed,faFrown,faFrownOpen,faSadCry,faSadTear,faSmile,faSurprise,faTired} from '@fortawesome/free-regular-svg-icons';

const groups = Object.freeze({
    AFRAID: {color: '#74ac33', icon: faFlushed},
    ANGRY: {color: '#f44336', icon: faAngry},
    DISGUSTED: {color: '#a13cb2', icon: faTired},
    HAPPY: {color: '#f5a620', icon: faSmile},
    SAD: {color: '#2f97ea', icon: faFrown},
    SURPRISED: {color: '#678a9a', icon: faSurprise}
});

const emotions = [
    //angry
    {name: 'aggressive', group: groups.ANGRY},
    {name: 'annoyed', group: groups.ANGRY},
    {name: 'disrespected', group: groups.ANGRY},
    {name: 'frustrated', group: groups.ANGRY},
    {name: 'furious', group: groups.ANGRY},
    {name: 'hateful', group: groups.ANGRY},
    {name: 'hurt', group: groups.ANGRY},
    {name: 'jealous', group: groups.ANGRY},
    {name: 'resentful', group: groups.ANGRY},
    {name: 'suspicious', group: groups.ANGRY},
    {name: 'threatened', group: groups.ANGRY},

    //afraid
    {name: 'anxious', group: groups.AFRAID},
    {name: 'inadequate', group: groups.AFRAID},
    {name: 'insecure', group: groups.AFRAID},
    {name: 'overwhelmed', group: groups.AFRAID},
    {name: 'rejected', group: groups.AFRAID},
    {name: 'ridiculed', group: groups.AFRAID},
    {name: 'scared', group: groups.AFRAID},
    {name: 'submissive', group: groups.AFRAID},
    {name: 'terrified', group: groups.AFRAID},
    {name: 'worried', group: groups.AFRAID},
    {name: 'worthless', group: groups.AFRAID},

    //disgusted
    {name: 'avoidant', group: groups.DISGUSTED},
    {name: 'awful', group: groups.DISGUSTED},
    {name: 'bored', group: groups.DISGUSTED},
    {name: 'disapproving', group: groups.DISGUSTED},
    {name: 'embarrassed', group: groups.DISGUSTED},
    {name: 'hesitant', group: groups.DISGUSTED},
    {name: 'humiliated', group: groups.DISGUSTED},
    {name: 'judgemental', group: groups.DISGUSTED},
    {name: 'loathing', group: groups.DISGUSTED},
    {name: 'revolted', group: groups.DISGUSTED},

    //happy
    {name: 'adventurous', group: groups.HAPPY},
    {name: 'confident', group: groups.HAPPY},
    {name: 'content', group: groups.HAPPY},
    {name: 'ecstatic', group: groups.HAPPY},
    {name: 'fulfilled', group: groups.HAPPY},
    {name: 'inquisitive', group: groups.HAPPY},
    {name: 'inspired', group: groups.HAPPY},
    {name: 'loving', group: groups.HAPPY},
    {name: 'open', group: groups.HAPPY},
    {name: 'optimistic', group: groups.HAPPY},
    {name: 'proud', group: groups.HAPPY},
    {name: 'respected', group: groups.HAPPY},

    //sad
    {name: 'abandoned', group: groups.SAD},
    {name: 'apathetic', group: groups.SAD},
    {name: 'ashamed', group: groups.SAD},
    {name: 'depressed', group: groups.SAD},
    {name: 'distant', group: groups.SAD},
    {name: 'empty', group: groups.SAD},
    {name: 'guilty', group: groups.SAD},
    {name: 'ignored', group: groups.SAD},
    {name: 'insignificant', group: groups.SAD},
    {name: 'lonely', group: groups.SAD},
    {name: 'powerless', group: groups.SAD},
    {name: 'vulnerable', group: groups.SAD},

    //surprise
    {name: 'astonished', group: groups.SURPRISED},
    {name: 'amazed', group: groups.SURPRISED},
    {name: 'confused', group: groups.SURPRISED},
    {name: 'curious', group: groups.SURPRISED},
    {name: 'disappointed', group: groups.SURPRISED},
    {name: 'disillusioned', group: groups.SURPRISED},
    {name: 'dismayed', group: groups.SURPRISED},
    {name: 'excited', group: groups.SURPRISED},
    {name: 'shocked', group: groups.SURPRISED}
];

export {emotions, groups};

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ScrollView>
        <Text>Some text</Text>
        <View>
            <Text>Some more text</Text>
            <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width:200,height:200}}/>
        </View>
        <TextInput style={{height:40,borderColor:'gray',borderWidth:1}} defaultValue="Type here"/>
    </ScrollView>
  );
};
export default App;

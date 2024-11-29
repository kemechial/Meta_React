import * as React from "react";
import {View} from 'react-native';

import LittleLemonHeader from "../SampleProject/components/LittleLemonHeader";

export default function App() {
    return (
        <View style={{flex:1, justifyContent: "flex-start", padding: 45 }}>
            <LittleLemonHeader/>
        </View>
    );
}
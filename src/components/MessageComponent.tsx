import React from "react";
import { View } from 'react-native';
import { Text } from 'react-native';

const MessageComponent = (props) => {
    return (
        <View>
            { props.message ?
            <Text style={{
                // borderColor: "gray",
                // borderWidth: 2,
                // fontSize: '1.2em',
                padding: '0 1em',
                color: props.message.type === 'danger' ? 'red' : (props.message.type === 'warn' ? 'yellow' : 'green')}}>
                {props.message.text}
            </Text>
                : null }
        </View>
    );
};

export default MessageComponent;
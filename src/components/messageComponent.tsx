import React from "react";
import { View } from 'react-native';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class MessageComponent extends React.Component<{message: any}> {

    color() {
        if (this.props.message.type === 'danger') {
            return 'red';
        } else if (this.props.message.type === 'warning') {
            return 'yellow';
        } else if (this.props.message.type === 'info') {
            return 'green';
        } else if (this.props.message.type === 'success' ) {
            return 'green';
        } else {
            return 'red';
        }
    }

    icon() {
        if (this.props.message.type === 'danger') {
            return 'ios-close-circle-outline';
        } else if (this.props.message.type === 'warning') {
            return 'ios-warning';
        } else if (this.props.message.type === 'info') {
            return 'ios-information-circle-outline';
        } else if (this.props.message.type === 'success' ) {
            return 'ios-checkmark-circle-outline';
        } else {
            return 'ios-information-circle-outline';
        }
    }

    message() {
        if (this.props.message) {
            return this.props.message.text;
        } else {
            return 'Http status ' + this.props.message.status;
        }
    }

    render() {
        return (
            <View>
                {this.props.message ? <>
                    <Text style={{
                        // borderColor: "gray",
                        // borderWidth: 2,
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        padding: '0 1em',
                        color: this.color()
                    }}>
                        <Ionicons name={this.icon()} size={24}/> {this.message()}
                    </Text>
                </> : null}
            </View>
        );
    }
};

export default MessageComponent;
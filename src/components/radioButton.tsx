import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
interface State {
	value: boolean;
}
interface Props {
	action: Function;
	options: any[];
}
export default class RadioButtons extends React.Component<Props, State> {
	state: State = {
		value: null,
	};
	action = (value) => {
		
		console.log("RadioButtons", this)
    this.props.action(value)
	};
	render() {
		const { options } = this.props;
		const { value } = this.state;
		return (
			<View>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
							<Text>{item.text}</Text>
							<TouchableOpacity
								style={styles.circle}
								onPress={() => {
									this.setState({
										value: item.key,
									});
								this.action(item.key);
								}}
							>
								{value === item.key && <View style={styles.checkedCircle} />}
							</TouchableOpacity>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 16,
	},

	circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#ACACAC',
		alignItems: 'center',
		justifyContent: 'center',
	},
  
	checkedCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#794F9B',
	},
});

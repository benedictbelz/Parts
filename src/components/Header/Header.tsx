import * as Variables from '../../styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>Parts</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 100,
		backgroundColor: Variables.color_black,
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		padding: 25
	},
	title: {
		color: Variables.color_white,
		fontSize: 25
	}
});
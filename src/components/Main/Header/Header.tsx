import React from 'react';
import Variables from '../../../styles/Variables';
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
		height: Variables.spacing.header,
		backgroundColor: Variables.color.black,
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		padding: Variables.spacing.m
	},
	title: {
		color: Variables.color.white,
		fontSize: Variables.font.size.l
	}
});
import React from 'react';
import Constants from 'expo-constants';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

const App = () => {
	return (
		<>
			<View style={styles.status}/>
			<View style={styles.app}>
				<Header/>
				<Main/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	status: {
		height: Constants.statusBarHeight,
		backgroundColor: '#000000'
	},
	app: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default registerRootComponent(App);

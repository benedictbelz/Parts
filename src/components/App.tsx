import React, { useEffect } from 'react';
import Constants from 'expo-constants';
import Variables from '../styles/Variables';
import { registerRootComponent } from 'expo';
import { StyleSheet,View } from 'react-native';
import { Header } from './Main/Header/Header';
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
		backgroundColor: Variables.color.black
	},
	app: {
		flex: 1,
		backgroundColor: Variables.color.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default registerRootComponent(App);

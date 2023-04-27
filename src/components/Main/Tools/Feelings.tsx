import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Dialog } from '../Shared/Dialog';

interface Props {
    onClose: () => void;
}

export const Feelings = (props: Props) => {

	return (
		<Dialog onClose={props.onClose}>
            <Text style={styles.text}> Hello</Text>
        </Dialog>
	);
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
    }
});
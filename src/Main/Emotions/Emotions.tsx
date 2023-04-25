import React from 'react';
import { Text, StyleSheet, View, Modal, TouchableWithoutFeedback } from 'react-native';

interface Props {
    onClose: () => void;
}

export const Emotions = (props: Props) => {

	return (
		<Modal style={styles.modal}>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => props.onClose()}>
                    <View style={styles.cross}>
                        <View style={[styles.line, styles.lineOne]}/>
                        <View style={[styles.line, styles.lineTwo]}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}> Hello</Text>
            </View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modal: {
        flex: 1,
		backgroundColor: '#000000',
        width: '100%',
	},
    header: {
        height: 100,
        backgroundColor: '#000000',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    content: {
        flex: 10,
        color: '#ffffff',
        backgroundColor: '#000000',
        padding: 25
    },
    text: {
        color: '#ffffff',
    },
    cross: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    line: {
        height: 3,
        width: 30,
        marginVertical: 0,
        backgroundColor: '#ffffff',
        position: 'absolute'
    },
    lineOne: {
        transform: [{rotate: '45deg'}],
    },
    lineTwo: {
        transform: [{rotate: '-45deg'}],
    },
});
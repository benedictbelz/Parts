import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Emotions } from './Emotions/Emotions';

export const Main = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<View style={styles.main}>
            <Button
                title='How Are You Feeling?'
                onPress={() => setShowModal(true)}
            />
            {showModal ? (
                <Emotions
                    onClose={() => setShowModal(false)}
                />
            ): null}
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
        flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
        width: '100%',
        padding: 25
	},
});
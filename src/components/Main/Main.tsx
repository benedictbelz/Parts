import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import { Feelings } from './Tools/Feelings'
import { Grid } from './Shared/Grid'
import Variables from '../../styles/Variables'

interface States {
    tools: 'None' | 'Feelings'
}

export const Main = () => {
    const [showTools, setShowTools] = useState<States['tools']>('None')

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <ScrollView style={{ flex: 1, width: '100%' }}>
                <View style={styles.main}>
                    <Grid columns={2} gap={Variables.spacing.m}>
                        <Pressable onPress={() => setShowTools('Feelings')} style={({ pressed }) => [styles.box, pressed ? styles.boxPressed : {}]}>
                            {() => (
                                <>
                                    <Text style={[styles.text, { paddingBottom: 10 }]}>How are you feeling?</Text>
                                    <Text style={styles.text}>🙂</Text>
                                </>
                            )}
                        </Pressable>
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        {/* <View style={styles.box}/> */}
                    </Grid>
                </View>
            </ScrollView>
            {showTools === 'Feelings' && <Feelings onClose={() => setShowTools('None')} />}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: Variables.spacing.m,
        backgroundColor: Variables.color.white,
    },
    box: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: Variables.color.black,
        borderRadius: Variables.border.radius.l,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    boxPressed: {
        backgroundColor: '#00ffff',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
    },
})

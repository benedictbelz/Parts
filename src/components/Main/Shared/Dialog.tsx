import React, { ReactNode, useRef, useEffect } from 'react'
import Constants from 'expo-constants'
import Variables from '../../../styles/Variables'
import {
    StyleSheet,
    View,
    Modal,
    TouchableWithoutFeedback,
    Animated,
    Easing,
    Dimensions,
} from 'react-native'

interface Props {
    children: ReactNode
    onClose: () => void
}

export const Dialog = (props: Props) => {
    const width = Dimensions.get('window').width
    const animation = useRef(new Animated.Value(width)).current

    useEffect(() => {
        onOpen()
    }, [])

    const onOpen = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start()
    }

    const onClose = () => {
        Animated.timing(animation, {
            toValue: width,
            duration: 250,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start()
        setTimeout(() => props.onClose(), 250)
    }

    return (
        <Modal style={styles.modal} transparent={true}>
            <Animated.View
                style={{
                    ...styles.animated,
                    transform: [
                        {
                            translateX: animation,
                        },
                    ],
                }}
            >
                <View style={styles.status} />
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={() => onClose()}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#ffffff80',
                                borderRadius: 50,
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 29,
                                    left: 13,
                                    height: 3,
                                    width: 20,
                                    marginVertical: 0,
                                    backgroundColor: '#ffffff',
                                    transform: [{ rotate: '45deg' }],
                                }}
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 16,
                                    left: 13,
                                    height: 3,
                                    width: 20,
                                    marginVertical: 0,
                                    backgroundColor: '#ffffff',
                                    transform: [{ rotate: '-45deg' }],
                                }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffffff80',
                            borderRadius: 50,
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                height: 3,
                                width: 30,
                                marginVertical: 0,
                                backgroundColor: '#ffffff',
                                transform: [{ rotate: '45deg' }],
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                height: 3,
                                width: 30,
                                marginVertical: 0,
                                backgroundColor: '#ffffff',
                                transform: [{ rotate: '-45deg' }],
                            }}
                        />
                    </View>
                </View>
                <View style={styles.content}>{props.children}</View>
            </Animated.View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        padding: 50,
        margin: 50,
    },
    animated: {
        position: 'absolute',
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#00ff00',
    },
    status: {
        height: Constants.statusBarHeight,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        height: Variables.spacing.header,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25,
    },
    content: {
        flex: 1,
        color: Variables.color.white,
        padding: 25,
    },
})

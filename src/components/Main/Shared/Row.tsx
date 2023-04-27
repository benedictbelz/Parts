import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'

interface Props {
    children: ReactNode
    gap: number
    style?: ViewStyle
}

export const Row = (props: Props) => {
    return <View style={{ ...props.style, flexDirection: 'row', gap: props.gap }}>{props.children}</View>
}

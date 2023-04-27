import React, { ReactNode, useState } from 'react'
import { View, ViewStyle } from 'react-native'
import { Row } from './Row'

interface Props {
    children: ReactNode
    columns: number
    gap: number
    style?: ViewStyle
}

export const Grid = (props: Props) => {
    const [width, setWidth] = useState<number>(0)
    const items = (props.children as React.ReactNode[]).length
    const rows = Math.ceil(items / props.columns)
    return (
        <View
            style={{
                ...props.style,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                width: '100%',
            }}
            onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        >
            {[...Array(rows).keys()].map((row) => {
                return (
                    <Row gap={props.gap} style={row < rows - 1 ? { marginBottom: props.gap } : null} key={'Row' + row}>
                        {[...Array(props.columns).keys()].map((item) => {
                            const index = row * props.columns + item
                            if (index < items) {
                                return <React.Fragment key={'Item' + index}>{props.children[index]}</React.Fragment>
                            } else {
                                return (
                                    <View
                                        key={'Item' + index}
                                        style={{
                                            width: (width - (props.columns - 1) * props.gap) / props.columns,
                                            opacity: 0,
                                        }}
                                    />
                                )
                            }
                        })}
                    </Row>
                )
            })}
        </View>
    )
}

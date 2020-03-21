import React from 'react'
import { Option, } from './elements'

interface Props {
    props?: string
    onClick?: any
    color?: string
}

const TableOptions = ({
    props,
    onClick,
    color
}: Props
) => {
    return (
        <Option
            onClick={onClick}
            color={color}>
            {props}
        </Option>
    )
}

export default TableOptions

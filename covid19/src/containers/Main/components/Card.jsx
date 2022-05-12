import React, {memo} from 'react'
import PropTypes from 'prop-types'
import {Card as CadUI} from '../../../components'

import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function Card ({value, label, color}){
    return(
        <CadUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CadUI>
    )
}

export default Card
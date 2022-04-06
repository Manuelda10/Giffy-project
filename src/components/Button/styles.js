import { Link as LinkWouter } from 'wouter'
import styled from '@emotion/styled'

export const Link = styled(LinkWouter)`
    background-color: red;

    &:hover{
        background-color: blue;
    }
`

export const Button = Link.withComponent('button');
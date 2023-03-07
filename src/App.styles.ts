import styled from 'styled-components'

export const Container = styled.div`
    padding: 16px
`

export const Navegation = styled.nav`
    display: flex;
    justify-content: space-between
`

export const Title = styled.h2`
    span {
        background-color:darkblue;
        padding:0 8px 0 8px ;
        color:#fff;
        font-size:20px;
        border-radius:8px;
    }
`

export const Span = styled.span`
    color: #5e6778;
    cursor: pointer;

    :hover {
        color: hsl(219, 85%, 26%)
    }
`

export const Notification = styled.section``
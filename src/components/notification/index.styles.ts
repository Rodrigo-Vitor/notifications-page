import styled from 'styled-components'

interface PreviewProps {
    bg: boolean
}

export const Preview = styled.div<PreviewProps>`
    background-color: ${props => props.bg ? '#e5effa' : '#fff'};
    padding:16px;
    border-radius:8px;
    position: relative;
    margin:10px 0;
`

export const Content = styled.div`
    display:flex;
    div {
        display:flex;
        gap:4px;
    }

    @media screen and (max-width:414px) {
        div {
            display:inline-block
        }
    }
`

export const UserImage = styled.img`
    width: 40px;
`

export const UserName = styled.p`
    color: #1c202b;
    font-weight:700;
    cursor:pointer;

    :hover {
        color:hsl(219, 85%, 26%)
    }
`

export const UserAction = styled.p`
    color: #939dae;
    font-weight:500;
`

export const UserActionPub = styled.p`
    color: #5e6778;
    font-weight:700;
    cursor:pointer;
    :hover {
        color: hsl(219, 85%, 26%)
    }
`

export const NotRead = styled.span`
    background: hsl(1, 90%, 64%);
    width:10px;
    height:10px;
    border-radius:100%;
`

export const time = styled.span`
    position: absolute;
    top:35px;
    left:60px;

    @media screen and (max-width: 414px) {
        display:none
    }
`
export const Message = styled.div`
    width:80%;
    margin:15px auto;
    padding:12px;
    border-radius:8px;
    background-color: #e5effa;

`
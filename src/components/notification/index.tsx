import * as C from './index.styles'

interface Props {
    userImg: string,
    name: String,
    action: String,
    actionPub?: String,
    isNotification: boolean,
    isMessage?: boolean,
}

export function Notification ({userImg, name, action, actionPub, isNotification, isMessage}: Props) {
    return (
        <C.Preview bg={isNotification}>
            <C.Content>
                <C.UserImage src={userImg} alt='Imagem do usuario' />
                <div>
                <C.UserName>{name}</C.UserName>
                <C.UserAction>{action}</C.UserAction>
                <C.UserActionPub>{actionPub}</C.UserActionPub>
                {
                    isNotification &&
                    <C.NotRead></C.NotRead>
                }
                </div>
            </C.Content>
            {
                isMessage &&
                <C.Message>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perferendis suscipit sit quam iure, sed esse dignissimos vel quia distinctio! Voluptatem impedit consequuntur labore excepturi saepe. Porro maxime quae accusamus.
                </C.Message>
            }
            
            <C.time>1m ago</C.time>
        </C.Preview>
    )
}
import * as C from './App.styles'
import { Notification } from './components/notification'
import user1 from './assets/avatar-angela-gray.webp'
import * as U from './helpers/users'


export default function App () {
  return (
    <C.Container>
      <C.Navegation>
        <C.Title>Notifications <span>3</span></C.Title>
        <C.Span>Mark all as read</C.Span>
      </C.Navegation>
      <C.Notification>
        <Notification 
          userImg={U.Users[0].url} 
          name={U.Users[0].name} 
          action={U.Users[0].action} actionPub={U.Users[0].actionPub} 
          isNotification={true} 
        />
        <Notification 
          userImg={U.Users[1].url} 
          name={U.Users[1].name} 
          action={U.Users[1].action} actionPub={U.Users[1].actionPub} 
          isNotification={true} 
        />
        <Notification 
          userImg={U.Users[2].url} 
          name={U.Users[2].name} 
          action={U.Users[2].action} actionPub={U.Users[2].actionPub} 
          isNotification={true} 
        />
        <Notification 
          userImg={U.Users[3].url} 
          name={U.Users[3].name} 
          action={U.Users[3].action} actionPub={U.Users[3].actionPub} 
          isNotification={false} 
          isMessage={true}
        />
        <Notification 
          userImg={U.Users[4].url} 
          name={U.Users[4].name} 
          action={U.Users[4].action} actionPub={U.Users[4].actionPub} 
          isNotification={false} 
        />
        <Notification 
          userImg={U.Users[5].url} 
          name={U.Users[5].name} 
          action={U.Users[5].action} actionPub={U.Users[5].actionPub} 
          isNotification={false} 
        />
        <Notification 
          userImg={U.Users[6].url} 
          name={U.Users[6].name} 
          action={U.Users[6].action} actionPub={U.Users[6].actionPub} 
          isNotification={false} 
        />
      </C.Notification>
    </C.Container>
  )
}
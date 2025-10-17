import {Button} from './components/ui/Button/Button'

export default function Home() {
  return <div style={
    {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }>
  <Button href='https://www.twitch.tv/skyshocktv'>Combat</Button>
  
  </div>;
}

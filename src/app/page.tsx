import { Button } from './components/ui/Button/Button'
import { Card } from './components/ui/Card/Card';

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
    <Card title='Titulo' content='lorem ipsum' position='left'></Card>
  </div>;
}

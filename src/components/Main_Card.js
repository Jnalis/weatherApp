import { Card } from 'react-bootstrap';
import Inner_Card from './Inner_Card';

function Main_Card() {
  return (
    <Card
      className='main-card container'
      style={{ width: '100%', height: '135vh' }}
    >
      <Card.Body>
        <Inner_Card />
      </Card.Body>
    </Card>
  );
}

export default Main_Card;

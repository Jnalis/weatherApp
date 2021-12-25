import { Card } from 'react-bootstrap';
import Side_Card from './Side_Card';

function Inner_Card() {
  return (
    <Card
      className='inner-card container'
      style={{ width: '95%', height: '100vh' }}
    >
      <Card.Body>
        <Side_Card />
      </Card.Body>
    </Card>
  );
}

export default Inner_Card;

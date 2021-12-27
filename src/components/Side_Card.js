import { Card, Row } from 'react-bootstrap';
import './Side_Card.css';

function Side_Card(props) {
  return (
    <Card className='side' style={{ height: '90vh' }}>
      <Card.Body>
        <div className='date'>
          <h5>date goes here</h5>
        </div>

        <div className='cityName'>
          <h4>{props.toSide}</h4>
          <small>Chance of Rain:</small>
        </div>

        <div>image</div>
      </Card.Body>
    </Card>
  );
}

export default Side_Card;

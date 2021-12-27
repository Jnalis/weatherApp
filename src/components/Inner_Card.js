import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Side_Card from './Side_Card';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import './Inner_Card.css';

function Inner_Card(props) {
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState(0);
  const [cityName, setCityName] = useState('');
  const getWeather = async () => {
    try {
      const res = await Axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=guangzhou&appid=f8c51ef3f1b1db5f80027c88804e98a7'
      );

      setCityName(res.data.name);
      setTemp(res.data.main.temp);
      setWeather(res.data.weather[0].main);

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <Card
      className='inner-card container'
      style={{ width: '95%', height: '100vh' }}
    >
      <Card.Body>
        <div className='row'>
          <div className='column left'>
            <Side_Card toSide={cityName} />
          </div>

          <div className='column right'>
            <Row className='day'>
              <Col className='text-center'>
                <p>Monday</p>
                <small>24 July</small>
                <img src='https://www.kindpng.com/picc/m/178-1780833_thunderstorm-png-icon-thunderstorm-icon-transparent-png.png' />
                <div className='info'>
                  <p>{'28~32 C'}</p>
                  <p className='status'>{'thundershower'}</p>
                  <p>{'Wind: <8Km/h'}</p>
                </div>
              </Col>

              <Col className='text-center'>
                <p>Tuesday</p>
                <small>25 July</small>
                <img src='https://cdn.pixabay.com/photo/2012/04/18/13/22/cloud-37011_960_720.png' />
                <div className='info'>
                  <p>{'25~32 C'}</p>
                  <p className='status'>{'rainstorm'}</p>
                  <p>{'Wind: <10Km/h'}</p>
                </div>
              </Col>

              <Col className='text-center'>
                <p>Wednesday</p>
                <small>26 July</small>
                <img src='https://i.pinimg.com/originals/a5/38/8c/a5388cf7c3411dfebf0e1530ea4f6445.png' />

                <div className='info'>
                  <p>{'25~33 C'}</p>
                  <p className='status'>{'sunshine'}</p>
                  <p>{'Wind: <3Km/h'}</p>
                </div>
              </Col>

              <Col className='text-center'>
                <p>Thursday</p>
                <small>27 July</small>
                <img src='https://lh3.googleusercontent.com/proxy/yjTfGPzry1HSXwvr8gTWkxJ7wGRCjUBaskW-CM2fxk5oodFj3vGblKl4lB83wtBMTc_ZPbqLdnTO6QiB2shTKCfZM3dr71ZsVnuMZQgZDNQU' />

                <div className='info'>
                  <p>{'25~32 C'}</p>
                  <p className='status'>{'partly cloudy'}</p>
                  <p>{'Wind: <3Km/h'}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col><button disabled>22 Excellent</button></Col>
              <Col><button disabled>50 Good</button></Col>
              <Col><button disabled>60 Poor</button></Col>
              <Col><button disabled>80 Poor</button></Col>
            </Row>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Inner_Card;

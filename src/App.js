import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Container, Col, Carousel, Form, Button, Alert } from 'react-bootstrap';

import {React, useState, useEffect} from 'react';
import background from './assets/background.jpeg';

import volkswagenGol from './assets/volkswagengol.jpg';
import renaultSandero from './assets/renaultsandero.jpg'
import fiatMobi from './assets/fiatmobi.jpg'
import toyotaPrius from './assets/toyotaprius.png'
import teslas2021 from './assets/teslas.png'
import chevroletOnix from './assets/chevroletonix.png'
import chevroletCruze from './assets/chevroletcruze.png'
import peugeot308 from './assets/peugeot308.png'
import fiatUno from './assets/fiatuno.png'

import {  FiInstagram, FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiShoppingCart } from 'react-icons/fi';



function App() {
  const [name, updateName] = useState("")
  const [email, updateEmail] = useState("")

  function storeInfo(){
    let users = JSON.parse(localStorage.getItem('users') || "[]")
    if(name === "" || email === "") {
      return
    }
    if(users.find(user => user.email === email)){
      return
    }
        
    localStorage.setItem('users', JSON.stringify([...users, {name, email}]));
    updateName("")
    updateEmail("")
  }

  function buttonToCart(){
    <Alert variant="success">
      This is a alert with
    </Alert>

    console.log("teste compra")
  }

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>                      
      <Container>
        <Row className="text-white pt-3 pb-3" style={{background:'#000000'}}>
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/"><h5>Home</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/safety/"><h5>Safety</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/coronavirus/"><h5>COVID-19 resources</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://www.uber.com/br/en/about/"><h5>About us</h5></a></Col>
          <Col><a style={{color:"#ffffff"}} href="https://help.uber.com/?uclick_id=ca6c1e58-e5f2-45be-8dee-b866947f597e"><h5>Help</h5></a></Col>
          <Col>
            <a style={{color:"#ffffff"}} href="#shoppingCart">
              <FiShoppingCart className='ml-4' size={30} color="ffffff"/>
            </a>
          </Col>
        </Row>

        <div className="pb-5">     
          <h1 className="text-white" style={{background:'#080810'}}>Car rental vouchers</h1>               
          <Carousel>            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={renaultSandero}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Renault Sandero</h3>
                <p>$140/month</p>
                <Button variant="secondary" size="sm" onClick={e => buttonToCart()}>
                  Add to cart
                </Button>
              </Carousel.Caption>
            </Carousel.Item>            

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={fiatMobi}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Fiat Mobi</h3>
                <p>$100/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src={volkswagenGol}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Volkswagen gol</h3>
                <p>$120/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>       
        </div>

        <Row className="body-section">
          <Col className="text-white">
            <img className="w-100" src={toyotaPrius}></img>
            <h4>Toyota Prius</h4>
            <p>$200/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
          </Col>
          <Col className="text-white">
            <img className="w-100" src={teslas2021}></img>
            <h4>Tesla S 2021</h4>
            <p>$400/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
          </Col>
          
          <Col className="text-white">
            <img className="w-100" src={chevroletCruze}></img>
            <h4>Chevrolet Cruze</h4>
            <p>$250/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
          </Col>
        </Row>

        <Row className="body-section">
          <Col className="text-white">
            <img className="w-100" src={chevroletOnix}></img>
            <h4>Chevrolet Onix</h4>
            <p>$180/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
          </Col>
          <Col className="text-white">
            <img className="w-100" src={peugeot308}></img>
            <h4>Peugeot 308</h4>
            <p>$160/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
          </Col>
          
          <Col className="text-white">
            <img className="w-100" src={fiatUno}></img>
            <h4>Fiat Uno</h4>
            <p>$100/month</p>
                <Button variant="secondary" size="sm">
                  Add to cart
                </Button>
          </Col>
        </Row>

        <Row>
          <h3 className="bg-white w-100 mt-5" id="shoppingCart">Shopping Cart</h3>
          
          <Col>
          
          </Col>
          
          <Col>
            <Form className='m-4 d-flex flex-column align-items-center pb-5'>
              <Form.Control type="name" placeholder="Name" value={name} onChange={e => updateName(e.target.value)} className="mt-4 register-input"/>
              <Form.Control type="Address" placeholder="Adress" value={email} onChange={e => updateEmail(e.target.value)} className="mt-4 register-input"/>
              <Button className="mt-4 confirm-button" onClick={e => storeInfo()} >
                Buy
              </Button>          
            </Form>
          </Col>
          
        </Row>
        
      </Container>

      <div>
        
      </div>
      
      <div className="rectangle-end">
        <Container className="text-white">

          <Row className="mt-5">
            <h4>Uber</h4>      
          </Row>

          <Row className="mt-4">
            <a style={{color:"#ffffff"}} href="https://help.uber.com/?uclick_id=ca6c1e58-e5f2-45be-8dee-b866947f597e">
              <h5>Visit Help Center</h5>    
            </a>
          </Row>
          
          <Row className="mt-4">            
            <div className="w-50">
              <h6 className="text-left text-justify">                            
                Uber Technologies Inc. | Uber do Brasil Tecnologia Ltda | Av. Presidente
                Juscelino Kubitschek, nº 1909, Torre Sul, 15º andar, 
                São Paulo/SP - CEP: 04543-907 | CNPJ: 17.895.646/0001-87
              </h6>
            </div>
            
            <Col>
            </Col>
          </Row>

          <Row className="mt-4 text-left">
            <div>
              <a style={{color:"#ffffff"}} href="https://github.com/aqb">
                <FiGithub className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://www.linkedin.com/in/alexandre-burle-b0a734197/">
                <FiLinkedin className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://www.instagram.com/alexandreburle/">
                <FiInstagram className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://twitter.com/uber_brasil">
                <FiTwitter className='ml-4' size={30} color="ffffff"/>
              </a>
              <a style={{color:"#ffffff"}} href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA">
                <FiYoutube className='ml-4' size={30} color="ffffff"/>
              </a>
            </div>
            <Col></Col>
          </Row>                  
        
          <Row className="mt-4">            
            <h6>Gama Academy: ecommerce challenge</h6>
          </Row>
        </Container>
      </div>

      
    </div>    
  );
}

export default App;

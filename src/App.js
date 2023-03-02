
import Button from './components/Button';
import Stats from './components/Stats';
import {Container, Pic, Pic21, Line, Ellipse, Avatar} from './App.styled'

import { useState, useEffect } from 'react';

import logo from './images/logo.png';
import pic21 from "./images/pic21.png";
import ellipse from "./images/ellipse.png";
import avatar from "./images/hansel.png"

function App() {

const localData = Number(localStorage.getItem('folls'));
const localToggle = Boolean(localStorage.getItem('toggle'));
const [tweets, setTweets] = useState(777);
const [folls, setFolls] = useState(localData ? localData : 100500);
const [toggle, setToggle] = useState(localToggle ? localToggle : false)

const handleClick = (e) => {
  e.preventDefault();
  setToggle(!toggle);
  !toggle ? setFolls(folls + 1) : setFolls(folls - 1);
}

// useEffect(() => {
//   setFolls(Number(localStorage.getItem('folls')))
// }, [])

useEffect(() => {
  // const localData = JSON.parse(localStorage.getItem('folls'));
  // setFolls(localData)
  localStorage.setItem('toggle', JSON.stringify(toggle));
  localStorage.setItem('folls', JSON.stringify(folls));
}, [folls, toggle])

  return (
    <Container>
      <Pic src={logo}/>
      <Pic21 src={pic21}/>
      <Ellipse src={ellipse}/>
      <Avatar src={avatar}/>
      <Line/>
      <Stats tweets={tweets} folls={folls}/>
      <Button handleClick={handleClick} toggle={toggle}/>
    </Container>
  );
}

export default App;

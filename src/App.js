import React from 'react';
import style from 'styled-components';

// you can use this example :)
const Test = style.div`
text-align:center;
  background: black;
  width:100%;
  height:450px;
`;

const Btn = style.button`
color:grey;
padding:10px 20px;
margin-top:20px;
font-size:18px;
background-color:darkslategrey;
font-family:'Comic-Sans';
&:hover {
  cursor: pointer;
  border: 1px solid white;
  font-weight:bold;
  color:whitesmoke;
}


`;
const Cont = style.div`
display:flex;


`;

const P = style.p`
  display:block;
  opacity:0.7;
  color:lightgreen;
  margin-top:70px;
  padding:10px;
  &:hover {
    opacity:1;
  }
`;

const Title = style.h1`
  padding-top:30px;
  text - align: center;
  color: grey;
  background: darkslategrey;
  padding-bottom:30px;
  &:hover {
    color:white;
  }
`;

const Img = style.img`
display:block;
width:40%;
height: auto;
padding:20px;
&:hover {
  cursor: pointer;
  border: 1px solid white;
}
`;

const List = style.ul`
  display:block;
  opacity:0.7;
  color:lightgreen;
  margin-top:70px;
  padding:10px;
  &:hover {
    opacity:1;
  }
`;

// create the styled component Ul of a ul and apply these rules:  display: flex; list-style-type: none;
// create the styled component Title of an h1 and apply these rules:  text - align: center; color: #d41f1f;
function btn() {
  return (
    <div>
      <List>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </List>
    </div>
  );
}
function App() {
  return (
    // replace the html tags below where necessary with the created styled components
    <div>
      <Test>
        <Title>Break into 2000's!</Title>
        <Cont>
          <Img src="https://i.pinimg.com/736x/38/41/48/384148d27fb01b2ff9455e05aa7b3557.jpg"></Img>
          <P>
            Explore the music of the 00's. The nostalgic music of the previous
            years. Browse the tracks in this album!
          </P>
        </Cont>
        <Btn
          type="button"
          // onClick="btn()"
        >
          Browse Tracks!
        </Btn>
      </Test>
    </div>
  );
}

export default App;

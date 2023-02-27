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
color:black;
padding:10px 20px;
margin-top:20px;
font-size:18px;
background-color:white;
font-family:'Comic-Sans';
&:hover {
  cursor: pointer;
  border: 1px solid white;
  font-weight:bold;
  color:darkgrey;
}


`;
const Cont = style.div`
display:flex;


`;

const P = style.p`
  display:block;
  color:whitesmoke;
  margin-top:70px;
  padding:10px;
`;

const Title = style.h1`
  padding-top:30px;
  text - align: center;
  color: grey;
`;

const Img = style.img`
display:block;
width:40%;
height: auto;
padding:20px;
`;
// create the styled component Ul of a ul and apply these rules:  display: flex; list-style-type: none;
// create the styled component Title of an h1 and apply these rules:  text - align: center; color: #d41f1f;

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
        <Btn type="button">Browse Tracks!</Btn>
      </Test>
    </div>
  );
}

export default App;

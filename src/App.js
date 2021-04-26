/* eslint-disable jsx-a11y/alt-text */

import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
return (
<div className="App">
    <div style={{border:"solid 1px black", maxWidth:"100vw", margin:"70px"}}>
        <h1 className="title red">Your name here</h1>
        <img src="/logo512.png" className="pub"/>
        <img src={logo} className="src"/>
    </div>
        <ReactPlayer width='320px' height='240px' controls 
            url="https://youtu.be/UZCO5k1Nu70"
      />
        
   

</div>
);
}

export default App;
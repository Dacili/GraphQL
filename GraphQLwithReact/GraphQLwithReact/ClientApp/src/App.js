import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import MediCard from './components/MediCard'

export function MediBtn(props) {
    const [counter, setMediCounter] = useState(0)
    function handleMediClick(param) {
        setMediCounter(counter+1)
        //alert('I\'m clicked woohooo '+param)
    }
    return (
        <div>
        <button onClick={() => handleMediClick('jel proslo')}>Medi btn here</button>
            <p>button is clicked {counter} times</p>
            <button onClick={() => props.rename('novo ime')}>rename app title</button>
        </div>
            )
    //return (<button onClick={handleMediClick}>Medi btn here</button>)
}

const user = {
    name: 'Neki lik',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};



export default function App() {
  let [displayName, setDisplayName]=useState( 'Prvo ime');
    function renameTitle(newName) {
        setDisplayName(newName)
       //displayName = newName
   }


    return (
        <>
            <h1>{displayName}</h1>
            <br></br>
            <h1>Medi learning React js again hehe</h1>
            <MediCard txt="this is my first card"></MediCard>
            <MediBtn rename={renameTitle}></MediBtn>
            <MediBtn></MediBtn>
            <h3>ođe ide ime usera {user.name}</h3>
        </>
        //<Layout>
        //  <Routes>
        //    {AppRoutes.map((route, index) => {
        //      const { element, ...rest } = route;
        //      return <Route key={index} {...rest} element={element} />;
        //    })}
        //  </Routes>
        //</Layout>
    );
}

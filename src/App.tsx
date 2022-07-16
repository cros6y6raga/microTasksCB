import React from 'react';
import './App.css';
import {Header} from './task1/Header';
import {Body} from './task1/Body';
import {Footer} from './task1/Footer';

function App() {
    return (
        <>
            <Header titleForHeader={'new header'}/>
            <Body titleForBody={'new body'}/>
            <Footer titleForFooter={'new footer'}/>
        </>
    );
}

export default App;

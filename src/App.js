import './App.sass';
import './components/navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>


            </Routes>


        </BrowserRouter>
    );
}

export default App;

import './App.css';
import { Menu } from 'antd';
import { InfoCircleOutlined ,LinkOutlined } from '@ant-design/icons';
import Navi from "./Components/NaviBar/NaviBar";
import {useState} from "react";
import About from "./Page/About/About";
import Links from "./Page/Links/Links";

function App() {
    const [page,setPage] = useState('About')
    return (
        <div className="App">
            <Navi setPage={setPage}/>
            {(page ==='About')&&<About/>}
            {(page ==='Links')&&<Links/>}
        </div>
    );
}

export default App;

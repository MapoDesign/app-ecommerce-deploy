
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../views/Home/Home'
import List from '../../views/List/List'
import LogIn from '../../views/Login/Login'

{/*basename="/portfolio/react/drink"*/}
export default function CustomRutes(){
    return <Router >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<div>Not found</div>} />
        </Routes>
    </Router>
}
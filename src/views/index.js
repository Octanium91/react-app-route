import React, {Suspense, lazy} from "react";
import {
    BrowserRouter,
    Routes,
    Route, Link,
} from "react-router-dom";
import './index.css';

const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));

const Views = () => {

    const linkStyle = {margin: "1rem 1rem"}

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <nav>
                        <Link className="App-link" style={linkStyle} to="/">Home</Link>
                        <span>|</span>
                        <Link className="App-link" style={linkStyle} to="/about">About</Link>
                    </nav>
                    <Suspense fallback={<span>Loading ...</span>}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </Suspense>
                </header>
            </div>
        </BrowserRouter>
    )

}

export default Views
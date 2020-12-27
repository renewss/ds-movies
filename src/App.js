import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Intro from './pages/Intro';
import Search from './pages/Search';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [selected, setSelected] = useState({});

    return (
        <Router>
            <div className="App">
                <Header />

                <main className="main">
                    <Switch>
                        <Route exact path="/">
                            <Intro setMovie={setSelected} />
                        </Route>
                        <Route path="/search">
                            <Search selected={selected} />
                        </Route>
                    </Switch>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;

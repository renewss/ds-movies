import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import movieGraph from './controller/MovieGraph';
import Intro from './pages/Intro';
import Search from './pages/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
    const [selected, setSelected] = useState({});

    return (
        <Router>
            <div className="App">
                <Header></Header>

                <main className="main">
                    <Switch>
                        <Route exact path="/">
                            <Intro setMovie={setSelected} />
                        </Route>
                        <Route path="/search" selected={selected}>
                            <Search />
                        </Route>
                    </Switch>
                </main>

                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Intro from './pages/Intro';
import Search from './pages/Search';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header></Header>

                <main className="main">
                    <Switch>
                        <Route exact path="/">
                            <Intro />
                        </Route>
                        <Route path="/search">
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

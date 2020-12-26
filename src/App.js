import Intro from './pages/Intro'
import Search from './pages/Search'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return <div className="App">
    <Header></Header>
    <Intro />
    <Search/>
    <Footer></Footer>
  </div>;
}

export default App;

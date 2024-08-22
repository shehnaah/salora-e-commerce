import './App.css';
import Bridge from './components/Bridge';
import Category from './components/Category';
import Collections from './components/Collections';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Last from './components/Last';
import Nav from './components/Nav'
import Special from './components/Special';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Homepage></Homepage>
      <Feature></Feature>
      <Category></Category>
      <Collections></Collections>
      <Special></Special>
      <Bridge></Bridge>
      <Last></Last>
      <Footer></Footer>
    </div>
  );
}

export default App;

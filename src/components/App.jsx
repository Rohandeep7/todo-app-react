import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import {Routes,Route,Link} from 'react-router-dom'
import ActivityBar from "./ActivityBar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="container">
        <ActivityBar/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import {Routes,Route} from 'react-router-dom'
import ActivityBar from "./ActivityBar";
import ActiveTodos from "./ActiveTodos";
import AllTodos from "./AllTodos";
import CompletedTodos from "./CompletedTodos";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="container">
        <ActivityBar/>
        <Routes>
          <Route exact path='/' element={<AllTodos/>}/>
          <Route path='/active' element={<ActiveTodos/>}/>
          <Route path='/completed' element={<CompletedTodos/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

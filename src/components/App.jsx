import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import {Routes,Route} from 'react-router-dom'
import ActivityBar from "./ActivityBar";
import ActiveTodos from "./ActiveTodos";
import AllTodos from "./AllTodos";
import CompletedTodos from "./CompletedTodos";
import { TodoProvider } from "../context/TodoContext";
function App() {
  return (
    <TodoProvider>
    <div className="App">
      <Navbar/>
      <main className="activity">
        <ActivityBar/>
        <Routes>
          <Route exact path='/' element={<AllTodos/>}/>
          <Route path='/active' element={<ActiveTodos/>}/>
          <Route path='/completed' element={<CompletedTodos/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </TodoProvider>
  );
}

export default App;

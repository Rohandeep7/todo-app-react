import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import {Routes,Route} from 'react-router-dom'
import ActivityBar from "./ActivityBar";
import ActiveTodos from "./pages/ActiveTodos";
import AllTodos from "./pages/AllTodos";
import CompletedTodos from "./pages/CompletedTodos";
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
          <Route path='/todos/active' element={<ActiveTodos/>}/>
          <Route path='/todos/:activity' element={<CompletedTodos/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </TodoProvider>
  );
}

export default App;

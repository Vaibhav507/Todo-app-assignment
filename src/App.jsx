import HomePage from "./pages/HomePage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";




function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
    
  )
}

export default App

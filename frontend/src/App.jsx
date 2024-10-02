import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2>Welcome to the Homepage</h2>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/profile" 
          element={
            <Protected>
              <Profile />
            </Protected>
          } 
        />
        {/* <Route path="/protected" element={<Protected />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

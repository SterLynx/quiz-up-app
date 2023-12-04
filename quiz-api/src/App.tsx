import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import QuestionsView from './components/Questions';
import UserRegistration from './components/Registration';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/questions" element={<QuestionsView />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

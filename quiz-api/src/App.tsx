import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import QuestionsView from './components/Questions';
import UserRegistration from './components/Registration';
import UserAuthentication from './components/UserAuthentication'; // Make sure to import UserAuthentication

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/questions" element={<QuestionsView />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserAuthentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

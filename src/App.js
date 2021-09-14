import './App.css';
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './components/Quiz/Quiz'
import Score from './pages/Score/Score';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizID" element={<Quiz />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

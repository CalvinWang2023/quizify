import './App.css';
import Navbar from './components/Navbar/Navbar';
import SetupForm from './components/SetupForm/SetupForm';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import { useAppSelector } from './app/hooks';

function App() {
    const { page } = useAppSelector((state) => state.page);
    return (
        <div className="App">
            <Navbar />
            <div id="page">
                { page === "home" && <SetupForm /> }
                { page === "quiz" && <Quiz /> }
                { page === "result" && <Results /> }
            </div>
        </div>
    );
}

export default App

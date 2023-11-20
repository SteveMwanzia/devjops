import logo from './logo.svg';
import './App.css';
import JobLists from './Components/JobLists';
import Button from './Components/Button';
import TitleHero from './Components/TitleHero';

function App() {
  return (
    <div className="App">
      <TitleHero />
      <JobLists />
      <Button />
    </div>
  );
}

export default App;

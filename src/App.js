import logo from './logo.svg';
import './App.css';
import JobLists from './Components/JobLists';
import Button from './Components/Button';
import TitleHero from './Components/TitleHero';

function App() {
  const mainstyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }

  return (
    <div className="App" style = {mainstyle}>
      <TitleHero />
      <JobLists />
      <Button />
    </div>
  );
}

export default App;

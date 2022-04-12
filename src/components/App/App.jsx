import DrumMachine from '../DrumMachine/DrumMachine';
import './App.styles.scss';

function App() {
  localStorage.setItem('project_selector', 'drum-machine');

  return (
    <div id="container">
      <DrumMachine />
    </div>
  );
}

export default App;

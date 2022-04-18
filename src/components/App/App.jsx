import DrumMachine from '../DrumMachine/DrumMachine';
import GitHub from '../GitHub/GitHub';
import './App.styles.scss';

function App() {
  localStorage.setItem('project_selector', 'drum-machine');
  localStorage.setItem('fCC_drum-machine_hide', 'true');

  return (
    <div id="container">
      <DrumMachine />
      <GitHub />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { TyphographyComponent } from './components/TyphographyComponent';
import { AppBarComponent } from './components/AppBarComponent';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <TyphographyComponent/>
      <AppBarComponent/>
      <MainContainer/>
    </div>
  );
}

export default App;

import './App.css';
import { AppBarComponent } from './components/AppBarComponent';
import { FooterComponent } from './components/FooterComponent';
import { MainContainer } from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <AppBarComponent/>
      <MainContainer/>
      <FooterComponent/>
    </div>
  );
}

export default App;

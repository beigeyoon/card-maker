import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({authService, FileInput, cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login authService={authService} />} />
          <Route path='/maker' element={<Maker authService={authService} FileInput={FileInput} cardRepository={cardRepository} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

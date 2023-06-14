import { Button } from '@mui/material';
import style from './App.module.scss';

function App() {

  return (
    <div className={style.App}>
      <header className={style['App-header']}>
        <p>
          FINANCE MANAGER 
        </p>
        <Button variant='contained'>TEST</Button>
      </header>
    </div>
  );
}

export default App;

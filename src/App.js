import AddAccountsButton from './components/Buttons/AddAccountsButton';
import CheckButton from './components/Buttons/CheckButton';
import DetailsButton from './components/Buttons/DetailsButton';
import GoogleSiginInButton from './components/Buttons/GoogleSigiInButton';
import LoginButton from './components/Buttons/LoginButton';
import style from './App.module.scss';

function App() {

  const handler = () => {
    console.log('work')
  }

  return (
    <div className={style.App}>
      <header className={style['App-header']}>
        <p>
          FINANCE MANAGER 
        </p>
        <LoginButton text="Login" onClick={handler}/>
        <GoogleSiginInButton text="Continue with Google" onClick={handler}/>
        <DetailsButton text="Details" onClick={handler}/>
        <AddAccountsButton text="Add accounts" onClick={handler}/>
        <CheckButton text="Check" onClick={handler}/>
      </header>
    </div>
  );
}

export default App;

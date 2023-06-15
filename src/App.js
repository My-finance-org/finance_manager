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
      </header>
    </div>
  );
}

export default App;

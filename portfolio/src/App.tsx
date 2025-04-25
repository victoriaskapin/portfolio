import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { User } from './components/User/User';

function App() {


  return (
    <div className={styles.App}>
      <Navbar/>
      <User/>
    </div>
  )
}

export default App

import styles from './App.module.css';
import { About } from './components/About/About';
import { Navbar } from './components/Navbar/Navbar';
import { User } from './components/User/User';

function App() {


  return (
    <div className={styles.App}>
      <Navbar/>
      <User/>
      <About/>
    </div>
  )
}

export default App

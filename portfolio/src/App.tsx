import styles from './App.module.css';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { User } from './components/User/User';

function App() {


  return (
    <div className={styles.App}>
      <Navbar/>
      <User/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App

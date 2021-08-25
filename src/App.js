import './index.css';
import {Navbar, Sidebar, Footer, Hero, About, Menu, Team, Blog, Location, Scrollup, Loading } from './components';
import { useGlobalContext } from './context';

function App() {
  const {isLoading, setIsLoading} = useGlobalContext()
  window.addEventListener('DOMContentLoaded', (event)=>{
    setIsLoading(false);
  })
  if(isLoading){
    return <Loading />
  }
  return (
    <>
      <Hero />
      <Scrollup />
      <Navbar />
      <Sidebar />
      <About />
      <Menu />
      <Team />
      <Blog />
      <Location />
      <Footer />
    </>
  )
}

export default App;

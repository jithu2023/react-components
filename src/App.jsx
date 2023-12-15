import './App.css';
import  GallaryFooter  from './components/GallaryFooter.jsx';
import { Header } from './components/Header.jsx';
import { Body } from './components/Body.jsx';
import { imageData } from './components/imageData.jsx';


function App() {
  return (
    <div>
      <Header />

      <Body image={imageData} />


      <GallaryFooter />
    </div>
  )
}

export default App;

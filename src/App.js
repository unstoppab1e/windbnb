import './App.css';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import link from './stays.json';


function App() {
  
  const data = JSON.parse(JSON.stringify(link))
  return (
    <div className="wrapper">
      <Header />
      <div className='card'>
        {data && data.map( (element, index) => {
          return <Card key={index} {...element}/>
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

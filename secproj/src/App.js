
import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [details, setDetails] = useState({});
   
    const fetchDetails = async () => {
     const { data } = await axios.get("https://randomuser.me/api/")
     console.log(data);
     const details = data.results[0];
     setDetails(details);
     console.log(details);
    } 
    useEffect(() => {
      fetchDetails();

    }, [])
   
  return (
    <div className="App">
      {/* <Counter/> */}
      <Card details ={details}/>
      {/* <Card name="sara" imgUrl="https://images.pexels.com/photos/6232445/pexels-photo-6232445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" btn ="Go somewhere"/>
      <Card name="kamya" imgUrl="https://images.pexels.com/photos/10680897/pexels-photo-10680897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  btn ="Go everywhere"/> */}
      
    </div>
  );
}

export default App;

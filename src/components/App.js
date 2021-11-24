import { useState, useEffect } from 'react';
import data from './data';
import Header from './Header';
import Body from './Body';

const App = () => {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if(index > lastIndex) {
  //     setIndex(0)
  //   }
  // },[index, people])

  const next = () => {
    setIndex(index === people.length - 1 ? 0 : index + 1 )
  }
  const prev = () => {
    setIndex(index === 0 ? people.length - 1 : index - 1)
  }

  useEffect(() => {

    let slider = setTimeout(() => {
      next();
    },3000);
    // clean-up function
    return () => clearInterval(slider)
    
  }, [index])


  return (
    <section className="section">
      <Header />
      <Body people={ people } index={ index } next={ next } prev={ prev }/>
    </section>
  );
}
 
export default App;
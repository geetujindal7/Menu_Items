import './App.css';
import React, {useState} from 'react';
import menu from './data'
import Categories from './Categories';
import Menu from './Menu';

function App() {
  
  const [menuS, setMenu] = useState(menu);


  const newCate = ['All', ...new Set(menu.map((i) => i.category))];

  const filterItems = (category) =>
  {
    if(category == 'All')
    {
      setMenu(menu);
      return;
    }
    const newitem = menu.filter((e) => e.category == category)
    setMenu(newitem) 
  }
  

  return (<>
    <main>
    <div>
      <h3 style={{fontSize:"40px" , marginTop:"7rem"}}>Our Menu</h3>
      <div className="underline"></div>
      </div>
    </main>
    
           <Categories filtere={filterItems} Category={newCate}/>
           <Menu menu={menuS}/>
           </> 
  );
}

export default App;

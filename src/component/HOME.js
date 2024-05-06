import { useState } from 'react';

import './home.css'
const Home = () => {
  const [title1, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddCard = () => {
  if(title1===""||content===""){
    alert("it cant be empety")
  }else{

  const newCard = { title1, content };

    const existingCards = JSON.parse(localStorage.getItem('cards')) ;

  
    const updatedCards = [...existingCards, newCard];

  
    localStorage.setItem('cards', JSON.stringify(updatedCards));

 
    setTitle('');
    setContent('');

  }
  
  };

  return (
    <div className='home' >


      <h1>Home Page</h1>
      <div className='signIn' >
     
      <input
      
        type="text"
        placeholder="name"
        value={title1}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="last  name"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddCard}>Sing In</button>
      </div>
   
    </div>
  );
};

export default Home;

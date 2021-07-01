import React, {useState} from 'react'; 
import Tweet from './Tweet'


function App(){

  const [users, setUsers] = useState([
    {name: 'Kadir', message: 'Sta ima'},
    {name:'John', message: ' Ja sam John Snow'},
    {name:'Lubenica', message: ' Halooo'}
  ])

  

  return (
    <div className="app">
      {users.map(user=>(
        <Tweet  name={user.name}  message={user.message}   />
      ))}
    </div>
  );
}

export default App;
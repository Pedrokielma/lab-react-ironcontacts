// src/App.js
import "./App.css";
import contactData from "./contacts.json";
import { useState } from 'react';




function App() {
  const [contact, setContact] = useState(contactData.slice(0, 5));

const addRandom = () => {
  let index =  Math.floor(Math.random() * (contactData.length));
  console.log(index)
  // return contact.push(data[index])
  setContact([contactData[index], ...contact])
}
const sortName = () => {
  setContact(
    [...contact.sort((a, b) => {
      return a.name < b.name ? -1 : 1
    })]
  )
}
const sortPopularity = () => {
  setContact(
    [...contact.sort((a, b) => {
      return a.popularity < b.popularity ? 1 : -1
    })]
  )
}
const deleteContact = (contactID) => {
  setContact(
    [...contact.filter((name)=>{
      return name.id !== contactID
    })]
  )
}



  return(
     <div className="App">
     {console.log(contact)}
     <h1>IronContacts</h1>
     <button onClick={addRandom}>ADD random contacts</button>
     <button onClick={sortName}>Sort by Name</button>
     <button onClick={sortPopularity}>Sort by Popularity</button>
     

       <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>won Oscar</th>
            <th>won Emmy</th>
          </tr>
        </thead>
        <tbody>
        {contact.map((contact) => {
          return(
          <tr>
            <td> <img class = "contact-image"src={contact.pictureUrl} alt="contact pic" /> </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? '🏆' : 'No'}</td>
            <td>{contact.wonEmmy ? '🏆' : 'No'}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>   
          )
      })}
      </tbody>
       </table>
     </div>
  );
}
export default App;

import { useState, useEffect } from "react";
import "./App.css";
import db  from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    createUser()
    console.log('SUBMITTING');
    setNewName('')
    setNewAge(0)
  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  });

  return (
    <div className="App">

      <form onSubmit={handleSubmit} className='App-form'>
        <input
          placeholder="Name..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          value={newName}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
          value={newAge}
        />
        <button> Create User</button>
      </form>

      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
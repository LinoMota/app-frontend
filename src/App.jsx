import { useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_BACKEND_API;
const API_KEY = import.meta.env.VITE_BACKEND_API_KEY;

console.log(API_URL)
console.log(API_KEY)

function App () {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handle = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/?name=${encodeURIComponent(name)}&key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("Erro ao retornar mensagem");
      }
      if (response.status === 400) {
        setMessage("Passe um nome xD se n mandar vai ficar dando 400");
        return;
      }
      const data = await response.json();

      console.log(data)

      setMessage(data.msg);
    } catch (error) {
      setMessage("Erro: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handle}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <button type="submit">dalhe</button>
      </form>

      {message && <h5>{message}</h5>}
    </div>
  );
}

export default App

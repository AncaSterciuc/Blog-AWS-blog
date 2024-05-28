import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Anca');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

  //   fetch('http://localhost:8000/blogs/', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(blog)
  //   }).then(() => {
  //     history.push('/');
  //   })
  // }
  fetch('https://iy4jftpvba.execute-api.us-east-1.amazonaws.com/dev/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
        // 'x-api-key': 'aNxZA14lsHaJvrTpooQKgaQnJN8V4JJr8S5Vl57S'  
      },

      body: JSON.stringify(blog)
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Adauga Blog nou</h2>
      <form onSubmit={handleSubmit}>
        <label>Titlu:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <label>Continut:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        <label>Autor:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            >
            <option value="anca">Anca</option>
            <option value="elena">Elena</option>
          </select>

        <button>Adauga Blog</button>
      </form>
    </div>
  );
}
 
export default Create;
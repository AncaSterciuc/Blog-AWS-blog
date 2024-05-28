import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  // const { data: blog, error} = useFetch('http://localhost:8000/blogs/' + id);
  const { data: blog, error} = useFetch('https://iy4jftpvba.execute-api.us-east-1.amazonaws.com/dev' + id);
  const history = useHistory();
  
  // const handleClick = () => {
  //   fetch('http://localhost:8000/blogs/' + blog.id, {
  //     method: 'DELETE'
  //   }).then(() => {
  //     history.push('/');
  //   }) 
  // }
  const handleClick = () => {
    fetch('https://iy4jftpvba.execute-api.us-east-1.amazonaws.com/dev/del' + blog.id, {
      method: 'DELETE',
        // headers: {
        //     'x-api-key': 'aNxZA14lsHaJvrTpooQKgaQnJN8V4JJr8S5Vl57S' 
        // }
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Scris de { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Sterge</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const { error, data: blogs } = useFetch('http://localhost:8000/blogs')
  const { error, data: blogs } = useFetch('https://iy4jftpvba.execute-api.us-east-1.amazonaws.com/dev')
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;

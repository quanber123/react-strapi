import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/blogs');
        const { data } = res.data;
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    };
    axiosData();
  }, []);
  return (
    <section>
      {blogs.map(({ id, attributes }) => {
        return <li key={id}>{attributes.blogTitle}</li>;
      })}
    </section>
  );
}

export default App;

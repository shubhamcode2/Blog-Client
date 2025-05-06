import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [totalPosts, setTotalPosts] = useState([])

  const getPosts = async function () {

    axios.get("http://localhost:3000/api/post/get-all-posts?page=2&limit=5")
      .then(function (response) {
        console.log(response);
        setTotalPosts(response.data.posts)
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  return (
    <>

      <h2>get total post here</h2>
      <button onClick={getPosts}>get</button>
      <p>Number of Posts</p>
      {totalPosts.map((item) => {
        return (
          <div key={item._id}>
            {item.content}
            <img src={item.postPicture} alt="" style={{height:"100px"}}/>
          </div>
        )
      })}

    </>
  )
}

export default App

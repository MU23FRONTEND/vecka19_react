import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [resource, setResource] = useState<string>('posts');
  const [dataList, setDataList] = useState<string[]>([]);

  // useEffect(() => {
  //   console.log('Detta körs vid varje omrendering');
  // });

  // useEffect(() => {
  //   console.log('Detta körs vid mount');
  // }, []);

  useEffect(() => {
    // console.log('Detta körs när resource uppdateras');

    axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => {
        setDataList(response.data);
      })

    // fetch(url)
    //   .then(response => return response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));
  }, [resource]);

  useEffect(() => {
    console.log(dataList);
  }, [dataList]);

  return (
    <div className="app">
      <section className="buttons">
        <button onClick={ () => setResource('posts') } className="button">Posts</button>
        <button onClick={ () => setResource('comments') } className="button">Comments</button>
        <button onClick={ () => setResource('users') } className="button">Users</button>
      </section>
      <h1>{ resource }</h1>

      {
        dataList.map(data => {
          return <pre>{ JSON.stringify(data) }</pre>
        })
      }
    </div>
  )
}

export default App

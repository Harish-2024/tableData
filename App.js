import React, { useEffect, useState } from 'react'
import "./app.css"


const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    let url = "https://reqres.in/api/products"
    const apiData = await fetch(url);
    const Data = await apiData.json();
    setData(Data.data);

  }

  useEffect(() => {
    getData();

  }, [])


  const hide = () => {

    document.querySelector("table").style.display = "none"

  }
  const show = () => {
    document.querySelector("table").style.display = "inline-table"

  }

  return (
    <>
      <h1 className='center'>Table</h1>
      <table className="border center">
        <thead>
          <tr className="border">
            <th className="border">ID</th>
            <th className="border">Name</th>
            <th className="border">Year</th>
            <th className="border">Color</th>
          </tr>
        </thead>
        {data.map((element) => {
          return (
            <>
              <tbody>
                <tr className="border" key={element.id}>
                  <td className="border">{element.id}</td>
                  <td className="border">{element.name}</td>
                  <td className="border">{element.year}</td>
                  <td className="border">{element.color}</td>
                </tr>
              </tbody>
            </>
          )
        })
        }
      </table>
      <div className='flex m-x-y'>
        <button onClick={hide} className="Btn m-x-y">Hide</button>
        <button onClick={show} className="Btn m-x-y">show</button>
      </div>
    </>
  )
}
export default App;

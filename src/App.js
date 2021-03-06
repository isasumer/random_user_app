import axios from "axios";
import React, {useState, useEffect} from "react"
import Card from "./component/Card"
import "./App.css"


const App = () => {
  const [itemList, setItemList] = useState ([]);

  useEffect(() => {
    handleClick ()
  }, [])
  
  const handleClick = () => {
    return (
    axios.get("https://randomuser.me/api/").then((res)=>setItemList(res.data.results))
    )} 
  return (
      <div className="App">
        {itemList.map((item)=>(
          <Card key={item.phone} item ={item}/>
        ))}
        <div>
        <button id="btn" onClick={handleClick} >New User</button>
        </div>
      </div>

  )
} 
export default App;






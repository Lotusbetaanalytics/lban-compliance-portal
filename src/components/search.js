import React, { useEffect, useState } from 'react'
import axios from "axios";

const Index = () => {

    const [value, setValue] = useState("");
    const [data,setData]= useState([])
    // useEffect(()=>{
    //     axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query="a"')
    //      .then((response)=>{
    //          setData(response.data)
    //        console.log(response.data)
            
    //     })
    //      .catch(error=>console.log(error))
        

    //  },[])

     

  const onChange = (event) => {
    setValue(event.target.value);
    axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${value}`)
    // setLoading(true)
    .then((response)=>{
        // setLoading(false)
        setData(response.data)
      console.log(response.data)
       
   })
    .catch(error=>console.log(error))

    
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };
  
  return (
    <div>
        <div>
            this is it
        <div>
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const searchValue = item.name.toLowerCase();

              return (
                searchTerm &&
                searchValue.startsWith(searchTerm) &&
                searchValue !== searchTerm
              );
            })
            // .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                key={item.name}
                value={item.logo}
              >
               <a href={`${item.logo}`}>{item.name}</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Index
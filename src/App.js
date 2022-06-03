import React, { useState } from "react";
import './styles.css';


const App = () => {
    const [query, setQuery] = useState([])

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])

    


    const handleSubmit = (event) => {
        event.preventDefault();
        GetData();
        };

      const handleClick = (event) => {
        event.preventDefault();
        GetData();
        };

  

    const [results, setResults] = useState([])
    //fetch data

    const GetData = () => {
      fetch("http://localhost:3000/api/getall")
      .then((results) => {
      return results.json();
      })
        .then((data) => {
        console.log(data);
        const items = data;
        setResults(items)
      });
      };




    const AddUser = () => {
     
      console.log(name+" "+email)
      fetch("http://localhost:3000/api/add", {
        method: 'POST'
      })
      .then ((results) => {
        return results.json();
      })
    };


    const UpdateUser = () => {
      console.log("Query "+query)
      fetch("http://localhost:3000/api/update/"+query, {
        method: 'PUT'
      })
      .then ((results) => {
        return results.json();
      });
    };

    const DeleteUser = () => {
      console.log("Query "+query)
      fetch("http://localhost:3000/api/delete/"+query, {
        method: 'DELETE'
      })
      .then ((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);

      });
    };
   

      // Movies in array
      const Array = (props) => {
      const { data } = props;

    return (
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr key={props.id}>
                <th scope="col">Username</th>
                <th scope="col">email</th>
                <th scope="col">User_ID</th>
              </tr>
            </thead>
           <tbody>
             {data.map((item, i) => (
               <tr>
                <td key={i}> {item.name}</td>
                <td> {item.email} </td>
                <td> {item._id}</td>
              </tr>
      ))}
      </tbody>
      </table>
      </div>
      );
};


      //FORM
      return (
        <div>
          <h1>Find users</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Search: </label>
                <input
                  type="Search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="form-control"
                  placeholder="Set id: "
                  name="query"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="form-control"
                    placeholder="Set name: "
                    name="name_set"
                    />
                    <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-control"
                    placeholder="Set email: "
                    name="email_set"
                    />
                  </div>
                  <div className="form-group">
                    
                    <button
                      type="button"
                      className="btn"
                      onClick={handleClick}
                      >
                        List all users
                      </button>
                      <button
                        type="button"
                        className="btn"                    >
                          Search by ID
                        </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={AddUser}
                        >
                          Add User
                        </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={UpdateUser}
                        >
                          Update User
                        </button>
                        <button
                        type="button"
                        className="btn"
                        onClick={DeleteUser}
                        >
                          Delete User
                        </button>
                    </div>
                  </form>
        
                </div>
                <Array data={results}/>
              </div>
      );
      };
    export default App;


  














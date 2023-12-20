import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/5",{
      method:"GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, []);

  const getInfo = (id) => {
    console.log(id);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Users List</h1>
        <div>
          {users.map((value) => {
            return (
              <div key={value.id} style={{display:'flex', alignItems:'center'}}>
                <h3 key={value.id} style={{ marginRight:'10px'}}>
                  {value.id}: {value.name}
                </h3>
                <button onClick={()=>getInfo(value.id)}>Get Info</button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1>User data</h1>
      </div>
    </div>
  );
}

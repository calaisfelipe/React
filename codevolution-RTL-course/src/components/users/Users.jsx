import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch(() => setError("something went wrong"));
  }, []);

  return (
    <div>
      <h1>Usuarios:</h1>
      <ul>
        {error ? <p>{error}</p> : null}

        {users ? users.map((user) => <li key={user.id}>{user.name}</li>) : null}
      </ul>
    </div>
  );
}

export default Users;

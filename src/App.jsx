import { useState, useEffect } from "react";
import "./App.css";
import UserProfileCard from "./UserProfileCard";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=5");
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setUsers(data.results);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="app-container">
        <header>
          <h1>User Profile Cards</h1>
        </header>

        <button onClick={fetchUsers}>Fetch Users</button>

        <div className="card-container">
          {isLoading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {users.length > 0 &&
            !isLoading &&
            !error &&
            users.map((user) => (
              <UserProfileCard key={user.login.uuid} user={user} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;

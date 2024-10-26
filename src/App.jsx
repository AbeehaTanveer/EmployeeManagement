import { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashoboard/AdminDashobaord";
import EmployeeDashboard from "./components/Dashoboard/EmployeeDashboard";
import { AuthContext } from "./context/Authprovider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const { userData } = useContext(AuthContext);


  const [user, setUser] = useState(null);

  // Check if there's a stored role in localStorage when the app mounts
  useEffect(() => {
    setLocalStorage()
    const storedUser = localStorage.getItem("userRole");
    if (storedUser) {
      // Parse the stored user object if it exists in localStorage
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    // Check for admin login
    if (email === "admin@me.com" && password === "123") {
      const adminUser = { role: "admin" };
      setUser(adminUser);
      localStorage.setItem("userRole", JSON.stringify(adminUser)); // Store admin role in localStorage
    } else {
      // Find the employee based on the provided email and password
      const loggedInEmployee = userData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (loggedInEmployee) {
        setUser(loggedInEmployee); // Store the entire employee object
        localStorage.setItem("userRole", JSON.stringify(loggedInEmployee)); // Store employee data in localStorage
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem("userRole");

     // Remove role from localStorage
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} admin={user}  /> // Pass handleLogout if you need to log out from the dashboard
      ) : (
        <EmployeeDashboard employee={user} handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;

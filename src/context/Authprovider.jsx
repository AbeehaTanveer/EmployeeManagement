import React, { createContext, useEffect, useState } from "react";
import {  getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);



// For Admin Dashboard
const [taskTitle, settaskTitle] = useState("");
const [date, setDate] = useState("");
const [assignTo, setAssignTo] = useState("");
const [category, setCategory] = useState("");
const [taskDescription, settaskDescription] = useState("");
const [newTask, setNewTask] = useState({});
const [employees, setEmployees] = useState([]);


useEffect(() => {
  const data = JSON.parse(localStorage.getItem("employees"));
  if (data) setEmployees(data);
}, []);

const handleCreate = () => {
  const createdTask = {
    taskTitle,
    date,
    assignTo,
    category,
    taskDescription,
    newTask: true,
    failedTask: false,
    activeTask: false,
    completedTask: false,
  };

  // Update employees state
  const updatedEmployees = employees.map((targetEmployee) => {
    if (assignTo === targetEmployee.firstName) {
      targetEmployee.tasks.push(createdTask);
      targetEmployee.taskCounts.active += 1;
    }
    return targetEmployee;
  });

  // Update both state and localStorage
  setEmployees(updatedEmployees);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  console.log(updatedEmployees)

  // Clear input fields
  // settaskTitle("");
  // setAssignTo("");
  // setDate("");
  // setCategory("");
  // settaskDescription("");
};
  



  return (
    <div>
      <AuthContext.Provider value={{userData,handleCreate,employees,taskTitle,date,assignTo,taskDescription,category, settaskTitle,setAssignTo,setDate,setCategory,settaskDescription}}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default Authprovider;

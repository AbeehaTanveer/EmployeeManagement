export const employees = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "123",
    firstName: "John",
    tasks: [
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Design Homepage",
        taskDescription: "Design the homepage layout for the new project.",
        taskDate: "2024-10-22",
        category: "Design",
      },
      {
        newTask: false,
        completedTask: true,
        failedTask: false,
        activeTask: false,
        taskTitle: "Prepare Wireframes",
        taskDescription: "Create wireframes for the login page.",
        taskDate: "2024-10-15",
        category: "Design",
      },
      {
        newTask: false,
        completedTask: false,
        failedTask: true,
        activeTask: false,
        taskTitle: "Design Product Page",
        taskDescription: "Create the design for the product details page.",
        taskDate: "2024-10-10",
        category: "Design",
      },
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Update Branding",
        taskDescription: "Revise brand colors and logo for the new project.",
        taskDate: "2024-10-28",
        category: "Design",
      },
    ],
    taskCounts: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "123",
    firstName: "Jane",
    tasks: [
      {
        newTask: false,
        completedTask: true,
        failedTask: false,
        activeTask: false,
        taskTitle: "Develop API",
        taskDescription: "Develop REST API for user authentication.",
        taskDate: "2024-10-20",
        category: "Development",
      },
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Fix Authentication Bugs",
        taskDescription: "Debug and fix issues with authentication.",
        taskDate: "2024-10-22",
        category: "Development",
      },
      {
        newTask: false,
        completedTask: false,
        failedTask: true,
        activeTask: false,
        taskTitle: "Develop User Interface",
        taskDescription: "Develop the frontend for the user dashboard.",
        taskDate: "2024-10-17",
        category: "Development",
      },
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Refactor Backend Code",
        taskDescription: "Improve and optimize the backend logic.",
        taskDate: "2024-10-30",
        category: "Development",
      },
    ],
    taskCounts: {
      active: 1,
      new: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 3,
    email: "michael.johnson@example.com",
    password: "123",
    firstName: "Michael",
    tasks: [
      {
        newTask: false,
        completedTask: false,
        failedTask: true,
        activeTask: false,
        taskTitle: "Database Migration",
        taskDescription: "Migrate database to a new server.",
        taskDate: "2024-10-18",
        category: "Database",
      },
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Optimize Queries",
        taskDescription: "Optimize SQL queries for performance.",
        taskDate: "2024-10-23",
        category: "Database",
      },
      {
        newTask: false,
        completedTask: true,
        failedTask: false,
        activeTask: false,
        taskTitle: "Backup Database",
        taskDescription: "Create backups of the production database.",
        taskDate: "2024-10-12",
        category: "Database",
      },
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Setup Monitoring",
        taskDescription: "Setup database monitoring for real-time insights.",
        taskDate: "2024-10-29",
        category: "Database",
      },
    ],
    taskCounts: {
      active: 1,
      new: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    email: "susan.brown@example.com",
    password: "123",
    firstName: "Susan",
    tasks: [
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Testing Frontend",
        taskDescription:
          "Perform frontend testing for the shopping cart module.",
        taskDate: "2024-10-25",
        category: "Testing",
      },
      {
        newTask: false,
        completedTask: true,
        failedTask: false,
        activeTask: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Write unit tests for the login feature.",
        taskDate: "2024-10-19",
        category: "Testing",
      },
      {
        newTask: false,
        completedTask: false,
        failedTask: true,
        activeTask: false,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Test the payment gateway integration.",
        taskDate: "2024-10-13",
        category: "Testing",
      },
      {
        newTask: true,
        completedTask: false,
        failedTask: false,
        activeTask: true,
        taskTitle: "Automate Tests",
        taskDescription: "Setup automation for regression testing.",
        taskDate: "2024-10-30",
        category: "Testing",
      },
    ],
    taskCounts: {
      active: 3,
      new: 1,
      completed: 1,
      failed: 1,
    },
  },
];


export const admin = [{
  id: 1,
  firstName:"Admin",
  email: "admin@example.com",
  password: "123",
}];



export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  console.log(employees);
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(admin);


  return { employees, admin }; 
};

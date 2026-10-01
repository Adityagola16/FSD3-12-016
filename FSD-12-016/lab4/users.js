// we use in memory database
let users = [
  {
    id: 1,
    name: "Aditya gola",
    mob: "98345xxxxx",
    email: "aditya.example@exam.com",
  },
  {
    id: 2,
    name: "Monika Verma",
    mob: "92345xxxxx",
    email: "moni.example@exam.com",
  },
];

let nextId = 3;

export const getAllUsers = () => {
  return users;
}
const getUserById = (pid) => {
  const found = users.find((user) => user.id === pid);
  return found;
};

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};
export const updateUser = (pid, updatedData) => {  
  const userIndex = users.findIndex((user) => user.id === pid);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedData };
    return users[userIndex];
  }
  return null;
};
export const deleteUser = (pid) => {
  const userIndex = users.findIndex((user) => user.id === pid);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
  return null;
}; 


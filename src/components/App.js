import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const user_name = user.name;
  const user_city = user.city;
  const user_color = user.color;
  const user_bio = user.bio;
  return (
    <div>
      <NavBar />
      <Home name={user_name} city={user_city} color={user_color}/>
      <About bio={user_bio} github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;

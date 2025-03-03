import './App.css';
import { useState } from "react";
import teamsData from "./CollegeBasketballTeams.json"; 

function Welcome() {
  return (
    <>
      <h1>Welcome to the March Madness info site!</h1>
    </>
  );
}

function TeamCard({ school, name, city, state }: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>Location: {city}, {state}</h3>
    </>
  );
}

function Teams() {
  const [teams] = useState(teamsData.teams); 

  return (
    <>
      {teams.map((singleTeam) => (
      <TeamCard {...singleTeam} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <Teams /> 
    </>
  );
}

export default App;

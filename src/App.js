import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import "./App.css";

const App = () => {
  let users = [
    {
      name: "Salamat",
      lastName: "Kadyrov",
      age: 30,
      id: Date.now(),
    },
    {
      name: "Nursultan",
      lastName: "Mirlanov",
      age: 18,
      id: Date.now(),
    },
    {
      name: "Asan",
      lastName: "Usenov",
      age: 23,
      id: Date.now(),
    },
    {
      name: "Aman",
      lastName: "Bakyt uulu",
      age: 20,
      id: Date.now(),
    },
  ];

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;

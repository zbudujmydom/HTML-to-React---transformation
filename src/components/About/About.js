import React from "react";
import EmployeeCard from "./EmployeeCard";
import Heading from "./Heading";
import "./About.css";

const generateLoremIpsum = (wordCount) => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return loremIpsum.split(" ").slice(0, wordCount).join(" ");
};

const employees = [
  {
    name: "Imię Nazwisko",
    position: "Dział",
    description: generateLoremIpsum(40),
    image: "./assets/empl-1.jpg",
  },
  {
    name: "Imię Nazwisko",
    position: "Dział",
    description: generateLoremIpsum(40),
    image: "/assets/empl-2.jpg",
  },
];

const About = () => (
  <section id="about-us" className="about-us">
    <div className="main-container">
      <Heading text="Nasi specjaliści" />
      {employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          position={employee.position}
          description={employee.description}
          image={employee.image}
        />
      ))}
    </div>
  </section>
);

export default About;

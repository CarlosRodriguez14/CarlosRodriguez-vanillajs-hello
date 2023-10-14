/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = GenerateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let GenerateExcuse = () => {
  let pronoun = ["The", "A"];
  let subject = ["racoon", "cat", "dog", "taxi", "airplane", "hunter"];
  let action = [
    "took my",
    "ate my",
    "flew with my",
    "drive with my",
    "run with my"
  ];
  let possetion = ["shoe", "homework", "money", "girlfriend", "computer"];
  let where = [
    "on the street",
    "in my house",
    "at the airport",
    "at the subway"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};

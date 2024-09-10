import React from "react";
import CardList from "../components/Card/CardList";

function HomePage() {
  const products = [
    {
      title: "Lesson 01: Python for beginners",
      image: "./cs50.webp",
      description: "Greate for absolute for beginners",
      category: "Development",
    },
    {
      title: "Lesson 02: Introduce course",
      image: "./cs50.webp",
      description: "Greate for beginners, but seriously",
      category: "Development",
    },
    {
      title: "Lesson 01: Python for beginners",
      image: "./cs50.webp",
      description: "Greate for absolute for beginners",
      category: "Development",
    },
    {
      title: "Lesson 02: Introduce course",
      image: "./cs50.webp",
      description: "Greate for beginners, but seriously",
      category: "Development",
    },
    {
      title: "Lesson 02: Introduce course",
      image: "./cs50.webp",
      description: "Greate for beginners, but seriously",
      category: "Development",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold ms-10 py-6">
        A broad selection of courses
      </h1>
      <div className="flex justify-center">
        <CardList cards={products} />
      </div>
    </div>
  );
}

export default HomePage;

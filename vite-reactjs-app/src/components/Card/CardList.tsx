import React from "react";
import Card from "./Card";

interface Product {
  image: string;
  title: string;
  description: string;
  category: string;
}

interface CardListProps {
  cards: Product[];
}

function CardList({ cards }: CardListProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1">
      {cards.map((card, idx) => {
        return <Card key={idx} product={card} />;
      })}
    </div>
  );
}

export default CardList;

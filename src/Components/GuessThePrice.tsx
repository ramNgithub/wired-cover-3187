
import "./GuessThePrice.css"
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const initialProducts: Product[] = [
  { id: 1, name: "APPLE iPhone 12 (64 GB)", price: 53999 },
  { id: 2, name: "Galaxy S21FE 5G (8GB | 128GB)", price: 38999 },
  { id: 3, name: "Sony Playstation 5", price: 52990 },
  { id: 4, name: "M1 chip MacBook Air", price: 99900 },
  { id: 5, name: "KTM rc 200", price: 215000 },
  { id: 6, name: "Suzuki Hayabusa", price: 1641000 },
];

const GuessThePrice = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const handleGuess = () => {
    const currentProduct = products[currentProductIndex];
    const parsedGuess = parseFloat(guess);

    if (!isNaN(parsedGuess) && parsedGuess === currentProduct.price) {
      setMessage("Correct!");
      setScore(score + 1);
    } else {
      setMessage("Incorrect!");
    }

    setGuess("");
    setCurrentProductIndex(currentProductIndex + 1);
  };

  const resetGame = () => {
    setCurrentProductIndex(0);
    setScore(0);
    setGuess('');
   
  };

  return (
    <div className="container">
      <h1>Guess the Price</h1>
      {currentProductIndex === products.length ? (
        <div>
          <p>You scored {score} out of {products.length}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) :
      <div>
      <div className="card">
        
        <p>{products[currentProductIndex].name}</p>
      </div>
      <form className="form">
        <label htmlFor="guess">Enter your guess:</label>
        <input
          type="number"
          id="guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="button" onClick={handleGuess}>
          Submit
        </button>
      </form>
      <p className="message">{message}</p>
      <p>Score: {score}</p>
      </div>
}
    </div>
  );
};

export default GuessThePrice;

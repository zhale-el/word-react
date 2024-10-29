import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

const Container = () => {
  const [text, setText] = useState("");

  const stats = {
    numberOdWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharacters: 280 - text.length,
    facebookCharacters: 2200 - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;

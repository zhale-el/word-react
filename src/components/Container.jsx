import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INISTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");

  const stats = {
    numberOdWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharacters: INISTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharacters: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;

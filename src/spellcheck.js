import React, { useState } from "react";
import './spellcheck.css'

// Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheck = () => {
    const [inputText, setInputText] = useState("");
    const [suggestedText, setSuggestedText] = useState("");

   const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);
    
        // Implement a basic spelling check and correction
        const words = text.split(" "); //['teh , 'wrok']
        const correctedWords = words.map((word) => {
          const correctedWord = customDictionary[word.toLowerCase()];//the
          return correctedWord || word;
        }); //['the', 'work']
    
    
    
        // Set the suggested text (first corrected word)
        const firstCorrection = correctedWords.find(
          (word, index) => word !== words[index]
        );
        setSuggestedText(firstCorrection || "" );
      };

    return (
      <div className="container">
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    );
  
}

export default SpellCheck;
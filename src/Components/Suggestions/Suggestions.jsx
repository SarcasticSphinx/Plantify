import React, { useState } from 'react';
import './SuggestionStyles.css';
import downArrow from '../../images/arrow-down.png';
import { suggestions } from './suggestions.js';

export default function Suggestions() {
    const [activeSuggestion, setActiveSuggestion] = useState(null);

    const toggleQuestions = (id) => {
        setActiveSuggestion(activeSuggestion === id ? null : id);
    };

    return (
        <div className="suggestions-container">
            <h1 className="suggestions-heading">Explore options near me</h1>
            {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="suggestion">
                    <div
                        className="suggestion-header"
                        onClick={() => toggleQuestions(suggestion.id)}
                    >
                        <p>{suggestion.title}</p>
                        <img
                            className={`dropDown ${
                                activeSuggestion === suggestion.id ? 'rotated' : ''
                            }`}
                            src={downArrow}
                            alt="Expand"
                        />
                    </div>
                    {activeSuggestion === suggestion.id && (
                        <div className="questions-container">
                            {suggestion.questions.map((q, index) => (
                                <div key={index} className="question-answer">
                                    <p className="question">&bull; {q.question}</p>
                                    <p className="answer">{q.answer}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Question {
  id: string;
  text: string;

}

const QuestionsView: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://cae-bookstore.herokuapp.com/question/all');
        setQuestions(response.data); 
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>All Questions</h1>
      <ul>
        {Array.isArray(questions) ? (
          questions.map((question) => (
            <li key={question.id}>{question.text}</li>
           
          ))
        ) : (
          <p>You must be logged in to view questions</p>
        )}
      </ul>
    </div>
  );
};

export default QuestionsView;

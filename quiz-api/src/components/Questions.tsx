import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Question {
  id: string;
  question: string;
  answer: string | null;
  author: string;
  created_on: string;
}

const QuestionsView: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
      fetchQuestions();
    }
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://cae-bookstore.herokuapp.com/question/all');
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <h1>All Questions</h1>
          <ul>
            {questions.length > 0 ? (
              questions.map((question) => (
                <li key={question.id}>
                  <p>{question.question}</p>
                  <p>Author: {question.author}</p>
                  <p>Answer: {question.answer}</p>
                  <p>Created On: {question.created_on}</p>
                </li>
              ))
            ) : (
              <p>No questions available</p>
            )}
          </ul>
        </>
      ) : (
        <p>Please log in to view questions</p>
      )}
    </div>
  );
};

export default QuestionsView;

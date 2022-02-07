import React from 'react';

const QuestionList = ({ questions, title }) => {
  if (!questions.length) {
    return <h3>No Questions to show</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {questions &&
        questions.map((question) => (
          <div key={question._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {question.username} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {question.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{question.questionText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default QuestionList;
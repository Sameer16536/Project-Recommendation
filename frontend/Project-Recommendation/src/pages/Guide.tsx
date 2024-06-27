import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Guide: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [prompts, setPrompts] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch prompts for the selected project
    setPrompts([]);
  }, [projectId]);

  const handleCheckboxChange = (index: number) => {
    // Update progress based on the checkbox state
    setProgress((prevProgress) => prevProgress + 1);
  };

  return (
    <div className="guide">
      <NavBar />
      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-2xl mb-4">Guide for Project {projectId}</h2>
        <div className="space-y-4">
          {prompts.map((prompt, index) => (
            <div key={index} className="p-4 border rounded">
              {/* <p className="mb-2">{prompt.question}</p>
              <p className="mb-2">{prompt.answer}</p> */}
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              Mark as Complete
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="h-4 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${(progress / prompts.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;

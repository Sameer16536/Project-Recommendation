import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import  {useNavigate} from 'react-router-dom'


const Home:React.FC = () => {
    const [isFormVisible , setFormVisible]= useState(false)
    const navigate = useNavigate()
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLevel(e.target.value);
      };
    
      const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/project?level=${selectedLevel}`);
      };
  return (
    <div className='home'>
        <NavBar />
        <Slider />
        <div className='text-center mt-8'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>setFormVisible(true)}>See all Projects</button>
        </div>
        {isFormVisible &&(<div className="popup-form fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <h2 className="text-xl mb-4">Select Level</h2>
            <form onSubmit={handleFormSubmit}>
              <select value={selectedLevel} onChange={handleLevelChange} className="border p-2 mb-4 w-full">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
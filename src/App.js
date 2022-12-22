import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`).then(res => res.json())
      .then(data => {
        setImages(data.hits);
      }).catch(err => console.log(err))
  }, []);
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by someone
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            3000
          </li>
          <li>
            <strong>Downloads:</strong>
            300
          </li> <li>
            <strong>Likes:</strong>
            3000
          </li>
        </ul>
      </div>
      <div className="px6 py-4">

      </div>
    </div>
  );
}

export default App;

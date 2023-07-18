import { useState, useEffect } from "react";

export default function Memegenerator() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const newMeme = response.data.memes;
        setData(newMeme);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Meme Generator</h1>
        <div>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((meme) => (
              <div key={meme.id} className="myMeme">
                <img src={meme.url} alt={meme.name} />
              </div>
            ))
          ) : (
            <p>No memes found.</p>
          )}
          <form>
            <input type="text" />
            <button>generate</button>
          </form>
        </div>
      </div>
    </>
  );
}
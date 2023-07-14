import { useState } from "react";

const url = 'https://api.imgflip.com/get_memes';
const options = {

};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


export default function Memegenerator() {


  return (
   <>
   <h1>Meme</h1>
   </>
  )
}

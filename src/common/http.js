import axios from "axios";

export default async function getSynonyms(word) {
	const response = await axios.get(`https://api.datamuse.com/words?rel_syn=${word}`)
    return response.data;
}; 
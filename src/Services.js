const Base_Url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const findWord = async (word) => {
    const url = new URL(Base_Url + word);

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default findWord;
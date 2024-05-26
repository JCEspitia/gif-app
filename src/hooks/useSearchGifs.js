import {useState} from "react";

export const useSearchGifs = () => {

    const [valorInput, setValorInput] = useState('ABC');
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const onChange = (event) => {
        setValorInput(event.target.value)
    }

    const getGifs = async (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=HnTj0Y2S9fQ91Jg7a4x0fIzel1teEPxx&q=${query}`
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setIsLoading(false);

        return data.data;
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const gifs = await getGifs(valorInput);
        setGifs(gifs);
        console.log(gifs);
    }

    return {
        valorInput,
        onSubmit,
        onChange,
        gifs,
        isLoading,
    }
}
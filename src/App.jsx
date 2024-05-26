import {SearchEngine} from "./components/SearchEngine.jsx";
import {GifGrid} from "./components/GifGrid.jsx";
import {useSearchGifs} from "./hooks/useSearchGifs.js";
import {Spinner} from "./components/Spinner.jsx";

function App() {
    const {valorInput, onChange, onSubmit, gifs, isLoading} = useSearchGifs()

    return (
        <>
            <SearchEngine
                valorInput={valorInput}
                onChange={onChange}
                onSubmit={onSubmit}
            />

            { isLoading ? <Spinner/> : <GifGrid gifs={gifs}/> }

        </>
    )
}

export default App


// eslint-disable-next-line react/prop-types
import {Gif} from "./Gif.jsx";

export const GifGrid = ({ gifs }) => {
    return (
        <div className={"gif-grid"}>
            {
                // eslint-disable-next-line react/prop-types
                gifs.map((gif, index) => (
                    <Gif key={gif.id} gif={gif} index={index}/>
                ))
            }
        </div>
    )
}
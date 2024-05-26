import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const variants = {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    animate: ({index}) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: index * 0.1
        }
    })
}


// eslint-disable-next-line react/prop-types
export const Gif = ({gif, index}) => {

    const ref = useRef(null)
    const inView = useInView(ref, {
        once: true,
    })

    return (
        // eslint-disable-next-line react/prop-types
        <motion.img
            ref={ref}
            variants={variants}
            custom={{index}}
            initial="initial"
            animate={inView ? "animate" : ""}
            whileHover={{scale: 1.05}}
            className={"gif"}
            src={gif.images.original.url}
            alt={gif.title}
        />
    )
}
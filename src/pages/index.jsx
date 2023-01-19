import { useRef, useState } from "react";
import Lottie from 'react-lottie-segments';
import { WomanCoding } from "../assets";

export default function Home() {
	//const [isStopped, setIsStopped] = useState(false);

    const animationData = WomanCoding;

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    //const animationWomanCoding = useRef();

	const [startPoint, setStartPoint] = useState(10);

	const segment = {
		segments: [startPoint - 10, startPoint],
    	forceFlag: true
	}

	const playAnimation = () => {
		console.log(startPoint);
		setStartPoint(startPoint + 10);
	}

    return (
        <div>
            <Lottie
                options={defaultOptions}
                width={500}
                //lottieRef={animationWomanCoding}
                playSegments={segment}
            />
            <button
                onClick={playAnimation}
            >clique aqui ahahhahahahhah</button>
        </div>
    )
}

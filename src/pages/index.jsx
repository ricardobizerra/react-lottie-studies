import { useRef, useState } from "react";
import Lottie from 'react-lottie-segments';
import { WomanCoding } from "../assets";
import { StyledLottie } from "./styles";

export default function Home() {

    const animationData = WomanCoding;

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

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
        <StyledLottie>
			<div
				onScroll={playAnimation}
			>
				<Lottie
					options={defaultOptions}
					width={500}
					playSegments={segment}
				/>
				<button
					onClick={playAnimation}
				>clique aqui ahahhahahahhah</button>
			</div>
        </StyledLottie>
    )
}

import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'react-lottie-segments';
import { WomanCoding } from '../../assets';

function MyComponent() {
	const animationData = WomanCoding;
	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	const NUM_FRAMES_EACH_RUN = 40;
	const [numberScrolls, setNumberScrolls] = useState(0);

	const [frameNumber, setFrameNumber] = useState(NUM_FRAMES_EACH_RUN);

	const segment = {
		segments: [
			numberScrolls ? (frameNumber - NUM_FRAMES_EACH_RUN) : 0,
			numberScrolls ? frameNumber : 1
		],
		forceFlag: true
	}

	const [isAnimating, setIsAnimating] = useState(false);
	let animationId;

	let testNumber = 0;
	useEffect(() => {
		function handleScroll(event) {
			(testNumber != 0)
			? console.log(`ainda tá scrollando | testNumber: ${testNumber}`)
			: console.log(`começou um scroll   | testNumber: ${testNumber}`)
			testNumber++;
			setNumberScrolls(numberScrolls + 1);
			console.log(numberScrolls, isAnimating);

			if (event.deltaY > 0 && !isAnimating) {
				setIsAnimating(true);
				animationId = requestAnimationFrame(() => {
					setTimeout(() => {
						setFrameNumber(frameNumber + NUM_FRAMES_EACH_RUN);
					}, 100);
				});
			} else {
				setIsAnimating(false);
				cancelAnimationFrame(animationId);
			}
		}

		// Attach the scroll event listener
		window.addEventListener("wheel", handleScroll);

		// Clean up the event listener and animation frame when the component unmounts
		return () => {
			window.removeEventListener("wheel", handleScroll);
			cancelAnimationFrame(animationId);
		};
	}, [frameNumber, isAnimating]);

	return (
		<div>
		<Lottie
		options={defaultOptions}
		playSegments={segment}
		width={500}
		onComplete={() => setIsAnimating(false)}
		/>
		</div>
		);
	}

	export default MyComponent;

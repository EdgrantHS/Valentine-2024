import {useEffect, useState} from "react";

function App() {
	const [toggleLetter, setToggleLetter] = useState(false);
	const [name, setName] = useState("");

	// get name from urlParam
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const name = urlParams.get("name");
		// if name is null, set default name
		setName(name);
	}, []);

	const handleToggleLetter = () => {
		setToggleLetter(!toggleLetter);
		console.log("toggleLetter", toggleLetter);
	};

	return (
		<>
			<div
				id="red_anvelope"
				className="from-red-400 to-red-600 bg-gradient-to-tr w-[300px] h-[500px] outline outline-4 outline-red-700 rounded-md relative shadow-lg"
				onClick={handleToggleLetter}
			>
				<div
					id="anvelope-white"
					className="w-full h-1/5 bg-gradient-to-tr from-gray-50 to-gray-200 rounded-b-3xl absolute flex justify-center items-end"
				>
					<div
						id="anvelope-white"
						className="w-4/5 h-3/4 bg-gradient-to-tr from-gray-200 to-gray-300 border-gray-400 border-t-4 border-x-4 overflow-hidden rounded-t-md text-black flex-col flex items-center p-4"
					>
						<h1 className="text-2xl">Letter</h1>
					</div>
				</div>
				<div
					id="anvelope-flap"
					className="w-full h-1/5 outline outline-4 outline-red-600 rounded-b-3xl from-rose-500 to-rose-600 bg-gradient-to-bl absolute"
				/>
				<div className="flex justify-center items-center w-full">
					<div
						id="dragon"
						className="w-[200px] h-[200px] absolute bottom-1/4 bg-yellow-300 rounded-full flex justify-center items-center border-4 border-yellow-500"
					>
						<img
							src="https://www.svgrepo.com/show/493833/dragon.svg"
							alt="dragon"
							className="h-3/5 w-3/5"
						/>
					</div>
				</div>
			</div>

			{toggleLetter && (
				<div
					id="letter"
					className="absolute bg-gray-200 border-gray-400 border-4 w-[400px] h-[600px] rounded-xl opacity-95 text-black flex flex-col p-8 items-center justify-between shadow-2xl shadow-yellow-400"
				>
					<h1 className="text-4xl py-4 text-center">
						CONGRATZZZ {name}
					</h1>
					<div className="w-full h-4/5 text-xl p-4 flex flex-col items-center">
						<p className="text-center">
							Haloooooooo, SELAMAT BANGET. kamu udah keterima jadi
							Asisten Digilab!! 🎉🎉🎉 keren banget lhooooo
						</p>
						<div
							id="dragon"
							className="w-[200px] h-[200px] absolute bottom-1/4 bg-rose-300 rounded-full flex justify-center items-center border-4 border-rose-500 -mb-14"
						>
							<img
								src="https://www.svgrepo.com/show/532473/heart.svg"
								alt="heart"
								className="h-3/5 w-3/5"
							/>
						</div>
					</div>
					<button
						onClick={handleToggleLetter}
						className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 active:bg-red-800"
					>
						Close
					</button>
				</div>
			)}
		</>
	);
}

export default App;

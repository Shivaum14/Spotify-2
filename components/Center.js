import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";

const colors = [
	"from-indigo-500",
	"from-blue-500",
	"from-green-500",
	"from-red-500",
	"from-yellow-500",
	"from-pink-500",
	"from-purple-500",
];

function Center() {
	const { data: session } = useSession();
	const [colour, setcolour] = useState(null);

	console.log(session?.user);
	useEffect(() => {
		setcolour(shuffle(colors).pop());
	}, []);

	return (
		<div className="flex-grow text-white">
			<header className="absolute top-5 right-8">
				<div className="flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 ">
					<img
						className="rounded-full w-10 h-10"
						src={session?.user.image}
						alt="Profile image"
					/>
					<h1>{session?.user.name}</h1>
					<ChevronDownIcon className="h-5 w-5" />
				</div>
			</header>

			<section
				className={` flex items-end space-x-7 bg-gradient-to-b to-black ${colour} h-80 text-white p-8`}
			>
				<h1>sfkldjsahdlfkjfhaslk</h1>
				{/* <img src="" alt="" /> */}
			</section>
		</div>
	);
}

export default Center;

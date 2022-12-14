import React from "react";
import { signOut, useSession } from "next-auth/react";
import {
	HomeIcon,
	SearchIcon,
	LibraryIcon,
	PlusCircleIcon,
	HeartIcon,
	RssIcon,
} from "@heroicons/react/outline";

function Sidebar() {
	const { data: session, status } = useSession();
	console.log(`SESSION :{${session}}`);

	const PlayLists = Array(20).fill("Playlist name...");

	return (
		<div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
			<div className="space-y-4">
				<div className="core__buttons space-y-4">
					<button
						className="flex items-center space-x-2 hover:text-red-300 text-red-600"
						onClick={() => signOut()}
					>
						<p>Logout</p>
					</button>
					<button className="flex items-center space-x-2 hover:text-white">
						<HomeIcon className="h-5 w-5" />
						<p>Home</p>
					</button>
					<button className="flex items-center space-x-2 hover:text-white">
						<SearchIcon className="h-5 w-5" />
						<p>Search</p>
					</button>
					<button className="flex items-center space-x-2 hover:text-white">
						<LibraryIcon className="h-5 w-5" />
						<p>Your Library</p>
					</button>
					<hr className="border-t-[0.1px] border-gray-900" />

					<button className="flex items-center space-x-2 hover:text-white">
						<PlusCircleIcon className="h-5 w-5" />
						<p>Create Playlist</p>
					</button>
					<button className="flex items-center space-x-2 hover:text-white">
						<HeartIcon className="h-5 w-5" />
						<p>Liked Songs</p>
					</button>
					<button className="flex items-center space-x-2 hover:text-white">
						<RssIcon className="h-5 w-5" />
						<p>Your Episodes</p>
					</button>
					<hr className="border-t-[0.1px] border-gray-900" />
				</div>
				<div className="Playlists space-y-4">
					{/* Simply displays playlists. remove later */}
					{PlayLists.map((item, index) => {
						return (
							<p key={index} className="cursor-pointer hover:text-white">
								{item}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

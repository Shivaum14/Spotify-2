import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
	return (
		<div className="bg-black h-screen overflow-hidden">
			<Head>
				<title>spotify 2.0</title>
			</Head>
			<main className="">
				<Sidebar />
				{/* Center */}
			</main>
			<div>{/* player */}</div>
		</div>
	);
}

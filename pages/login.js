import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
	return (
		<div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
			<p className="text-white pb-10 text-3xl font-semibold">Spotify 2.0</p>
			<div className="relative w-52 h-52 mb-5">
				<Image
					src="https://links.papareact.com/9xl"
					alt="spotify logo"
					layout="fill"
					objectFit="contain"
					priority
				/>
			</div>
			{/* for this app only provider used is spotify but can include others like gmail */}
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button
						className="bg-[#18D860] text-white p-5 rounded-full"
						onClick={() => signIn(provider.id, { callbackUrl: "/" })}
					>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
}

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}

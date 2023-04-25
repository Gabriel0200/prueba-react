import { useEffect, useState } from "react";

export function TaskCard() {
	const [data, setData] = useState(null);
	const [image, setImage] = useState("https://robohash.org/");
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);
	return (
		<>
			{data ? (
				<article className="flex flex-wrap justify-center gap-x-12">
					{data.map((user) => (
						<div
							key={user.id}
							className="max-w-md flex flex-col items-center bg-red-500 mb-14 rounded-md p-8">
							<h2 className="">{user.title}</h2>
							<img className="" src={image + user.id} />
							<p className="">{user.body}</p>
						</div>
					))}
				</article>
			) : (
				console.error()
			)}
		</>
	);
}

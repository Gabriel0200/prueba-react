import { TaskCard } from "./TaskCard";

export function TaskList() {
	return (
		<>
			<h1 className="flex justify-center mt-20 text-8xl">Bienvenido</h1>
			<section className="mt-24">
				<TaskCard />
			</section>
		</>
	);
}

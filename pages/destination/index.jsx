import fs from "fs/promises";
import path from "path";

/**
 * @param {object} props
 * @param {{name: string, images: {png: string, webp: string}, description: string, distance: string, travel: string}[]} props.destinationsData
 */
export default function Destination({ destinationsData }) {
	return (
		<div>
			<div>
				01 <h1>Pick your destination</h1>
			</div>
			<ul>
				<li>Moon</li>
				<li>Mars</li>
				<li>Europa</li>
				<li>Titan</li>
			</ul>
			{destinationsData.map((destination, i) => (
				<div key={i}>
					<p>{destination.name}</p>
					<p>{destination.description}</p>
					<p>Avg. distance {destination.distance}</p>
					<p>Est. travel time {destination.travel}</p>
				</div>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const dataFilePath = path.join(process.cwd(), "data.json");
	let data = await fs.readFile(dataFilePath);
	let content = JSON.parse(data);

	return {
		props: { destinationsData: content.destinations },
	};
}

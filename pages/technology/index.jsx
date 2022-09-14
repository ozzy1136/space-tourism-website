import fs from "fs/promises";
import path from "path";

/**
 * @param {object} props
 * @param {{name: string, images: {portrait: string, landscape: string}, description: string}[]} props.technologyData
 */
export default function Technology({ technologyData }) {
	return (
		<div>
			<div>
				03 <h1>Space launch 101</h1>
			</div>
			<ol>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ol>
			<p>The terminology...</p>
			{technologyData.map((technologyType, i) => {
				return (
					<div key={i}>
						<p>{technologyType.name}</p>
						<p>{technologyType.description}</p>
					</div>
				);
			})}
		</div>
	);
}

export async function getStaticProps() {
	const dataFilePath = path.join(process.cwd(), "data.json");
	let data = await fs.readFile(dataFilePath);
	let content = JSON.parse(data);

	return {
		props: { technologyData: content.technology },
	};
}

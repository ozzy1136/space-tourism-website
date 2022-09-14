import fs from "fs/promises";
import path from "path";

/**
 * @param {object} props
 * @param {{name: string, images: {png: string, webp: string}, role: string, bio: string}[]} props.crewData
 */
export default function Crew({ crewData }) {
	return (
		<div>
			<div>
				02 <h1>Meet your crew</h1>
			</div>
			{crewData.map((member, i) => {
				return (
					<div key={i}>
						<p>{member.role}</p>
						<p>{member.name}</p>
						<p>{member.bio}</p>
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
		props: { crewData: content.crew },
	};
}

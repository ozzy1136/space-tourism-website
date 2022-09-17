import styles from "./index.module.css";

import fs from "fs/promises";
import path from "path";
import DestinationTabList from "../../components/DestinationTabList";

/**
 * @param {object} props
 * @param {{name: string, images: {png: string, webp: string}, description: string, distance: string, travel: string}[]} props.destinationsData
 */
export default function Destination({ destinationsData }) {
	return (
		<>
			<main className={`page-section-container`}>
				<div className={`${styles.headingWrapper}`}>
					<span className={`${styles.headingCounter}`}>01</span>{" "}
					<h1
						className="text-subheading2"
						style={{
							display: "inline-block",
							marginInlineStart: 0.5 + "em",
						}}
					>
						Pick your destination
					</h1>
				</div>
				<div className={`${styles.destinationSelectorWrapper}`}>
					<li>Moon</li>
					<li>Mars</li>
					<li>Europa</li>
					<li>Titan</li>
				</div>
				<DestinationTabList />
				{/* {destinationsData.map((destination, i) => (
					<article className={`${styles.contentWrapper}`} key={i}>
						<picture>
							<source
								srcSet={destination.images.webp}
								type="image/webp"
							/>
							<img
								src={destination.images.png}
								type="image/png"
								alt={`${destination.name}`}
							/>
						</picture>
						<h2
							className={`text-xxxl`}
							style={{ textAlign: "center" }}
						>
							{destination.name}
						</h2>
						<p style={{ textAlign: "center" }}>
							{destination.description}
						</p>
						<div style={{ textAlign: "center" }}>
							<p>Avg. distance</p>
							<p>{destination.distance}</p>
						</div>
						<div style={{ textAlign: "center" }}>
							<p>Est. travel time</p>
							<p>{destination.travel}</p>
						</div>
					</article>
				))} */}
			</main>
			<picture>
				<source
					srcSet="/assets/destination/background-destination-desktop.jpg"
					type="image/jpeg"
					media="(min-width: 1024px)"
				/>
				<source
					srcSet="/assets/destination/background-destination-tablet.jpg"
					type="image/jpeg"
					media="(min-width: 768px)"
				/>
				<img
					className={`page-bg`}
					src="/assets/destination/background-destination-mobile.jpg"
					alt=""
					role="presentation"
				/>
			</picture>
		</>
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

import styles from "./index.module.css";

import React from "react";

/**
 * @param {object} props
 * @param {{name: string, images: {png: string, webp: string}, description: string, distance: string, travel: string}[]} props.data
 */

export default function DestinationTab({ data }) {
	return (
		<React.Fragment>
			<div className={styles.photoWrapper}>
				<picture>
					<source srcSet={data.images.webp} type="image/webp" />
					<img
						src={data.images.png}
						type="image/png"
						alt={`${data.name}`}
					/>
				</picture>
			</div>
			<div className={styles.bioWrapper}>
				<h2 className="text-xxxl">{data.name}</h2>
				<p>{data.description}</p>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.detailsWrapper}>
				<div className={styles.distanceWrapper}>
					<p className="text-subheading2">Avg. distance</p>
					<p className="text-subheading1">{data.distance}</p>
				</div>
				<div className={styles.timeWrapper}>
					<p className="text-subheading2">Est. travel time</p>
					<p className="text-subheading1">{data.travel}</p>
				</div>
			</div>
		</React.Fragment>
	);
}

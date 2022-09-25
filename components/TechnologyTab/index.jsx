import styles from "./index.module.css";

/**
 * @param {object} props
 * @param {{name: string, images: {portrait: string, landscape: string}, description: string}[]} props.data
 */
export default function TechnologyTab({ data }) {
	return (
		<>
			<div className={`center-children ${styles.detailsWrapper}`}>
				<p className={`text-nav ${styles.subheading}`}>
					The terminology...
				</p>
				<h2 className={`text-xxl ${styles.heading}`}>{data.name}</h2>
				<p>{data.description}</p>
			</div>
			<div className={styles.photoWrapper}>
				<picture>
					<source
						srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
							data.images.portrait
						}`}
						type="image/jpeg"
						media="(min-width: 1025px)"
					/>
					<img
						className={styles.photo}
						src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
							data.images.landscape
						}`}
						alt={data.name}
					/>
				</picture>
			</div>
		</>
	);
}

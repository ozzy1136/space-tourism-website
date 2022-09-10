let name, images, description, distance, travel;

export default function Destination() {
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
			<p>{name}</p>
			<p>{description}</p>
			<p>Avg. distance {distance}</p>
			<p>Est. travel time {travel}</p>
		</div>
	);
}

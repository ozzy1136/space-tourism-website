import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>
				So, you want to travel to <em>Space</em>
			</h1>
			<p>
				Let&#8217;s face it; if you want to go to space, you might as
				well genuinely go to outer space and not hover kind of on the
				edge of it. Well sit back, and relax because we&#8217;ll give
				you a truly out of this world experience!
			</p>
			<Link href="/destination">
				<a>Explore</a>
			</Link>
		</div>
	);
}

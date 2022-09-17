import PageHeader from "./PageHeader";

export default function Layout({ children }) {
	return (
		<>
			<PageHeader />
			{children}
		</>
	);
}

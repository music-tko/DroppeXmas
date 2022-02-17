import { render, screen } from "@testing-library/react";
import NavBar from "./components/layout/NavBar";

test("renders signup link", () => {
	render(<NavBar />);
	const linkElement = screen.getByText(/Register/i);
	expect(linkElement).toBeInTheDocument();
});

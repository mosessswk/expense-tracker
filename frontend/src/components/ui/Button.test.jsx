import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
	test("calls the click callback", async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Save</Button>);
		await user.click(screen.getByRole("button", { name: /save/i }));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test("renders disabled state", () => {
		render(<Button disabled>Save</Button>);
		expect(screen.getByRole("button", { name: /save/i })).toBeDisabled();
	});

	test("renders button text", () => {
		render(<Button>Save changes</Button>);
		expect(screen.getByRole("button", { name: /save changes/i })).toBeInTheDocument();
	});
});

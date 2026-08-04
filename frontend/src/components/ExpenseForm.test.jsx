import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import ExpenseForm from "./ExpenseForm";

const mockOnSubmit = vi.fn();
const mockOnCancel = vi.fn();
const mockExpense = {
    id: 1,
    title: "Taxi",
    amount: "18",
    category: "Transport",
    date: "2026-08-01T00:00:00.000Z",
    description: "Airport ride",
};
vi.mock("../validators/expenseValidator", () => ({
	expenseValidator: ({ title, amount, category, date }) => {
		const errors = {};
		if (!title) errors.title = "Title is required";
		if (!amount) errors.amount = "Amount is required";
		if (!category) errors.category = "Category is required";
		if (!date) errors.date = "Date is required";
		return errors;
	},
}));

describe("ExpenseForm", () => {
    test("typing into fields", async () => {
        const user = userEvent.setup();
        render(<ExpenseForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

        const inputs = screen.getAllByRole("textbox");
        await user.type(inputs[0], mockExpense.title);
        await user.type(inputs[1], mockExpense.amount);
        await user.type(inputs[2], mockExpense.category);
        await user.type(inputs[3], mockExpense.date.slice(0, 10));
        await user.type(inputs[4], mockExpense.description);

        expect(inputs[0]).toHaveValue(mockExpense.title);
        expect(inputs[1]).toHaveValue(mockExpense.amount);
        expect(inputs[2]).toHaveValue(mockExpense.category);
        expect(inputs[3]).toHaveValue(mockExpense.date.slice(0, 10));
        expect(inputs[4]).toHaveValue(mockExpense.description);
    });

    test("validation messages", async () => {
        const user = userEvent.setup();
        render(<ExpenseForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

        await user.click(screen.getByRole("button", { name: /submit expense/i }));

        expect(screen.getByText("Title is required")).toBeInTheDocument();
        expect(screen.getByText("Amount is required")).toBeInTheDocument();
        expect(screen.getByText("Category is required")).toBeInTheDocument();
        expect(screen.getByText("Date is required")).toBeInTheDocument();
    });

    test("submit callback", async () => {
        const user = userEvent.setup();
        render(<ExpenseForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

        const inputs = screen.getAllByRole("textbox");
        await user.type(inputs[0], mockExpense.title);
        await user.type(inputs[1], mockExpense.amount);
        await user.type(inputs[2], mockExpense.category);
        await user.type(inputs[3], mockExpense.date.slice(0, 10));
        await user.type(inputs[4], mockExpense.description);

        await user.click(screen.getByRole("button", { name: /submit expense/i }));

        expect(mockOnSubmit).toHaveBeenCalledWith({
            title: mockExpense.title,
            amount: mockExpense.amount,
            category: mockExpense.category,
            date: mockExpense.date.slice(0, 10),
            description: mockExpense.description,
        });
    });

    test("edit mode initial values", () => {
        render(<ExpenseForm initialExpense={mockExpense} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

        const inputs = screen.getAllByRole("textbox");
        expect(screen.getByRole("heading", { name: /edit expense/i })).toBeInTheDocument();
        expect(inputs[0]).toHaveValue(mockExpense.title);
        expect(inputs[1]).toHaveValue(mockExpense.amount);
        expect(inputs[2]).toHaveValue(mockExpense.category);
        expect(inputs[3]).toHaveValue(mockExpense.date.slice(0, 10));
        expect(inputs[4]).toHaveValue(mockExpense.description);
    });
});
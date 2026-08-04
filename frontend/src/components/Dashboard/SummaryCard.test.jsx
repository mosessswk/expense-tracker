import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import SummaryCard from "./SummaryCard"

describe("SummaryCard", () => {
    test("total spending renders", () => {
        render(<SummaryCard totalSpending={123} numberOfExpenses={5} largestExpense={{ title: "Laptop", amount: 999 }} />)
        expect(screen.getByText("$ 123")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
        expect(screen.getByText("Laptop — $ 999")).toBeInTheDocument();
    });
});
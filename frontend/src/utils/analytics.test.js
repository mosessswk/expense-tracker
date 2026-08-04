import { describe, test, expect } from "vitest";
import { getExpenseCount, getTotalSpending, getLargestExpense, getCategoryTotals, getMonthlyTotals, getAverageExpense } from "./analytics";

describe("analytics.js", () => {

    const zeroExpenses = [];
    const oneExpense = [{ title: "Expense 1", category: "Test", amount: 100, date: "2026-01-01" }];
    const multipleExpenses1 = [
        { title: "Expense 1", category: "Test 1", amount: 0, date: "2026-01-01" },
        { title: "Expense 2", category: "Test 1", amount: 200, date: "2026-01-02", description: "some description" },
        { title: "Expense 3", category: "Test 2", amount: 100, date: "2026-02-03" }
    ];
    const multipleExpenses2 = [
        { title: "Expense 1", category: "Test 1", amount: 100.5, date: "2026-02-01" },
        { title: "Expense 2", category: "Test 2", amount: 200, date: "2026-01-02", description: "some description" },
        { title: "Expense 3", category: "Test 3", amount: 200, date: "2026-02-03" }
    ];

    describe("getExpenseCount", () => {
        test("zero expenses", () => {
            const count = getExpenseCount(zeroExpenses);
            expect(count).toBe(0);
        });

        test("one expense", () => {
            const count = getExpenseCount(oneExpense);
            expect(count).toBe(1);
        });

        test("multiple expenses 1", () => {
            const count = getExpenseCount(multipleExpenses1);
            expect(count).toBe(3);
        });

        test("multiple expenses 2", () => {
            const count = getExpenseCount(multipleExpenses2);
            expect(count).toBe(3);
        });
    });

    describe("getTotalSpending", () => {
        test("zero expenses", () => {
            const total = getTotalSpending(zeroExpenses);
            expect(total).toBe(0);
        });

        test("one expense", () => {
            const total = getTotalSpending(oneExpense);
            expect(total).toBe(100);
        });

        test("multiple expenses 1", () => {
            const total = getTotalSpending(multipleExpenses1);
            expect(total).toBe(300);
        });

        test("multiple expenses 2", () => {
            const total = getTotalSpending(multipleExpenses2);
            expect(total).toBe(500.5);
        });
    });

    describe("getLargestExpense", () => {
        test("zero expenses", () => {
            const largest = getLargestExpense(zeroExpenses);
            expect(largest).toBeNull();
        });

        test("one expense", () => {
            const largest = getLargestExpense(oneExpense);
            expect(largest).toEqual(oneExpense[0]);
        });

        test("multiple expenses 1", () => {
            const largest = getLargestExpense(multipleExpenses1);
            expect(largest).toEqual(multipleExpenses1[1]);
        });

        test("multiple expenses 2", () => {
            const largest = getLargestExpense(multipleExpenses2);
            expect(largest).toBeOneOf([multipleExpenses2[1], multipleExpenses2[2]]);
        });
    });

    describe("getCategoryTotals", () => {
        test("zero expenses", () => {
            const totals = getCategoryTotals(zeroExpenses);
            expect(totals).toEqual([]);
        });

        test("one expense", () => {
            const totals = getCategoryTotals(oneExpense);
            expect(totals).toEqual([{ category: "Test", total: 100 }]);
        });

        test("multiple expenses 1", () => {
            const totals = getCategoryTotals(multipleExpenses1);
            expect(totals).toEqual([
                { category: "Test 1", total: 200 },
                { category: "Test 2", total: 100 }
            ]);
        });

        test("multiple expenses 2", () => {
            const totals = getCategoryTotals(multipleExpenses2);
            expect(totals).toEqual([
                { category: "Test 1", total: 100.5 },
                { category: "Test 2", total: 200 },
                { category: "Test 3", total: 200 }
            ]);
        });
    });

    describe("getMonthlyTotals", () => {
        test("zero expenses", () => {
            const totals = getMonthlyTotals(zeroExpenses);
            expect(totals).toEqual([]);
        });

        test("one expense", () => {
            const totals = getMonthlyTotals(oneExpense);
            expect(totals).toEqual([{ month: "2026-01", total: 100 }]);
        });

        test("multiple expenses 1", () => {
            const totals = getMonthlyTotals(multipleExpenses1);
            expect(totals).toEqual([
                { month: "2026-01", total: 200 },
                { month: "2026-02", total: 100 }
            ]);
        });

        test("multiple expenses 2", () => {
            const totals = getMonthlyTotals(multipleExpenses2);
            expect(totals).toEqual([
                { month: "2026-01", total: 200 },
                { month: "2026-02", total: 300.5 }
            ]);
        });
    });

    describe("getAverageExpense", () => {
        test("zero expenses", () => {
            const average = getAverageExpense(zeroExpenses);
            expect(average).toBe(0);
        });

        test("one expense", () => {
            const average = getAverageExpense(oneExpense);
            expect(average).toBe(100);
        });

        test("multiple expenses 1", () => {
            const average = getAverageExpense(multipleExpenses1);
            expect(average).toBeCloseTo(100);
        });

        test("multiple expenses 2", () => {
            const average = getAverageExpense(multipleExpenses2);
            expect(average).toBeCloseTo(166.83, 2);
        });
    });
})


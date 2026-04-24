"use client"

import EditTransactionModal from "@/components/EditTransactionModal"
import IncomeView from "@/components/IncomeView"
import MonthlyTrendChart from "@/components/MonthlyTrendChart"
import SpendingView from "@/components/SpendingView"
import TransactionForm from "@/components/TransactionForm"
import TransactionList from "@/components/TransactionList"
import TransactionSummary from "@/components/TransactionSummary"
import { Transaction } from "@/types/transaction"
import { useEffect, useState } from "react"

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)
  const [view, setView] = useState<"income" | "spending">("spending")

  const fetchTransactions = async () => {
    const res = await fetch("/api/transactions")

    if (!res.ok) {
      console.error("Failed to fetch transactions")
      return
    }

    const data = await res.json()
    setTransactions(data)
  }

  const handleUpdate = (updated: Transaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    )
  }

  const incomeTransactions = transactions.filter((t) => t.type === "income")

  const expensesTransactions = transactions.filter((t) => t.type === "expense")

  const totalIncome = incomeTransactions.reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = expensesTransactions.reduce((sum, t) => sum + t.amount, 0)

  const net = totalIncome - totalExpenses

  useEffect(() => {
    const loadTransactions = async () => {
      await fetchTransactions()
    }

    void loadTransactions()
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Overview</h2>
          <TransactionSummary
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            net={net}
          />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Monthly Trends</h2>
            <div className="h-80">
              <MonthlyTrendChart transactions={transactions} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Activity Breakdown</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setView("income")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    view === "income"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Income
                </button>

                <button
                  onClick={() => setView("spending")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    view === "spending"
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  Spending
                </button>
              </div>

              <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
                {view === "income" ? (
                  <IncomeView data={incomeTransactions} total={totalIncome} />
                ) : (
                  <SpendingView data={expensesTransactions} total={totalExpenses} />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>
          <TransactionForm onAdd={fetchTransactions} />
        </section>

        <section className="bg-white rounded-xl shadow p-4">
          <TransactionList
            transactions={transactions}
            onDelete={fetchTransactions}
            onEdit={setEditingTransaction}
          />
        </section>

        {editingTransaction && (
          <EditTransactionModal
            transaction={editingTransaction}
            onClose={() => setEditingTransaction(null)}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </div>
  )
}

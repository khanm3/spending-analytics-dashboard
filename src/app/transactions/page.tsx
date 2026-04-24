"use client"

import CategoryPieChart from "@/components/CategoryPieChart"
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
    fetchTransactions()
  }, [])

  return (
    <div className="p-6">
      <TransactionSummary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        net={net}
      />

      <MonthlyTrendChart transactions={transactions} />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setView("income")}
          className={`px-3 py-1 rounded ${
            view === "income" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Income
        </button>

        <button
          onClick={() => setView("spending")}
          className={`px-3 py-1 rounded ${
            view === "spending" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          Spending
        </button>
      </div>

      {view === "income" ? (
        <IncomeView data={incomeTransactions} total={totalIncome} />
      ) : (
        <SpendingView data={expensesTransactions} total={totalExpenses} />
      )}

      <TransactionForm onAdd={fetchTransactions} />

      <TransactionList
        transactions={transactions}
        onDelete={fetchTransactions}
        onEdit={setEditingTransaction}
      />

      {editingTransaction && (
        <EditTransactionModal
          transaction={editingTransaction}
          onClose={() => setEditingTransaction(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  )
}

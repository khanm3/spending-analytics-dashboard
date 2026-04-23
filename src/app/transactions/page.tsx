"use client"

import CategoryPieChart from "@/components/CategoryPieChart"
import EditTransactionModal from "@/components/EditTransactionModal"
import TransactionForm from "@/components/TransactionForm"
import TransactionList from "@/components/TransactionList"
import TransactionSummary from "@/components/TransactionSummary"
import { Transaction } from "@/types/transaction"
import { useEffect, useState } from "react"

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)

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

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const net = totalIncome - totalExpenses

  const expensesTransactions = transactions.filter((t) => t.type === "expense")

  const COLORS = [
    "#2563EB", // blue
    "#16A34A", // green
    "#F59E0B", // amber
    "#EF4444", // red
    "#8B5CF6", // purple
    "#06B6D4", // cyan
    "#F97316", // orange
  ]

  const expensesCategoryData = Object.values(
    expensesTransactions.reduce((acc, t, idx) => {
      if (!acc[t.category]) {
        acc[t.category] = { name: t.category, value: 0, fill: COLORS[idx % COLORS.length] }
      }

      acc[t.category].value += Math.abs(t.amount)

      return acc
    }, {} as Record<string, { name: string; value: number, fill: string }>)
  )

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

      <CategoryPieChart data={expensesCategoryData} />

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

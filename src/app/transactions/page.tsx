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

  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (!acc[t.category]) {
        acc[t.category] = { name: t.category, value: 0 }
      }

      acc[t.category].value += Math.abs(t.amount)

      return acc
    }, {} as Record<string, { name: string; value: number }>)
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

      <CategoryPieChart data={categoryData} />

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

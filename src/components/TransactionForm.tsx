"use client"
import React, { useState } from "react"

type Props = {
  onAdd: () => void
}

export default function TransactionForm({ onAdd }: Props) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [type, setType] = useState<"income" | "expense">("expense")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const transaction = {
      title,
      amount: Number(amount),
      category,
      date,
      type
    }

    await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    })

    // refresh list
    onAdd()

    // clear form
    setTitle("")
    setAmount("")
    setCategory("")
    setDate("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="type" className="text-sm font-medium">Type</label>
      <select
        id="type"
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expense")}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition">
        Save Transaction
      </button>
    </form>
  )
}

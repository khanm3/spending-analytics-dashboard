import { Transaction } from "@/types/transaction"

export const getMonthlyData = (transactions: Transaction[]) => {
  const map: Record<string, { month: string, income: number, expenses: number }> = {}

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7)

    if (!map[month]) {
      map[month] = { month, income: 0, expenses: 0 }
    }

    if (t.type === "income") {
      map[month].income += Number(t.amount)
    } else {
      map[month].expenses += Number(t.amount)
    }
  })

  return Object.values(map)
}

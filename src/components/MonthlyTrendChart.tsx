import { getMonthlyData } from "@/lib/analytics"
import { Transaction } from "@/types/transaction"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts"

type Props = {
  transactions: Transaction[]
}

export default function MonthlyTrendChart({ transactions }: Props) {
  const data = getMonthlyData(transactions)

  return (
    <div className="w-full h-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#16A34A"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#EF4444"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

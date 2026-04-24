import CategoryPieChart from "@/components/CategoryPieChart";
import { Transaction } from "@/types/transaction";

type Props = {
  data: Transaction[]
  total: number
}

export default function SpendingView({ data, total }: Props) {
  const COLORS = [
    "#2563EB", // blue
    "#16A34A", // green
    "#F59E0B", // amber
    "#EF4444", // red
    "#8B5CF6", // purple
    "#06B6D4", // cyan
    "#F97316", // orange
  ]

  const categoryData = Object.values(
    data.reduce((acc, t, idx) => {
      if (!acc[t.category]) {
        acc[t.category] = { name: t.category, value: 0, fill: COLORS[idx % COLORS.length] }
      }

      acc[t.category].value += Math.abs(t.amount)

      return acc
    }, {} as Record<string, { name: string; value: number, fill: string }>)
  )
  
  return (
    <div>
      <div className="mb-4 font-semibold">
        Total Spending: ${total.toFixed(2)}
      </div>
    
      <CategoryPieChart data={categoryData} />
    </div>
  )
}

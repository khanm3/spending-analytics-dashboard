import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts"

type Props = {
  data: { name: string; value: number }[]
}

export default function CategoryPieChart({ data }: Props) {
  // TODO: add category-based mapping/colors

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Spending by Category</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          />
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(Number(value))
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

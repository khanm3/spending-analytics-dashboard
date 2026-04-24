type Props = {
  totalIncome: number
  totalExpenses: number
  net: number
}

export default function TransactionSummary({
  totalIncome,
  totalExpenses,
  net
}: Props) {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
        <p className="text-sm text-gray-500">Income</p>
        <p className="text-2xl font-semibold text-green-600">
          {formatCurrency(totalIncome)}
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
        <p className="text-sm text-gray-500">Expenses</p>
        <p className="text-2xl font-semibold text-red-600">
          {formatCurrency(totalExpenses)}
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
        <p className="text-sm text-gray-500">Net</p>
        <p className={`text-2xl font-semibold ${net >= 0 ? "text-gray-900" : "text-red-600"}`}>
          {formatCurrency(net)}
        </p>
      </div>
    </div>
  )
}

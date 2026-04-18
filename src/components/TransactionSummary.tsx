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
    <div className="pb-2">
      <div>Income: {formatCurrency(totalIncome)}</div>
      <div>Expenses: {formatCurrency(totalExpenses)}</div>
      <div>Net: {formatCurrency(net)}</div>
    </div>
  )
}

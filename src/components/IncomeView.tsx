import { Transaction } from "@/types/transaction"

type Props = {
  data: Transaction[]
  total: number
}

export default function IncomeView({ data, total }: Props) {
  return (
    <div>
      <div className="mb-4 font-semibold">
        Total Income: ${total.toFixed(2)}
      </div>
    
      <div className="text-gray-500">
        {data.length} income transactions
      </div>
    </div>
  )
}

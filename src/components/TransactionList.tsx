import { Transaction } from "@/types/transaction"

type Props = {
  transactions: Transaction[]
  onDelete: () => void
  onEdit: (transaction: Transaction) => void
}

export default function TransactionList({ transactions, onDelete, onEdit }: Props) {
  const handleDelete = async (id: string) => {
    await fetch(`/api/transactions/${id}`, {
      method: "DELETE"
    })

    // refresh list
    onDelete()
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet.</p>
      ) : (
        <table className="w-full border border-gray-200 divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Amount</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-600 border-b border-gray-200">{t.date}</td>
                  <td className="p-3 text-sm text-gray-600 border-b border-gray-200">{t.title}</td>
                  <td className="p-3 text-sm text-gray-600 border-b border-gray-200">{t.category}</td>
                  <td className="p-3 text-sm text-gray-600 border-b border-gray-200">{t.amount}</td>
                  <td className="p-3 text-sm text-gray-600 border-b border-gray-200">
                    <div className="flex gap-3">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => onEdit(t)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(t.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

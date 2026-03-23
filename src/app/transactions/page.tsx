import TransactionForm from "@/components/TransactionForm"
import TransactionList from "@/components/TransactionList"

export default function TransactionsPage() {
  return (
    <div className="p-6">
      <TransactionForm />
      <TransactionList />
    </div>
  )
}

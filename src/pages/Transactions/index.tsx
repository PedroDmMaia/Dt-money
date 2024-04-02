import { useContext } from 'react'

import { Header } from '../../Components/Header'
import { Summary } from '../../Components/Summary'
import { SeachForm } from './components/SearchForm'
import { TransactionContext } from '../../contexts/TransactionsContext'

import {
  TransactionContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transaction() {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SeachForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}

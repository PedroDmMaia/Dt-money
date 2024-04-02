import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/themes/default'
import { GlobalStyle } from './Styles/global'
import { Transaction } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </ThemeProvider>
  )
}

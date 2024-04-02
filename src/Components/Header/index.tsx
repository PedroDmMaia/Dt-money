import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoIMG from '../../Assets/logo.svg'
import { NewTransactionModal } from '../NewTrasationModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIMG} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'

import {
  CloseButton,
  Content,
  Overlay,
  TransationType,
  TransationTypeButton,
} from './styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'

const newTransactionFormschema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormschema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormschema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { category, description, price, type } = data

    await createTransaction({
      description,
      category,
      price,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransationType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransationTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransationTypeButton>

                  <TransationTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransationTypeButton>
                </TransationType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastra
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

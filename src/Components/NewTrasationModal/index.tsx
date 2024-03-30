import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import { CloseButton, Content, Overlay, TransationType, TransationTypeButton } from './styles';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <TransationType>
                        <TransationTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24}/>

                            Entrada
                        </TransationTypeButton>

                        <TransationTypeButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24}/>

                            Saída
                        </TransationTypeButton>
                    </TransationType>
                    <button type="submit">Cadastra</button>
                </form>
                
            </Content>
        </Dialog.Portal>
    )
}
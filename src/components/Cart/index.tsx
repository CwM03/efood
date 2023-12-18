import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { ButtonLink } from '../Button/styles';
import { close, remove, clear } from '../../store/reducers/cart';
import { CardapioItem } from '../../pages/Home';

import { usePurchaseMutation } from '../../services/api';

import * as S from './styles';
import { RootReducer } from '../../store';

const Cart = () => {
    const [purchase, { isSuccess }] = usePurchaseMutation();
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

    const closeCart = () => {
        dispatch(close())
    }
    
    const removeItem = (id: number) => {
        dispatch(remove(id))
    }
      
    const getTotalPrice = (items: CardapioItem[]) => {
        return items.reduce((acumulador, valorAtual) => {
            if (valorAtual.preco) {
                return (acumulador += valorAtual.preco)
            }
            return 0
        }, 0);
    };

    const form = useFormik({
        initialValues: {
            deliveryReceiver: '',
            deliveryAddress: '',
            deliveryCity: '',
            deliveryZipCode: '',
            deliveryNumber: '',
            optionalAddOn: '',
            cardDisplayName: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: '',
        },
        validationSchema: Yup.object({
            deliveryReceiver: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
            deliveryAddress: Yup.string().required('O campo é obrigatório'),
            deliveryCity: Yup.string().required('O campo é obrigatório'),
            deliveryZipCode: Yup.string().min(9, 'O campo precisa ter pelo 9 caracteres').max(9, 'O campo precisa ter pelo 9 caracteres').required('O campo é obrigatório'),
            deliveryNumber: Yup.string().required('O campo é obrigatório'),
            optionalAddOn: Yup.string(),
            cardDisplayName: Yup.string().required('O campo é obrigatório'),
            cardNumber: Yup.string().required('O campo é obrigatório'),
            cardCode: Yup.string().required('O campo é obrigatório'),
            expiresMonth: Yup.string().required('O campo é obrigatório'),
            expiresYear: Yup.string().required('O campo é obrigatório'),
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.deliveryReceiver,
                    address: {
                        description: values.deliveryAddress,
                        city: values.deliveryCity,
                        zipCode: values.deliveryZipCode,
                        number: Number(values.deliveryNumber),
                        complement: values.optionalAddOn
                    }
                },
                payment: {
                    card: {
                        name: values.cardDisplayName,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        },
                    }
                },
                products: items.map((item) => ({
                    id: item.id,
                    price: 0
                }))
            });
        },
    })

    useEffect(() => {
        if (isSuccess) {
          dispatch(clear())
        }
      }, [isSuccess, dispatch])

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.Sidebar>
                {step == 1 && (
                    <>
                        {items.length > 0 ? (
                            <>
                                <ul>
                                {items.map((item) => (
                                    <S.CartItem key={item.id}>
                                        <div key={item.id}>
                                            <img src={item.foto} alt={item.foto} />
                                            <div>
                                                <h3>{item.nome}</h3>
                                                <span>R${(item.preco).toFixed(2).replace('.', ',')}</span>
                                                <button type="button" onClick={() => removeItem(item.id)}></button>
                                            </div>
                                        </div>
                                    </S.CartItem>
                                ))}
                                </ul>
                                <p>Valor total <span>R${getTotalPrice(items).toFixed(2).replace('.', ',')}</span></p>
                                <button type="submit" onClick={() => {if (form.isValid && Object.values(form.errors).length === 0) {setStep(step + 1);}}} className="button-primary">Continuar com a entrega</button>
                            </>
                        ): (
                            <p className="empty-text">
                                O carrinho esta vazio, adicione pelo menos um produto para continuar com a compra.
                            </p>
                        )}
                    </>
                )}
                {step === 2 && (
                    <S.Form onSubmit={form.handleSubmit}>
                    <h2>Entrega</h2>
                        <div>
                            <div>
                                <label htmlFor="deliveryReceiver">Quem irá receber</label>
                                <input type="text" id="deliveryReceiver" name="deliveryReceiver" value={form.values.deliveryReceiver} onChange={form.handleChange} onBlur={form.handleBlur} />
                                <label htmlFor="deliveryAddress">Endereço</label>
                                <input type="text" id="deliveryAddress" name="deliveryAddress" value={form.values.deliveryAddress} onChange={form.handleChange} onBlur={form.handleBlur} />
                                <label htmlFor="deliveryCity">Cidade</label>
                                <input type="text" id="deliveryCity" name="deliveryCity" value={form.values.deliveryCity} onChange={form.handleChange} onBlur={form.handleBlur} />
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="deliveryZipCode">CEP</label>
                                    <InputMask mask="99999-99" type="text" id="deliveryZipCode" name="deliveryZipCode" value={form.values.deliveryZipCode} onChange={form.handleChange} onBlur={form.handleBlur} />
                                </div>
                                <div>
                                    <label htmlFor="deliveryNumber">Número</label>
                                    <input type="number" id="deliveryNumber" name="deliveryNumber" value={form.values.deliveryNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="optionalAddOn">Complemento (opcional)</label>
                                <input type="text" id="optionalAddOn" name="optionalAddOn" value={form.values.optionalAddOn} onChange={form.handleChange} onBlur={form.handleBlur} />
                            </div>
                        </div>
                        <button type="submit" onClick={() => {if (form.isValid && Object.values(form.errors).length === 0) {setStep(step + 1);}}} className="button-primary">
                            Continuar com o pagamento
                        </button>
                        <button type="submit" onClick={() => setStep(step - 1)} className="button-secondary" >
                            Voltar para o carrinho
                        </button>
                    </S.Form>
                    )}
                    {step === 3 && (
                        <S.Form onSubmit={form.handleSubmit}>
                        <h2>Pagamento - Valor a pagar R$<span>{getTotalPrice(items).toFixed(2).replace('.', ',')}</span></h2>
                            <div>
                                <div>
                                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                                    <input type="text" id="cardDisplayName" name="cardDisplayName" value={form.values.cardDisplayName} onChange={form.handleChange} onBlur={form.handleBlur} />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="cardNumber">Número do cartão</label>
                                        <InputMask mask="9999 9999 9999 9999" type="text" id="cardNumber" name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    </div>
                                    <div>
                                        <label htmlFor="cardCode">CVV</label>
                                        <InputMask mask="999" type="text" id="cardCode" name="cardCode" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                                        <InputMask mask="99" type="text" id="expiresMonth" name="expiresMonth" value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    </div>
                                    <div>
                                        <label htmlFor="expiresYear">Ano de vencimento</label>
                                        <InputMask mask="99" type="text" id="expiresYear" name="expiresYear" value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" onClick={() => {if (form.isValid && Object.values(form.errors).length === 0) {setStep(step + 1);}}} className="button-primary">
                                Finalizar o pagamento
                            </button>
                            <button type="submit" onClick={() => setStep(step - 1)} className="button-secondary">
                                Voltar para a edição de endereço
                            </button>
                        </S.Form>
                    )}
                    {step === 4 && (
                        <div>
                            <h2>Pedido realizado - </h2>
                            <p>
                                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                                <br/>
                                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
                                <br/>
                                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                                <br/>
                                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                            </p>
                            <ButtonLink to={`/`} className="button-primary" title="Clique aqui para continuar com a compra" type="button" onClick={closeCart}>Concluir</ButtonLink>
                        </div>
                    )}
			</S.Sidebar>
        </S.CartContainer>
    )
}

export default Cart

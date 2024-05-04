import { Dialog } from 'primereact/dialog';
import React, { useContext } from 'react';
import { CartContext } from '../../context/Cart';

export const CartModal = ({ isOpenCartModal, setIsOpenCartModal}) => {
    const { cartProducts, deleteCartProducts } = useContext(CartContext);

    return (
        <Dialog header="Cart" visible={isOpenCartModal} modal={false} style={{ maxWidth: '400px' }} onHide={() => setIsOpenCartModal(false)} className="md:text-lg font-bold md:fixed md:right-6 md:top-[100px] w-[200x]">
                <hr />
                {cartProducts.length === 0 && (
                    <p className="py-16 text-center">Your cart is empty</p>
                )}
                {cartProducts.map((product) => (
                    <article
                        key={product.id}
                        className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 py-4"
                    >
                        <img src={product.img} alt="" className="rounded-md" />
                        <div>
                            <h6>{product.subtitle}</h6>
                            <p>
                                <span>
                                    ${product.discountPrice} x{" "}
                                    {product.quantity}
                                </span>{" "}
                                <span className="font-bold">
                                    $
                                    {(
                                        product.discountPrice * product.quantity
                                    ).toFixed(2)}
                                </span>
                            </p>
                        </div>
                        <button
                            className="ml-auto"
                            onClick={() => deleteCartProducts(product.id)}
                        >
                            <div className="hover:fill-orange-primary">
                            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a"/></svg>
                            </div>
                        </button>
                    </article>
                ))}
                {cartProducts.length !== 0 && (
                    <div className="px-6 pb-8">
                        <button className="w-full rounded-md bg-orange-primary py-4 text-white transition-all hover:bg-orange-700">
                            Checkout
                        </button>
                    </div>
                )}
        </Dialog>
    )
}

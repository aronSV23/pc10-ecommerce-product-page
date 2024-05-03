import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/Cart';

export const Details = ({ objectProduct }) => {
    const { addCartProducts } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    const handleAddToCart = () => {
        addCartProducts({
            img: objectProduct.imagesSmall[0],
            id: objectProduct.id,
            discountPrice: (
                objectProduct.price *
                (1 - objectProduct.discount)
            ).toFixed(2),
            title: objectProduct.title,
            quantity: count || 1,
        });
        setCount(0);
    };

    return (
        <section className="container mx-auto px-4 md:px-0">
            <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
                {objectProduct.subtitle}
            </p>
            <h2 className="mb-4 text-3xl font-bold">{objectProduct.title}</h2>
            <p className="mb-5 text-dark-grayish-blue">
                {objectProduct.description}
            </p>
            <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-1">
                <span className="text-3xl">
                    $
                    {(
                        objectProduct.price *
                        (1 - objectProduct.discount)
                    ).toFixed(2)}
                </span>
                <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
                    {objectProduct.discount * 100}%
                </span>
                <span className="text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left">
                    ${objectProduct.price.toFixed(2)}
                </span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
                <div className="col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
                    <button
                        className="text-3xl text-orange-primary"
                        onClick={decrementCount}
                    >
                        -
                    </button>
                    <span className="text-xl">{count}</span>
                    <button
                        className="text-3xl text-orange-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
                <button
                    className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700 md:col-span-1"
                    onClick={handleAddToCart}
                >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/></svg>                    <span>Add to cart</span>
                </button>
            </div>
        </section>
    );
};


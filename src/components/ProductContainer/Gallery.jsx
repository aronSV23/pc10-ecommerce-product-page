import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import React from 'react';

export const Gallery = ({ images }) => {
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
       return <Image src={item.itemImageSrc} alt="Image" width="250" preview  showItemNavigators />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt='image thumbnail' />
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} showItemNavigators />
        </div>
    )
}
import React from 'react'
import Button from '../Button/Button'
import './PorductItem.css'

export default function ProductItem({product, className, onAdd}) {
    const onAddHandler = () => {
        onAdd(product);
    }

  return (
    <div className={'product ' + className}>
        <div className={'img'}/>
        <div className="title">{product.title}</div>
        <div className="description">{product.description}</div>
        <div className="price">
            <span>Стоимость: <b>{product.price}</b></span>
        </div>
        <Button className='addBtn' onClick={onAddHandler}>
            добавить в корзину
        </Button>
    </div>
  )
}
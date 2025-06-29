import React from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    {id: '1', title: 'джинсы', price: 5000, descriotion: 'синего цвета, прямые'},
    {id: '2', title: 'куртка', price: 12000, descriotion: 'зеленого цвета, теплая'},
    {id: '3', title: 'джинсы 2', price: 5000, descriotion: 'синего цвета, прямые'},
    {id: '4', title: 'куртка 8', price: 122, descriotion: 'зеленого цвета, теплая'},
    {id: '5', title: 'джинсы 3', price: 5000, descriotion: 'синего цвета, прямые'},
    {id: '6', title: 'куртка 4', price: 600, descriotion: 'зеленого цвета, теплая'},
    {id: '7', title: 'джинсы 4', price: 5500, descriotion: 'синего цвета, прямые'},
    {id: '8', title: 'куртка 5', price: 12000, descriotion: 'зеленого цвета, теплая'}
]

const getTotalPrice = (item = []) => {
    return item.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

export default function ProductList() {
    const [addedItems, setAddedItems] = usestate([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItem = [];

        if(alreadyAdded){
            newItem = addedItems.filter(item => item.id !== product.id);
        } else {
            newItem = [...addedItems, product];
        }

        setAddedItems(newItem)

        if(newItem.length === 0) {
            tg.mainButton.hide();
        } else {
            tg.mainButton.show();
            tg.MainButton.setParams({
                text: `купить за ${getTotalPrice(newItem)}`
            })
        }
    }

  return (
    <div className='list'>
        {products.map(item => {
            <ProductItem
             product={item}
             onAdd={onAdd}
             className={'item'} />
        })}
    </div>
  )
}
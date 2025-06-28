import React from 'react'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css';

export default function Header() {
    const {user, onClose} = useTelegram();

    return (
        <header className='header'>
            <Button onClick={onClose}>Закрыть</Button>
            
            <span className={'username'}>
                {user}
            </span>
        </header>
  )
}
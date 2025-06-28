import React from 'react'
import Button from '../Button/Button'

export default function Header() {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close();
    }

  return (
    <header className='header'>
        <Button onClic={onClose}>Закрыть</Button>
        <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
        </span>
    </header>
  )
}
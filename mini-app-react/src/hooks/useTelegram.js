import React from 'react';
import Button from '../components/Button/Button';

const tg = window.Telegram.WebApp;

export function useTelegram(){
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hiden();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user?.username,
    }
}
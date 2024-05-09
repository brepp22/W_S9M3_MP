import  { useState } from 'react'
import {useLocalStorage} from './useLocalStorage'

export function useDarkMode () {
    const [dark, setDark] = useLocalStorage('dark',false)
    return [dark, setDark]
}
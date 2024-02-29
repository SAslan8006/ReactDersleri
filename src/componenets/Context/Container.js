import React, { useContext } from 'react'
import Header from './Header'
import Button from './Button'
import ThemeContext from '../../context/ThemeContext'

function Container() {
    const { theme } = useContext(ThemeContext)
    console.log(theme);
    return (
        <div className={theme}>
            <Header />
            <hr />
            <Button />
        </div>
    )
}

export default Container
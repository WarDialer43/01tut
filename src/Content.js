import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Wardialer', 'Codewarrior', 'Ragman'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <p>
                Hi {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content
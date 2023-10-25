import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Wardialer', 'Codewarrior', 'Ragman'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleclick = (name) => {
        console.log('You clicked it !')
    }

    const handleclick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    return (
        <main>
            <p>
                Hi {handleNameChange()}!
            </p>
            <button onClick={handleclick}>Click it</button>
            <button onClick={() => handleclick2(`WarDailer`)}>Click it</button>
        </main>
    )
}

export default Content
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

    const handleclick3 = (e) => {
        console.log(e.target.innerText)
    }   

    return (
        <main>
            <p onDoubleClick={handleclick}>
                Hi {handleNameChange()}!
            </p>
            <button onClick={handleclick}>Click it</button>
            <button onClick={() => handleclick2(`WarDailer`)}>Click it</button>
            <button onClick={(e) => handleclick3(e)}>Click it</button>
        </main>
    )
}

export default Content
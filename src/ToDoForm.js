import {useState} from 'react'

function ToDoForm() {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleKeyPress = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Введите значение"
            />
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm
import { useState } from "react"
import AnimalCards from "../Components/AnimalCards"

const Patos = () => {

    const [count, setCount] = useState(0)
    const [animal, setAnimal] = useState("")
    const handleAnimal = e => {
        const value = e.target.value
        setAnimal(value)
    }

    return (
        <>
            <h1>Tengo {count} {animal}</h1>
            <button onClick={() => setCount(count + 1)}>
                Más {animal}
            </button>
            <button onClick={() => setCount(count - 1)}>
                Menos {animal}
            </button>
            <input
                value={animal}
                onChange={handleAnimal}
            />
            <AnimalCards animal={animal} count={count} />
        </>
    )
}

export default Patos
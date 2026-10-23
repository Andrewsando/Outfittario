import { useState } from "react"
import Button from "../components/Button"
import "./Preferences.css"

function Preferences() {

    const [style, setStyle] = useState("Casual")
    const [clima, setClima] = useState("")

    function formPrevented(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
    }

    return (
        <main className="preferences-page">
            <form className="preferences-form" onSubmit={formPrevented}>
                <header className="preferences-heading">
                    <h1>¿Cómo te quieres vestir?</h1>
                    <p>Elige tus preferencias para crear un outfit para hoy.</p>
                </header>

                <fieldset className="preference-group">
                    <legend>¿Qué estilo prefieres?</legend>
                    <div className="preference-options preference-options--two">
                        <label className={`preference-option${style === "Casual" ? " is-selected" : ""}`}>
                            <input
                                type="radio"
                                name="style"
                                value="Casual"
                                checked={style === "Casual"}
                                onChange={(event) => setStyle(event.target.value)}
                            />
                            <span>Casual</span>
                        </label>

                        <label className={`preference-option${style === "Elegante" ? " is-selected" : ""}`}>
                            <input
                                type="radio"
                                name="style"
                                value="Elegante"
                                checked={style === "Elegante"}
                                onChange={(event) => setStyle(event.target.value)}
                            />
                            <span>Elegante</span>
                        </label>
                    </div>
                </fieldset>

                <fieldset className="preference-group">
                    <legend>¿Cómo está el clima?</legend>
                    <div className="preference-options">
                        {["medio", "frío", "caliente"].map((weather) => (
                            <label
                                className={`preference-option${clima === weather ? " is-selected" : ""}`}
                                key={weather}
                            >
                                <input
                                    type="radio"
                                    name="clima"
                                    value={weather}
                                    required={weather === "medio"}
                                    checked={clima === weather}
                                    onChange={(event) => setClima(event.target.value)}
                                />
                                <span>{weather}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                <Button type="submit" text="Crear outfit" />
            </form>
        </main>
    )
}

export default Preferences
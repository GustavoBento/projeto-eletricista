import './Formulario.css'

export default function Formulario({label, type, nomeLabel, placeholder}) {
    return (
        <form>
            <label htmlFor={label}> {nomeLabel} </label>
            <input type={type} placeholder={placeholder} required id={label} />
        </form>
    )
}
interface Props {
    title: string
    value: boolean
    changeValue: (value: boolean) => void
}

export const SwitchInput = ({title, value, changeValue}:Props) => {
    return (
        <div>
            <label htmlFor={`${title}`}>{title}</label>
                <input checked={value} onChange={(e => changeValue(e.target.checked))} type="checkbox" name={`${title}`} id={`${title}`} className="ml-2"/>
            
        </div>
    )
}
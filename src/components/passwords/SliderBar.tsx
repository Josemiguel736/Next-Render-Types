interface Props {
    value:number
    changeValue: (value:number) => void
}
export const SliderBar = ({value, changeValue}:Props) => {
    return (
        <div>
            <input className="w-full" type="range" min={6} value={value} onChange={e=> changeValue(Number(e.target.value))}/>
        </div>
    )
}
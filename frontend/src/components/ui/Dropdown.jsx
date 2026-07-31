function Dropdown({ value, onChange, children }) {
    return (
        <select className="bg-brand-secondary rounded-full px-5 py-2 outline outline-blue-300" value={value} onChange={onChange}>
            {children}
        </select>
    )
}

export default Dropdown;

// eslint-disable-next-line react/prop-types
export const SearchEngine = ({ onSubmit, valorInput, onChange }) => {
    return (
        <form className={'search-form'} onSubmit={onSubmit}>
            <input className={"input-field"} value={valorInput} onChange={onChange}/>
        </form>
    )
}
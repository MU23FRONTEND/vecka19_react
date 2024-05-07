import './searchForm.css';
import { FormEvent } from 'react';

type Props = {
    handleInputChange : (event : FormEvent) => void,
    handleCategoryChange : (event : FormEvent) => void
}

function SearchForm({ handleInputChange, handleCategoryChange }  : Props) {
    const categories : string[] = [
        'Any',
        'Programming',
        'Misc',
        'Dark',
        'Pun'
    ];

  return (
    <form className="search-form">
        <input 
            onChange={ handleInputChange }
            type="text" 
        />
        <select 
            onChange={ handleCategoryChange }
            name="category" 
            id="category" 
            className="select"
        >
            {
                categories.map((cat, index) => {
                    return <option
                             value={ cat }
                             key={ index }  
                           >
                            { cat }
                           </option>
                })
            }
        </select>
    </form>
  )
}

export default SearchForm;

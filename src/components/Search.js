import React from 'react'
import { useState } from 'react';

const Search = ({getSearchCharacter}) => {

    const [text, setText] = useState('');
    const searchCharacter = (q) => {
        setText(q);
        getSearchCharacter(q);
    }
    return (
        <section className='search'> 
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search characters'
                    value={text}
                    onChange = {(e) => searchCharacter(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search

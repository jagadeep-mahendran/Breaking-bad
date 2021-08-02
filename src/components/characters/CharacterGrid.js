import React from 'react'
import CharacterCard from './CharacterCard';
import Loading from '../Loading';

const CharacterGrid = ({characters,isLoading}) => {
    return isLoading ? (
    <Loading/>
    ) 
    :
    (
    <section className='cards'>
        {characters.map( character => (
            <CharacterCard key={character.char_id} character={character}/>
        ))}
    </section>
    );
}

export default CharacterGrid

import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);

   /* const handleAdd = () => {
        //setCategories( [ 'hunterXhunter', ...categories] );
        setCategories( cats => [...cats, 'hunterXhunter'] );
    }*/

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return(
                         <GifGrid 
                            key={ category }
                            category={category}
                        />
                        )
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
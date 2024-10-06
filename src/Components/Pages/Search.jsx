import React, { useState } from 'react'
import { useSearchParams } from "react-router-dom";

const Search = ({searchD,searchCat}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchName, setSearchName] = useState("");
    const [searchRegion, setSearchRegion] = useState("");

    const handleInputNameChange = (e) => {
        setSearchName(e.target.value);
    }

    const handleInputRegionChange = (e) => {
        setSearchRegion(e.target.value);
    }

    const submitSearch = () =>{
        
        if(isChecked==true){
            searchD(searchName);
        }else{
            searchD(searchRegion);
        }
    }

    const clearSearch = () =>{
        setSearchName('');
        setSearchRegion("");
        searchD('');
    }

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        
       
        setIsChecked((prev) => !prev);

        if(isChecked==true){
            searchCat('region');
            setSearchName('');
        }else{
            searchCat('name');
            setSearchRegion("");
        }
      };


    return (
        <div className='relative md:w-2/4 align-self-end'>
            <input className='form-check-input w-full pl-12 py-2 me-3' type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            {
                isChecked ? 
                <input type="text" value={searchName} onChange={handleInputNameChange} className='w-full pl-12 py-2 bg-white rounded' placeholder='Search for a country...' /> : 
                <input type="text" value={searchRegion} onChange={handleInputRegionChange} className='w-full pl-12 py-2 bg-white rounded' placeholder='Search for a region...' />
            }
            <button className='btn btn-primary w-full pl-12 py-2 ms-3' onClick={submitSearch}>Search</button>
            <button className='btn btn-primary w-full pl-12 py-2 ms-3' onClick={clearSearch}>Clear</button>
        </div>
    )
}

export default Search;
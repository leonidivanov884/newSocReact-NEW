import React from 'react'
import style from './search.module.css'
import {BiSearch} from "react-icons/all";
import Button from "../button/Button";

const Search = () => {
    return (
        <div  className={style.search}>
            <input type="text" placeholder="Search for contacts, experts, companies, more ..." />
            <Button  color={'#799BF0'} textColor={'#fff'}  >
                <BiSearch />
                Search
            </Button>
        </div>
    )
}

export default Search;
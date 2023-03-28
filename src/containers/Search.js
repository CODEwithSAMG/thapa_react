import React, { useState } from "react";

const Search = () => {
    const [img, setImg] = useState("")
    const search = `https://source.unsplash.com/400x300/?${img}`;

    const onChange = (e) => {
        setImg(e.target.value)
    }

    return (
        <>
            <input type="text" onChange={onChange} value={img} />
            <img src={search} alt="search" />
        </>
    )
}

export default Search;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import Search from '@mui/icons-material/Search'

function SearchBar() {
    const [valueSearch, setValueSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(valueSearch){
            navigate(`search/${valueSearch}`)
            setValueSearch('')
        }
    }

    return (
        <Paper
            component={'form'}
            onSubmit={handleSubmit}
            sx={{
                borderRadius : 20,
                border : "1px solid #e3e3e3",
                pl : 2,
                boxShadow: 'none',
                mr : { sm : 5 },
                width : '400px',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'space-between'
            }}
        >
            <input 
                type="text"
                placeholder='Search....'
                value={valueSearch}
                style={{
                    border : 'none',
                    outline : 'none',
                    width : '100%'
                }}
                onChange={(e) => setValueSearch(e.target.value)}
            />
            <IconButton 
                type='submit' 
                sx={{
                    p : '10px',
                    color : 'red',
                }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from './../components/videos';
import { fetchFromApi } from './../utils/fetchAPI';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';


function SearchDetail() {
    const [videos, setVideos] = useState(null)
    const [loading, setLoading] = useState(true)
    const { searchTerm } = useParams()

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
                setVideos(data.items)
                setLoading(false)
            }
        )
    }, [searchTerm])

    return (
        loading ? 
        <section style={{height : '88vh', width : '80%', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
            <Spin size='large'/>
        </section>
        :
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                Search results for : <span style={{ color: "#FC1503" }}> {searchTerm} </span> videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchDetail

import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Sidebar from './../components/sidebar';
import Videos from './../components/videos';
import { fetchFromApi } from './../utils/fetchAPI';
import { Spin } from 'antd';

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => {
                setVideos(data.items)
                setLoading(false)
            }
        )
    }, [selectedCategory])

    return (
        <Stack
            sx={{
                flexDirection : { sx : 'column', md : 'row' }
            }}
        >
            <Box
                sx={{
                    height : { sx : 'auto', md : '92vh' },
                    borderRight : '1px solid #3d3d3d',
                    px : { xs : 0, md : 2 }
                }}
            >
                <Sidebar 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                    Copyright © 2022 JSM Media
                </Typography>
            </Box>

            {
                loading ? 
                <Box style={{height : '88vh', width : '100%', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <Spin size='large'/>
                </Box>
                :
                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>{selectedCategory}
                        <span style={{ color: "#FC1503" }}>  videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Box>
            }
        </Stack>
    )
}

export default Feed

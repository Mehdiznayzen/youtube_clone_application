import { Button, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section
            className='home'
            style={{
                height:'100vh',
                display: "flex",
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <div 
                className="titles-container"
            >
                <Typography 
                    style={{
                        fontSize:'40px',
                        textAlign : 'center',
                        fontFamily : "'Hedvig Letters Serif', serif"
                    }}
                >
                    Welcome to my application <br />
                    For generating images and videos
                </Typography>
                <Button>
                    <Link to={'/search-images'}>See some photos</Link>
                </Button>
            </div>
        </section>
    )
}

export default Home
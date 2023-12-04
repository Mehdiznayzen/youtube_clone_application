import { Button, Card, Col, Row, Spin } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SearchVideos() {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    const [valueInput, setValueInput] = useState('')
    const [loadingNewData, setLoadingNewData] = useState(false)

    useEffect(() => {
        fetch(`https://pixabay.com/api/videos/?key=41034166-c868638b62920c5eb93dffaa7&q=quran&per_page=30`)
        .then((response) => response.json())
        .then((donne) => {
            setData(donne.hits)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])

    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoadingNewData(true)
        fetch(`https://pixabay.com/api/videos/?key=41034166-c868638b62920c5eb93dffaa7&q=${valueInput}&per_page=30`)
        .then((response) => response.json())
        .then((donne) => {
            setData(donne.hits)
            setLoadingNewData(false)
            setValueInput('')
        })
        .catch((error) => console.log(error))
    }

    return (
        <div style={{padding:'14px', display:'grid', gap:'20px'}}>
            <form method='get' className='input-container' onSubmit={handleSubmit}>
                {
                    loadingNewData ? 
                    <Search
                        size='large'
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        type='text'
                        placeholder='Search for videos....'
                        loading
                    /> :
                    <Search
                        size='large'
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        type='text'
                        placeholder='Search for videos....'
                    />
                }
            </form>
            <>
                {
                    loading ? 
                    <section
                        style={{
                            height:'100vh',
                            display : 'flex',
                            alignItems : 'center',
                            justifyContent : 'center'
                        }}
                    >
                        <Spin size='large'/>
                    </section>
                    :
                    <section>
                        <Row gutter={30}>
                            {
                                data.map((video) => (
                                    <Col key={video.id} span={6}>
                                        {/* <li key={video.id}>
                                            <h3>{video.tags}</h3>
                                            <video width="320" height="240" controls>
                                            <source src={video.videos.tiny.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                            </video>
                                        </li> */}
                                        <Card
                                            hoverable
                                            cover={
                                                <video width={320} height={240} controls>
                                                    <source src={video.videos.tiny.url}/>
                                                </video>
                                            }
                                        >
                                            <div style={{display:'grid', alignvideos:'center', justifyContent:'center', gap:'10px'}}>
                                                    <Button>
                                                        <Link to={video.pageURL} target='_blank'>
                                                            Download
                                                        </Link>
                                                    </Button>
                                                <Button>
                                                    <Link to={`/search-video/${video.id}`}>More information</Link>
                                                </Button>
                                            </div>    
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </section>
                }
            </>
        </div>
        
    )
}

export default SearchVideos
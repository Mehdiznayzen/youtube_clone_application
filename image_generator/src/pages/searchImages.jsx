import { Button, Card, Col, Row, Spin } from 'antd'
import Search from 'antd/es/input/Search'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SearchImages() {
    const [data, setData] = useState('')
    const [loadingData, setLoadingData] = useState(true)
    const [loadingNewData, setLoadingNewData] = useState(false)
    const [valueSearch, setValueSearch] = useState('')

    // For the random images
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=41034166-c868638b62920c5eb93dffaa7&q=${valueSearch}&image_type=photo&per_page=50`)
        .then((response) => response.json())
        .then((donne) => {
            setData(donne)
            setLoadingData(false)
        })
        .catch((error) => console.log(error))
    }, [])

    // For handle the onsubmit event
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoadingNewData(true)
        fetch(`https://pixabay.com/api/?key=41034166-c868638b62920c5eb93dffaa7&q=${valueSearch}&image_type=photo&per_page=50`)
        .then((response) => response.json())
        .then((donne) => {
            setData(donne)
            setLoadingNewData(false)
        })
        .catch((error) => console.log(error))
    }

    return (
        <section
            style={{
                display: "flex",
                flexDirection:'column',
                padding:'20px',
                gap : '20px'
            }}
        >
            <form className="input-container" onSubmit={handleSubmit}>
                {
                    loadingNewData ?
                    <Search
                        value={valueSearch}
                        onChange={(e) => {
                            setValueSearch(e.target.value)
                        }}
                        placeholder='Search for images....'
                        loading
                    /> :
                    <Search
                        value={valueSearch}
                        onChange={(e) => {
                            setValueSearch(e.target.value)
                        }}
                        placeholder='Search for images....'
                    />
                }
            </form>
            {
                loadingData
                ? 
                <section 
                    style={{
                        display: "flex",
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent : 'center',
                        height:'90vh'
                    }}
                >
                    <Spin size='large'/>
                </section>
                : 
                <div 
                    className="images-container"
                    style={{
                        display : 'grid',
                        gap : '20px'
                    }}
                >
                    <Row gutter={30}>
                {
                    data?.hits.map((item) => (
                        <Col key={item.id} span={6}>
                            <Card 
                                hoverable
                                cover={<img width={500} height={400} src={item.largeImageURL} alt="" />}
                            >
                                <div style={{display:'grid', alignItems:'center', justifyContent:'center', gap:'10px'}}>
                                        <Button>
                                            <Link to={item.pageURL} target='_blank'>
                                                Download
                                            </Link>
                                        </Button>
                                    <Button>
                                        <Link to={`/search-images/${item.id}`}>More information</Link>
                                    </Button>
                                </div>    
                            </Card>
                        </Col>
                    ))
                }
            </Row>
                </div>
            }
        </section>
    )
}

export default SearchImages
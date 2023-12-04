import { LoadingOutlined } from '@ant-design/icons'
import { Button, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SingleImages() {
    const { id } = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=41034166-c868638b62920c5eb93dffaa7&id=${id}`)
        .then((response) => response.json())
        .then((donne) => {
            setData(donne)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        loading ? 
        <section
            style={{
                height : '100vh',
                display : 'grid',
                alignItems : 'center',
                justifyContent : 'center'
            }}
        >
            <Spin
                indicator={
                    <LoadingOutlined
                    style={{
                    fontSize: 24,
                    }}
                    spin
                />
                }
            />
        </section>
        :
        
        <section
            style={{
                height : '100vh',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                gap : '40px'
            }}
        >
            {
                data.hits.map((item) => (
                    <>
                        <div className="image-container">
                            <img src={item.largeImageURL} style={{borderRadius:'20px'}} width={500} height={400} alt="" />
                        </div>
                        <div className="info-container" style={{display:'grid', gap:'20px'}}>
                            <div style={{display :'flex', gap : '10px', alignItems:'center'}}>
                                <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#6DB9EF'}}>Comments : </label>
                                <p className='font-bold tracking-widest text-base'>{item.comments}</p>
                            </div>
                            <div style={{display :'flex', gap : '10px', alignItems:'center'}}>
                                <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#6DB9EF'}}>Likes : </label>
                                <p className='font-bold tracking-widest text-base'>{item.likes}</p>
                            </div>
                            <div style={{display :'flex', gap : '10px', alignItems:'center'}}>
                                <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#6DB9EF'}}>Tags : </label>
                                <p className='font-bold tracking-widest text-base'>{item.tags}</p>
                            </div>
                            <div style={{display :'flex', gap : '10px', alignItems:'center'}}>
                                <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#6DB9EF'}}>User : </label>
                                <p className='font-bold tracking-widest text-base'>{item.user}</p>
                            </div>
                            <div style={{display :'flex', gap : '10px', alignItems:'center'}}>
                                <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#6DB9EF'}}>Views : </label>
                                <p className='font-bold tracking-widest text-base'>{item.views}</p>
                            </div>
                            <div className="btns-container flex items-center gap-5">
                                <Button>
                                    <Link to={item.pageURL} target='_blank'>Download</Link>
                                </Button>
                                <Button>
                                    <Link to={'/'}>Back home</Link>
                                </Button>
                                <Button>
                                    <Link to={'/search-images'}>Search more images</Link>
                                </Button>
                            </div>
                        </div>
                    </>
                ))
            }
        </section>
    )
}

export default SingleImages
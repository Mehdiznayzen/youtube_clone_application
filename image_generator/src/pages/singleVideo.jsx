import { Button, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons';

function SingleVideo() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`https://pixabay.com/api/videos/?key=41034166-c868638b62920c5eb93dffaa7&id=${id}`)
        .then((response) => response.json())
        .then((donne) => {
            setData(donne.hits)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])

    console.log(data)


    return (
        loading ? 
        <section
            style={{
                height:'100vh',
                display : 'flex',
                alignItems : 'center',
                justifyContent :'center'
            }}
        >
            <Spin 
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize : '30px'
                        }}
                    />
                }
            />
        </section>
        :
        <section
            style={{
                height:'100vh',
                display : 'flex',
                alignItems : 'center',
                justifyContent :'center'
            }}
        >
            {
                data.map((item) => (
                    <div key={item.id} style={{display:'flex', gap:'20px', alignItems:'center'}}>
                        <div className="video-container">
                            <video width={600} height={500} controls>
                                <source src={item.videos.tiny.url}/>
                            </video>
                        </div>
                        <div style={{
                            display:'grid',
                            gap : '16px'
                        }}>
                            <div className="info-container" style={{display:'grid', gap:'14px'}}>
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
                                <div style={{display :'flex', gap : '10px', alignItems:'center'}}>
                                    <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#6DB9EF'}}>Duration : </label>
                                    <p className='font-bold tracking-widest text-base'>{item.duration}</p>
                                </div>
                            </div>
                            <div className="btns-container flex items-center gap-5">
                                <Button>
                                    <Link to={item.pageURL} target='_blank'>Download</Link>
                                </Button>
                                <Button>
                                    <Link to={'/'}>Back home</Link>
                                </Button>
                                <Button>
                                    <Link to={'/search-videos'}>Search more videos</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default SingleVideo
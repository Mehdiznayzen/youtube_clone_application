import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import { Feed, ChannelDetail, SearchDetail, VideoDetail } from './pages/index'

function App() {
  return (
    <Box sx={{background : '#000'}}>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Feed />}/>
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route path='/channel/:id' element={<ChannelDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchDetail />}/>
      </Routes>
    </Box>
  )
}

export default App
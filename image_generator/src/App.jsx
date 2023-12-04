import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { Home, SearchImages, SearchVideos, SingleImages, SingleVideo } from './pages/index';
import Sider from './components/sider';

function App() {
  return (
    <Layout style={{overflow:'hidden'}}>
      <Layout.Sider>
        <Sider/>
      </Layout.Sider>
      <Layout.Content>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search-images' element={<SearchImages/>}/>
          <Route path='/search-videos' element={<SearchVideos/>}/>
          <Route path='/search-images/:id' element={<SingleImages/>}/>
          <Route path='/search-video/:id' element={<SingleVideo/>}/>
        </Routes>
      </Layout.Content>
    </Layout>
  )
}

export default App
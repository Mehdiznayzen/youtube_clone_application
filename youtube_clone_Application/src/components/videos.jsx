import { Stack, Box } from "@mui/material"
import VideoCard from './videoCard';
import ChannelCard from './channelCard';


function Videos({ videos, direction }) {
    return (
        <Stack direction={direction || 'row'} flexWrap={'wrap'} justifyContent={'start'} gap={3}>
            {
                videos?.map((video, index) => (
                    <Box key={index}>
                        {
                            video.id.videoId && <VideoCard video={video}/>
                        }
                        {
                            video.id.channelId && <ChannelCard channelDetail={video}/>
                        }
                    </Box>
                ))
            }
        </Stack>
    )
}

export default Videos
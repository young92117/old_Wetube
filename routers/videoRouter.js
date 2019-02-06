import express from  'express'
import routes from '../routes'
import { home, upload, videoDetail, editVideo, deleteVideo } from '../controllers/videoController';

const videoRouter = express.Router()

videoRouter.get(routes.home, home)
videoRouter.get(routes.upload, upload )
videoRouter.get(routes.videoDetail, videoDetail)
videoRouter.get(routes.editVideo, editVideo)
videoRouter.get(routes.deleteVideo, deleteVideo)


export default videoRouter
import {videos} from '../db'
import routes from '../routes'

export const home = (req, res) => {
    res.render('home', {pageTitle: 'Home', videos})
}

export const getUpload = (req,res) => {
    res.render('upload', {pageTitle: 'Upload'})
}
export const postUpload = (req,res) => {
    const {
        body: {file, title, description}
    } = req
    // To do: upload and save video
    res.redirect(routes.videoDetail(324393))
}

export const videoDetail = (req,res) => res.render('videoDetail', {pageTitle: 'Video Detail'})
export const editVideo = (req,res) => res.render('editVideo', {pageTitle: 'Edit Video'})
export const deleteVideo = (req,res) => res.render('deleteVideo', {pageTitle: 'Delete Video'})
export const search = (req,res) => {
    const {
        query: {term: searchingBy}
    } = req
    //const searchingBy = req.query.term
    res.render('search', {pageTitle: 'Search', searchingBy, videos})
    //res.render('search', {pagetTitle: 'Search', searchingBy: searchingBy})
}

import axios from 'axios'

const instanse = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'https://gulzada-blog-7dbe5e5b2f88.herokuapp.com'
})

instanse.interceptors.request.use((config) => {
 config.headers.Authorization = window.localStorage.getItem('token')
 return config
})


// axios.get('')

export default instanse
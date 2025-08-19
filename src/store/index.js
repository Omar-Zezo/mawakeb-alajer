import {configureStore} from "@reduxjs/toolkit"
import langDetect from "./slices/translation/translation"
import settings from './slices/utils/settings'
import pages from './slices/aboutus/pages'
import page from './slices/aboutus/page'
import contactus from './slices/aboutus/contactus'
import services from './slices/services/services'
import service from './slices/services/service'
import seasonalProjects from './slices/seasonal projects/seasonalProjects'
import seasonalProject from './slices/seasonal projects/seasonalProject'
import news from './slices/media cnter/news'
import newsDetails from './slices/media cnter/newsDetails'
import photos from './slices/media cnter/photos'
import videos from './slices/media cnter/videos'
import home from './slices/Home/home'
import jobs from './slices/jobs/jobs'
import applyJob from './slices/jobs/applyJob'



const store = configureStore({
    reducer:{
        langDetect,
        settings,
        home,
        pages,
        page,
        services,
        service,
        seasonalProjects,
        seasonalProject,
        news,
        newsDetails,
        photos,
        videos,
        contactus,
        jobs,
        applyJob
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
    }),
})

export default store
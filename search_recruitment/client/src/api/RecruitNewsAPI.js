import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RecruitNewsAPI = () => {
    const [recruitNews, setRecruitNews] = useState([])

    const getRecruitNews = async () => {
        const res = await axios.get('/api/recruitNews')
        setRecruitNews(res.data.recruitNews)
    }

    useEffect(() => {
        getRecruitNews()
    }, [])

    return {
        recruitNews: [recruitNews, setRecruitNews]
    }

}

export default RecruitNewsAPI

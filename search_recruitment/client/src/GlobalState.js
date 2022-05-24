import React, { createContext, useEffect, useState } from 'react'
import RecruitmentNewsAPI from './api/RecruitNewsAPI'
import CategoriesAPI from './api/CategoriesAPI'
// import axios from 'axios'

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {

    // RecruitmentNewsAPI()

    const [token, setToken] = useState(false)

    // // useEffect(() => {
    // //     const firstLogin = localStorage.getItem('firstLogin')
    // //     if (firstLogin) {
    // //         const refreshToken = async () => {
    // //             const res = await axios.get('/user/refresh_token')

    // //             setToken(res.data.accesstoken)

    // //             setTimeout(() => {
    // //                 refreshToken()
    // //             }, 10 * 60 * 1000)
    // //         }
    // //         refreshToken()
    // //     }
    // // }, [])
    const state = {
        token: [token, setToken],
        recruitmentNewsAPI: RecruitmentNewsAPI(),
        categoriesAPI: CategoriesAPI()

    }
    //     // userAPI: UserAPI(token),
    //     // categoriesAPI: CategoriesAPI()
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
import "./myJobsCandidate.scss"
import React, { useContext } from 'react'
import { GlobalState } from "../../../GlobalState"
import SidebarCandidate from "../sidebarCandidate/SidebarCandidate"
import NavbarCandidate from "../NavbarCandidate/NavbarCandidate"

const MyJobsCandidate = () => {
    const state = useContext(GlobalState)

    const [recruitNews] = state.recruitmentNewsAPI.recruitNews
    console.log(recruitNews)
    return (
        <div className="homeMyJobs">
            <SidebarCandidate />
            <div className='homeMyJobsContainer'>
                <NavbarCandidate />
                <div className="PersonalPage">
                    <div className="personalContainer">
                        <div className="topPersonalPage">
                            <h1>Hồ sơ cá nhân</h1>
                        </div>
                        <div className="bottomPersonalPage">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyJobsCandidate
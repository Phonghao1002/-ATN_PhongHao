import "./sidebarCandidate.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkIcon from '@mui/icons-material/Work';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext'

const SidebarCandidate = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className="sidebarCandidate">
            <div className="topsidebarCandidate" >
                <Link to="/candidate" style={{ textDecoration: "none" }}>
                    <span className="logo">Candidate</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>

                    <Link to="/candidate" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountBoxIcon className="icon" />
                            <span>Hồ sơ cá nhân</span>
                        </li>
                    </Link>

                    <p className="title">LISTS</p>
                    <Link to="/candidate/changePassword" style={{ textDecoration: "none" }}>
                        <li>
                            <TrendingUpIcon className="icon" />
                            <span>Đổi mật khẩu</span>
                        </li>
                    </Link>
                    <Link to="/candidate/myJobs" style={{ textDecoration: "none" }}>
                        <li>
                            <WorkIcon className="icon" />
                            <span>Công việc của tôi</span>
                        </li>
                    </Link>
                    {/* <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li> */}
                    {/* <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li> */}
                    {/* <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li> */}
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>


                </ul>
            </div>
            <div className="bottomsidebarCandidate">
                <div className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}>
                </div>
                <div className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}>
                </div>
            </div>
        </div>
    )
}

export default SidebarCandidate
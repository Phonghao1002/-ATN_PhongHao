import "./header.scss"
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import WorkIcon from '@mui/icons-material/Work';
import PaidIcon from '@mui/icons-material/Paid';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Link } from "react-router-dom";
// import DateRangeIcon from '@mui/icons-material/DateRange';

const Header = ({ type }) => {
    return (
        <div className="header">
            <div className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
            }>
                <div className="headerList">
                    <div className="headerListItem active">
                        <WorkIcon />
                        <span>Jobs</span>
                    </div>
                    <div className="headerListItem">
                        <PeopleAltIcon />
                        <span>Interviews</span>
                    </div>
                    <div className="headerListItem">
                        <PaidIcon />
                        <span>Salary</span>
                    </div>
                    <div className="headerListItem">
                        <BusinessIcon />
                        <span>Companies</span>
                    </div>
                    <div className="headerListItem">
                        <FileOpenIcon />
                        <span>WowCV</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">
                            Việc làm CNTT - Phần mềm tại Đà Nẵng
                        </h1>
                        <p className="headerDesc">
                            Việc làm IT - Việc làm IT xịn dành cho Developer chất
                        </p>
                        <Link to="/register" style={{ textDecoration: "none" }}>
                            <button className="headerBtn">Sign in / Register</button>
                        </Link>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <span className="headerSearchText">Filters: </span>
                                <select className="lsOptioncbbox">
                                    <option>Tất cả loại hình công việc</option>
                                    <option>Nhân viên chính thức</option>
                                    <option>Nhân viên thời vụ</option>
                                    <option>Bán thời gian</option>
                                    <option>Làm thêm ngoài giờ</option>
                                    <option>Thực tập và dự án</option>
                                </select>
                            </div>
                            <div className="headerSearchItem">
                                <div className="headerSearchInput">
                                    <input type="text" className="headerSearchInput" placeholder="Nhập vị trí, Tên công ty, địa chỉ..."
                                    />
                                    <button className="headerBtn" >
                                        Search
                                    </button>
                                </div>
                            </div>

                            <div className="headerSearchItem">
                                <span className="headerSearchText">Ngành nghề: </span>
                                <select >
                                    <option>Lập trình ứng dụng điện thoại</option>
                                    <option>Kĩ sư phần mềm</option>
                                    <option>Thiết kế trò chơi điện tử</option>
                                    <option>Chuyên gia bảo mật</option>
                                    <option>Phân tích hệ thống máy tính</option>
                                    <option>Phát triển và thiết kế website</option>
                                    <option>Kỹ thuật viên thông tin y tế</option>
                                    <option>Quản lý công nghệ</option>
                                    <option>Quản trị cơ sở dữ liệu </option>
                                    <option>Quản trị mạng</option>
                                </select>
                            </div>
                        </div>
                    </>
                }


            </div>
        </div>
    )
}

export default Header

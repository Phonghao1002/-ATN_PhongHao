import "./list.scss"
import Sidebar from '../../components/adminManagement/sidebar/Sidebar'
import NavbarAdmin from '../../components/adminManagement/navbarAdmin/NavbarAdmin'
import Datatable from "../../components/adminManagement/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainerAdmin">
        <NavbarAdmin />
        <Datatable />
      </div>
    </div>
  )
}

export default List
import { Layout, Menu } from "antd";
import { sidebarItemGenerat } from "../../utils/SidebarItemGenerats";
import { AdminPaths } from "../../routes/Admin.routes";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = "admin";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerat(AdminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerat(AdminPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerat(AdminPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{ height: 32, margin: "16px", color: "#fff" }}>
        <h2>Ph University</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;

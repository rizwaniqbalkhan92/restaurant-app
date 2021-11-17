import logo from './logo.svg';
import './App.css';
import UserHeader   from './Components/User/UserHeader'
import UserHeaderLink from './Components/User/UserHeaderLinks'
import UserCards from './Components/User/UserCards';
import CreateProfile from './Components/User/CreateProfile';
import CreateProfileAdmin from './Components/Admin/CreateProfile';
import DashboardAdmin from './Components/Admin/DashboardAdmin';
import CreateProfileKitchen   from './Components/Kitchen/CreateProfileKitchen'
// import CreateProducts  from './Components/Admin/CreateProducts'
import KitchenRouting  from './Components/Kitchen/KitchenRouting'
import KitchenDashboard  from './Components/Kitchen/KitchenDashBord'
import UserNavbar from './Components/User/UserNavbar';
import Home from './Components/User/Home';
import UserSignIn from './Components/User/UserSignIn';
import UserSignUp from './Components/User/UserSignUp';
import AdminSignIn  from './Components/Admin/AdminSignIn'
import AdminSignUp  from './Components/Admin/AdminSignUp'
import KitchenSignIn  from './Components/Kitchen/KichenSignIn'
import KitchenSignUp from './Components/Kitchen/KitchenSignUp'
import MainRouting from './Components/Router/MainRouting';

function App() {
  return (
    <div className="App">
{/* <Home/> */}
{/* <AdminSignIn/> */}
{/* <AdminSignUp/> */}
{/* <KitchenSignIn/> */}
{/* <KitchenSignUp/> */}
{/* <UserSignUp/> */}
   {/* <CreateProfileKitchen/> */}
   {/* <CreateProfile/> */}
   {/* <CreateProfileAdmin/> */}
   {/* <DashboardAdmin/> */}
  {/* <CreateProducts/> */}
  {/* <KitchenRouting/> */}
  {/* <KitchenDashboard/> */}
  <MainRouting/>
  {/* <UserNavbar/> */}
    </div>
  );
}

export default App;

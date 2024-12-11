import './styles/mobile.css'
import './styles/desktop.css'
import Facilities from "./Components/Facilities";
import Footer from "./Components/Footer";
import LearningResources from "./Components/LearningResources";
import ImportantInformation from "./Components/ImportantInformation";
import WorkingWithBusinesses from "./Components/WorkingWithBusinesses";
import Courses from "./Components/Courses";
import CampusMap from "./Components/CampusMap";
import Welcome from './Components/Welcome';
import Image from 'next/image';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
const Home = () =>{

    return(
      <html>
  <body>
    <header>
<Header></Header>
<NavBar></NavBar>
    </header>
    <main>
<Courses></Courses>
<Facilities></Facilities>
<CampusMap></CampusMap>
<LearningResources></LearningResources>
<ImportantInformation></ImportantInformation>
<WorkingWithBusinesses></WorkingWithBusinesses> 
<Welcome></Welcome>
</main>
<Footer></Footer>
</body>
</html>

)
}
export default Home;

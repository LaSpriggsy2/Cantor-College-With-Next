import './styles/mobile.css'
import './styles/desktop.css'
import Facilities from "./Components/Facilities";
import Footer from "./Components/Footer";
import LearningResources from "./Components/LearningResources";
import ImportantInformation from "./Components/ImportantInformation";
import WorkingWithBusinesses from "./Components/WorkingWithBusinesses";
import Courses from "./Components/Courses";
import CampusMap from "./Components/CampusMap";
import Header from './Components/Header';
import Welcome from './Components/Welcome';
const Home = () =>{

    return(
      <html>
  <body>
<Header></Header>
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

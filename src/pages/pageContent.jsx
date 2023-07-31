import { Route, Routes} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Home from "./Routes/Home";
import Page2 from "./Routes/page2";
import PageBusiness from "./Routes/PageBusiness";
import Art from "./Routes/Arts";
import Page9 from "./Routes/BusinessAdult"
import Page10 from "./Routes/BusinessChildren"
import ArtsChildren from "./Routes/ArtsChildren";
import ArtsAdults from "./Routes/ArtAdults";
import JobPage from "./Routes/JobOpportunities";
import Page3 from "./Routes/page3";
import Page4 from "./Routes/page4";
import Contactus from "./Routes/Contactus";
import Position from "./Routes/Position"
import Aboutus from "./Routes/Aboutus"
import ListAdults from "./Routes/ListAdults"
import Job from "./Routes/Job";
import Seminars from "./Routes/Seminars";

const Nopage =() => {
  
    return(
      <div>
        <h3>
          404
        </h3>
      </div>
    )
  
  }
const PageContent = ()=>{
    return (
        <Grid  xs={12} sm={12} md={12} lg={12} xl={12}>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="*" element={ <Nopage/> }/>
                <Route path="Contactus" element={<Contactus />} />
                <Route path="page2" element={ <Page2/> }/>
                <Route path="Art" element={ <Art/> }/>
                <Route path="smallpage" element={ <PageBusiness/> }/>
                <Route path="page9" element={ <Page9/> }/>
                <Route path="page10" element={ <Page10/> }/>
                <Route path="artschildren"  element={<ArtsChildren />}/>
                <Route path="artsAdults"  element={<ArtsAdults/>}/>
                <Route path="JobOpportunities" element={<JobPage />} />
                <Route path="page3" element={<Page3 />} />
                <Route path="page4" element={<Page4 />} />
                <Route path="position" element={<Position />}/>
                <Route path="aboutus" element={<Aboutus />}/>
                <Route path="Job" element={<Job />} />
                <Route path="listadults" element={<ListAdults />}/>
                <Route path="seminars" element={<Seminars />}/>


            </Routes>
        </Grid>
    )
}
export default PageContent;
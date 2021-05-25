import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/Navbar";
import AboutContent from "./Components/AboutContent";
import ReviewSection from "./Components/ReviewSectionContent";
import CurriculumContent from "./Components/CurriculumContent";

function App() {
    return (
        <>
            <Navbar/>
            <AboutContent/>
            <CurriculumContent/>
            <ReviewSection/>

        </>

    );
}

export default App;

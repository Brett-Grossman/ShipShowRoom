import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jump from '../Images/Jump.jpg';
import Galaxy from '../Images/Galaxy.jpg'
import Reclaimer from '../Images/Reclaimer.jpg'
import Vanguard from '../Images/Vanguard.webp'
import Background from '../Images/Background.jpg';

const Home = () => {
    return (
<div className="container" style={{backgroundImage: `url(${Background})`}}>
    <div className="row">
        <Link to="/ship/industrial" className="col-md btn btn-secondary">Industrial Class Ships</Link>
        <Link to="/ship/fighter" className="col-md offset-md-2 btn btn-secondary">Fighter Class Ships</Link>
    </div>
    <div className="subcontainer">
        <h1>Welcome to the Ship Showroom</h1>
        <h1></h1>
        <p className="fs-2 text-light" style={{ borderBottom: '1px solid white' }}>This is a 
            home where interested citizens can come and view ships in certain categories
            to see if they are worth buying with in-game aUEC or with their hard earned cash.
            Currently all citizens can post their review on a ship they have used. As of this moment
            we are only shining a light on two major ship categories, Cargo and Fighter class vessels.
        </p>
        <div className="row" style={{ borderBottom: '1px solid white' }}>
            <div className="col-md-6">
                <img src={Jump} alt="890 Jump" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <img src={Galaxy} alt="Galaxy" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <img src={Reclaimer} alt="Reclaimer" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <img src={Vanguard} alt="Vanguard" className="img-fluid"/>
            </div>
        </div>
    </div>
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderCollapse: 'collapse' }}>
    <p className=" text-light">All of the content here belongs to and is tradmarked by RobertSpaceIndustries, The creators of StarCitizen.</p>
    <p className="text-light">This Application is purely fan-made</p>
    </div>
</div>
    );
};

export default Home;

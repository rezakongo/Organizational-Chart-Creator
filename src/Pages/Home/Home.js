import './Home.css';

function Home(){
    return(
        <div className="Home">
            <div className='Home_Left'>
                <h1>Organizational Chart Creator</h1>
            </div>
            <div className='Home_Right'>
                <h2>Select a Tool</h2>
                <div className='Homr_Right_Buttons'>
                    <a href='/OrgChart'><button className='Home_Button'>Organizational Chart</button></a>
                    <a href='/context_diagram'><button className='Home_Button'>Context Diagram</button></a>
                </div>
            </div>
        </div>
    );
}

export default Home
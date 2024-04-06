import './AboutUs';
import './AboutUs.css';



function AboutUs(){
    return(
    
        <section className='section-white'>
         <div class="container">
             <div class="row">
                 <div class="center col-md-12 right  " className='team'>
                    <h2 className='section-title' class='center'>
                       تیم مهندسی نرم افزار
                    </h2>
                    <p className='section-subtitle'>تیم ما در حوزه مهندسی نرم افزار در دانشگاه علم و صنعت ایران فعالیت می کند</p>
                   
                 </div>
                 <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>
                        <img src="download.jfif"className="team-img" alt='Dr parsa picture'></img>
                        <h3>دکتر سعید پارسا</h3>
                        <div className='team-info'>
                            <p>استاد</p>
                            <p>دکتر سعید پارسا دانشیار گروه نرم‌افزار دانشکده مهندسی کامپیوتر و مدیر آزمایشگاه تحقیقاتی مهندسی معکوس  در دانشگاه علم و صنعت ایران است. پژوهش‌های وی در زمینه‌های آزمون نرم‌افزار،مهندسی نرم‌افزار خودکار، کامپایلرهاو مهندسی معکوس نرم‌افزار است.</p>
                            <ul className='team-icon'>
                                <img src="211604_email_icon.png" alt="Email Icon" width="25" height="25" ></img>
                                <p className="email_icon">parsa@iust.ac.ir</p>
                                    
                                    
                                
                            </ul>
                        </div>
                        
                    </div>
                 </div>
                
                 <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>
                        <img src="photo_2024-03-17_23-02-47.jpg"className="team-img" alt="zahra's picture"></img>
                        <h3>زهرا دلجو</h3>
                        <div className='team-info'>
                            <p>دانشجوی مهندسی نرم افزار</p>
                            <p>      از دانشجویان کارشناسی ارشد  نرم افزار دانشگاه علم وصنعت ایران است. و در ازمایشگاه مهندسی معکوس فعالیت میکند          </p>
                            <ul className='team-icon'>
                                <img src="211604_email_icon.png" alt="Email Icon" width="25" height="25"></img>
                                <p>zahra.deljou79@gmail.com</p>
                                    
                                    
                                
                            </ul>
                            
                        </div>
                        
                    </div>
                 </div>
             
                 <div className='col-sm-6 col-md-4'>
                    <div className='team-item'>
                        <img src="photo_2024-03-17_23-03-59.jpg"className="team-img" alt='Dr parsa picture'></img>
                        <h3>پارسا کنگاوری</h3>
                        <div className='team-info'>
                            <p>دانشجوی مهندسی نرم افزار</p>
                            <p>از دانشجویان کارشناسی ارشد نرم  افزار دانشگاه علم وصنعت ایران است. و در حوزه بازی سازی و مهندسی نرم افزار فعالیت میکند </p>
                            <ul className='team-icon'>
                                <img src="211604_email_icon.png" alt="Email Icon" width="25" height="25"></img>
                                <p>rezakongo8@gmail.com</p>
                                    
                                    
                                
                            </ul>
                            
                        </div>
                        
                    </div>
                 </div>
                
             </div>
         </div>
        </section>
    );
}

export default AboutUs;

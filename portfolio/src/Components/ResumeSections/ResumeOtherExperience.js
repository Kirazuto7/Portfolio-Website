import Styles from '../../Styles/Resume.module.css';

function ResumeOtherExperience() {
    return(
        <section className={Styles.Section}>
            <h2 className={Styles.SectionLabel}>OTHER EXPERIENCE</h2>

            <div className={Styles.SubSections}>
                <div className={Styles.WorkSectionContainer}>
                <img className={Styles.WorkImage} src={"https://media.licdn.com/dms/image/C560BAQH1kOdUUbHZFg/company-logo_100_100/0/1652904850867/lifetimeinc_logo?e=1721865600&v=beta&t=G7CfuowDpRZ6Tl-GxKP3WOYaoz9LcRioqx76I4WLe8I"} alt='LifeTime Fitness'/>
                <section style={{width: '100%'}}>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>LifeTime Fitness</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Cafe Team Member</div> </div>
                        <div className={Styles.SectionDate}>Feb. 2024 - Apr. 2024</div>
                    </div>
                    <ul>
                        <li>Blend protein shakes and brew coffee for 300+ customers every shift.</li>
                        <li>Serve ordered food to customers and periodically wash dishes.</li>
                    </ul>
                </section>
                </div>

                <div className={Styles.WorkSectionContainer}>
                <img className={Styles.WorkImage} src={"https://static.wixstatic.com/media/3a8130_35d31c26166f408c929354d763ca3fdb~mv2.png/v1/crop/x_0,y_13,w_900,h_876/fill/w_598,h_582,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png"} alt="Gansevoort Liberty Market"/>
                <section style={{width: '100%'}}>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>Gansevoort Liberty Market</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Cashier/Barista</div> </div>
                        <div className={Styles.SectionDate}>Dec. 2021 - Apr. 2024</div>
                    </div>
                    <ul>
                        <li>Brew coffee and manage $500-$800 worth of transactions for 100+ customers everyday; bake 50+ pastries every morning.</li>
                        <li>Blend fresh juice and smoothies for 50+ customers; prepare 30+ sliced fruits and yogurts to sell for grab and go.</li>
                    </ul>
                </section>
                </div>

                <div className={Styles.WorkSectionContainer}>
                <img className={Styles.WorkImage} src={"https://media.licdn.com/dms/image/C560BAQGWXEWmNo5Dsw/company-logo_100_100/0/1631309018135?e=1721865600&v=beta&t=bY1SdrCvTvA3NsCF9ru1u-eBo_Q-Kh5l_JIPkpoT3BE"} alt="Duane Reade"/>
                <section style={{width: '100%'}}>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>Duane Reade</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Customer Service Clerk</div> </div>
                        <div className={Styles.SectionDate}>May 2016 - Jan. 2020</div>
                    </div>
                    <ul>
                        <li>Accomplished Customer Service Employee of the Month by making 100+ customers feel welcomed and offered assistance in finding items; increased customer satisfaction ratings by 15%.</li>
                    </ul>
                </section>
                </div>  
            </div>
        </section>
    )
}

export default ResumeOtherExperience;
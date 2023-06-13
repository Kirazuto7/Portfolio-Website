import Styles from '../../Styles/Resume.module.css';

function ResumeOtherExperience() {
    return(
        <section className={Styles.Section}>
            <h2 className={Styles.SectionLabel}>OTHER EXPERIENCE</h2>

            <div className={Styles.SubSections}>
                <section>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>Ganservoort Liberty Market</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Barista</div> </div>
                        <div className={Styles.SectionDate}>Dec.2021 - Present</div>
                    </div>
                    <ul>
                        <li>Brew coffee and manage $500-$800 worth of transactions for 100+ customers everyday; bake 50+ pastries every morning.</li>
                        <li>Blend fresh juice and smoothies for 50+ customers; prepare 30+ sliced fruits and yogurts to sell for grab and go.</li>
                    </ul>
                </section>

                <section>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>Duane Reade</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Customer Service Clerk</div> </div>
                        <div className={Styles.SectionDate}>May 2016 - Jan. 2020</div>
                    </div>
                    <ul>
                        <li>Accomplished Customer Service Employee of the Month by making 100+ customers feel welcomed and offered assistance in finding items; increased customer satisfaction ratings by 15%.</li>
                    </ul>
                </section>  
            </div>
        </section>
    )
}

export default ResumeOtherExperience;
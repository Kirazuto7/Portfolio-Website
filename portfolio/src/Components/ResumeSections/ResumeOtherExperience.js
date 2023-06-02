import Styles from '../../Styles/Resume.module.css';

function ResumeOtherExperience() {
    return(
        <section className={Styles.Section}>
            <div className={Styles.SectionLabel}>OTHER EXPERIENCE</div>

            <div className={Styles.SubSections}>
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
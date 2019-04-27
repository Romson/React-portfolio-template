import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img 
                                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png' 
                                alt='avatar'
                                style={{ height: '200px' }}                                
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Meester Lei-Kung</h2>
                        <h4 style={{ color: 'grey' }}>Front-End Developer</h4>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Hacker Way Menlo Park, 94025</p>
                        <p>(123) 456 7890</p>
                        <h5>Email</h5>
                        <p>myGmail@gmail.com</p>
                        <h5>Web</h5>
                        <p>website.com</p>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                    </Cell>
                    <Cell col={8} className='resume-right-col'>
                        <h2>Education</h2>
                        <Education 
                            startYear={2012}
                            endYear={2017}
                            schoolName={'Harvard University'}
                            schoolDescription={'At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.'}
                        />

                        <Education 
                            startYear={2002}
                            endYear={2007}
                            schoolName={'Princeton University'}
                            schoolDescription={'At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.'}
                        />

                        <hr style={{borderTop: '3px solid #E22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                            startYear={2012}
                            endYear={2017}
                            jobName={'First Job'}
                            jobDescription={'At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.'}
                        />

                        <Experience 
                            startYear={2016}
                            endYear='present'
                            jobName='Second Job'
                            jobDescription='At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.'
                        />

                        <hr style={{borderTop: '3px solid #E22947'}}/>

                        <h2>Skills</h2>
                        <Skills 
                            skill='Javascript'
                            progress={80}
                        />

                        <Skills 
                            skill='React'
                            progress={40}
                        />

                            <Skills 
                            skill='Node.js'
                            progress={60}
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
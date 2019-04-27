import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src='img/rtl.png'
                            alt='avatar'
                            className='avatar-img'
                        />

                        <div className='banner-text'>
                            <h1>Front-End Developer</h1>
                            <hr/>
                            <p>
                            HTML5 | CSS3 | Bootstrap | Javascript | React | Node.js | Express | SQL | MongoDB
                            </p>
                            
                            <div className='social-links'>

                                {/* LinkedIn */}
                                <a href='https://www.linkedin.com/in/romerolijkwan/' target='_blank' rel='noopener noreferrer'>
                                <i class="fab fa-linkedin" aria-hidden='true'></i>
                                </a>                            

                                {/* Github */}                            
                                <a href='https://github.com/Romson' target='_blank' rel='noopener noreferrer'>
                                <i class="fab fa-github-square" aria-hidden='true'></i>
                                </a>
                          

                                {/* Freecodecamp */}
                                <a href='https://www.freecodecamp.org/romson' target='_blank' rel='noopener noreferrer'>
                                <i class="fab fa-free-code-camp" aria-hidden='true'></i>
                                </a>

                                {/* WhatsApp */}
                                <a href='https://github.com/Romson' target='_blank' rel='noopener noreferrer'>
                                <i class="fab fa-whatsapp-square" aria-hidden='true'></i>
                                </a>

                            </div>                          

                        </div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default Landing;
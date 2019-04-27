import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>

                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Meester Lei-Kung</h2>
                        <img 
                            src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png' 
                            alt='avatar' 
                            style={{ height: '250px' }}

                        />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className='contact-list'>
                            <List>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i class="fas fa-phone-square" aria-hidden='true'> </i> 
                                        (123) 456 7890
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i class="fas fa-envelope" aria-hidden='true'></i>
                                        emailaddress@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i class="fab fa-skype" aria-hidden='true'></i>
                                        MySkypeID
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>

                </Grid>

            </div>
        );
    }
}

export default Contact;
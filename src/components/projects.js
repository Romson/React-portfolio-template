import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'; 

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        return (this.state.activeTab === 0) ?

            <Grid className="demo-grid-1">

                {/* Project1 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover' }}>
                            React project #1
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project2 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover' }}>
                            React project #2
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project3 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover' }}>
                            React project #3
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

            </Grid>

        : (this.state.activeTab === 1) ? 
        
            <Grid className="demo-grid-1">

                {/* Project1 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(https://gearedapp.co.uk/wp-content/uploads/2019/02/gatsby.svg) center / cover' }}>
                            Gatsby project #1
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project2 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(https://gearedapp.co.uk/wp-content/uploads/2019/02/gatsby.svg) center / cover' }}>
                            Gatsby project #2
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project3 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(https://gearedapp.co.uk/wp-content/uploads/2019/02/gatsby.svg) center / cover' }}>
                            Gatsby project #3
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

            </Grid>


        : (this.state.activeTab === 2) ?

            <Grid className="demo-grid-1">

                {/* Project1 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover' }}>
                            Javascript project #1
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project2 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover' }}>
                            Javascript project #2
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project3 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*H-25KB7EbSHjv70HXrdl6w.png) center / cover' }}>
                            Javascript project #3
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

            </Grid>





        : 
        
        <Grid className="demo-grid-1">

                {/* Project1 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(http://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png) center / cover' }}>
                            Node.js project #1
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project2 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(http://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png) center / cover' }}>
                            Node.js project #2
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

                {/* Project3 */}
                <Cell col={4}>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#696969', height: '176px', background: 'url(http://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png) center / cover' }}>
                            Node.js project #3
                        </CardTitle>
                        <CardText>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </Cell>

            </Grid>

    }
    
    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Gatsby</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Node.js</Tab>
                </Tabs>

                <section className='projects-grid'>
                    <Grid className='projects-grid'>
                        <Cell col={12}>
                            <div className='content'>
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        );
    }
}

export default Projects;
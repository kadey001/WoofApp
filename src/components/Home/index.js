import React from 'react'
import { withAuthorization } from '../Session';

import { Button, Icon, Grid, Image, Rating, Container, Segment, SegmentGroup } from 'semantic-ui-react'

const Home = () => (
  <Grid color>
    <Grid.Row columns={1} textAlign ='center'>
      <Grid.Column>
        <h1>Home</h1>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Segment.Group>
          <Segment color = 'olive' size= 'massive'>Basic Info</Segment>
          <Segment.Group inverted color = 'teal'>
            <Segment color='teal'>Breed: German Shepard</Segment>
            <Segment color='teal'>Gender: Female</Segment>
            <Segment color='teal'>Loud?: No</Segment>
            <Segment color='teal'>Age: 5</Segment>
            <Segment color='teal'>Owner: Brian Mai</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column>
      <Image src= {require("./test_images/dog3.jpeg")} alt="Dog" size= "massive"/>
      </Grid.Column>
      <Grid.Column>
        <Segment.Group>
        <Segment color = 'olive' size= 'massive'>Description</Segment>
          <Segment.Group>
          <Segment color = 'teal'>Hello my dog Bob the builder is looking for a very, very fun playdate mate. He lovesssss all types of dogs and I also hope to meet more dog lovers out there like me!</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Segment.Group>
        <Segment size= 'massive' color= 'olive'>User Reviews</Segment>
          <Segment.Group>
            <Segment color= 'blue'>This dog bit my toe</Segment>
            <Segment color= 'blue'>This dog reminded me why I live life</Segment>
            <Segment color= 'blue'>The only thing this dog is not better than is Twice Mina</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Segment size= 'massive' color= 'olive'>BOB THE BUILDER</Segment>
        <Segment color='red'>User Rating: <Rating icon='heart' defaultRating={4} maxRating={5} disabled size='massive'></Rating></Segment>
        <Button.Group>
          <Button attached='left' color='green'>
            <Image src= {require("./test_images/dogpaw.png")} alt="Dog" size= "small"/>
          </Button>
          <Button attatched='right' color='red'>
            <Image src= {require("./test_images/Claw_Marks.png")} alt="Dog" size= "small"/>
          </Button>
        </Button.Group>
      </Grid.Column>
      <Grid.Column>
        <Segment.Group>
        <Segment size= 'massive' color= 'olive'>Past Dates</Segment>
          <Segment.Group>
            <Segment color= 'blue'>DogWithAHog</Segment>
            <Segment color= 'blue'>420XX_KingBlazeItWarrior_69</Segment>
            <Segment color= 'blue'>Bob</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid> 
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
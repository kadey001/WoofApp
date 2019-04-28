import React from 'react'
import { withAuthorization } from '../Session';

import { Button, Icon, Grid, Image, Rating, Container, Segment, SegmentGroup } from 'semantic-ui-react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';




var counter = 0;
var picture = require("./test_images/dog1.jpeg");
var name = "SoulWoof"
var ratings = 1;
var description = "Hello my dog Soulwoof is looking for a very, very fun playdate mate. He lovesssss all types of dogs and I also hope to meet more dog lovers out there like me!";
var Review1 = "The only thing this dog is not better than is Twice Mina"
var Review2 = "This dog reminded me why I live life"
var Review3 = "This dog bit my toe"
var Date1 = 'Google'
var Date2 = 'Amazon'
var Date3 = 'Github'
var Info1 = 'German Shepard'
var Info2 = 'Female'
var Info3 = 'No'
var Info4 = '5'
var Info5 = 'Brian Mai'
var myPictures = [
  "./test_images/dog2.jpeg",
  "./test_images/dog3.jpeg",
  "./test_images/dog4.jpeg",
  "./test_images/dog5.jpeg"
];

var myRatings = [
  4,
  2,
  3,
  5
];

var myDescriptions = [
  "Did you know you can 100 dollars worth of Google Cloud Services?",
  "To be honest I just use this site because Tinder does not work for me",
  "ORGANICALLY RAISED DOGS ONLY",
  "Here are the spoilers for endgame: *****************************"
];
var myNames = [
  "Brian",
  "Kelton",
  "Eric",
  "Tin",
];

var myReviews = [
  "He peed on me", 
  "Will not run away like my ex-girlfriend did", 
  "Ate my homework",
  "CITRUS",
];
var myReviews2= [
  "He can speak Japanese",
  "Will sit down for snacks",
  "Ate my ex-girlfriend",
  "HACK",
];
var myReviews3= [
  "Cuddles better than my girlfriend",
  "Is a snack",
  "Ate my excellent food here at Citrus Hack 2019",
  "2019"
];

var myDates = [
  "I", 
  "Bob", 
  "Eric",
  "IS",
];
var myDates2= [
  "FANCY",
  "Bobb",
  "Brian",
  "THE",
];
var myDates3= [
  "YOU",
  "Bbob",
  "Kelton",
  "BEST"
];

var myInfo = [
  "Somewhat Human", 
  "He does", 
  "*Monkey Sounds*",
  "God",
];
var myInfo2= [
  "Male most likely",
  "Male",
  "Still don't know",
  "God's don't have genders",
];
var myInfo3= [
  ";)",
  "Sometimes",
  "Most definitely",
  "Sure"
];

var myInfo4 = [
  "21", 
  "10", 
  "10000000",
  "18",
];
var myInfo5= [
  "Jae from Day6",
  "Literally carried us the entire project",
  "Is Single",
  "Won the smash tournament here",
];

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
            <Segment color='teal'>Breed: {Info1}</Segment>
            <Segment color='teal'>Gender: {Info2}</Segment>
            <Segment color='teal'>Loud?: {Info3}</Segment>
            <Segment color='teal'>Age: {Info4}</Segment>
            <Segment color='teal'>Owner: {Info5}</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column>
        <Image src= {picture} alt="Dog" size= "massive"/>
      </Grid.Column>
      <Grid.Column>
        <Segment.Group>
        <Segment color = 'olive' size= 'massive'>Description</Segment>
          <Segment.Group>
          <Segment color = 'teal'>{description}</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Segment.Group>
        <Segment size= 'massive' color= 'olive'>User Reviews</Segment>
          <Segment.Group>
            <Segment color= 'blue'>{Review1}</Segment>
            <Segment color= 'blue'>{Review2}</Segment>
            <Segment color= 'blue'>{Review3}</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Segment size= 'massive' color= 'olive'>{name}</Segment>
        <Segment color='red'>User Rating: <Rating icon='heart' rating={ratings} maxRating={5} disabled size='massive'></Rating></Segment>
        <Button.Group>
          <Button attached='left' color='green' onClick ={nextPic}>
          <Link to={ROUTES.HOME}>
            <Image src= {require("./test_images/dogpaw.png")} alt="Dog" size= "small"/>
          </Link>
          </Button>
          <Button attatched='right' color='red' onClick ={nextPic}>
            <Link to={ROUTES.HOME}>
            <Image src= {require("./test_images/Claw_Marks.png")} alt="Dog" size= "small"/>
            </Link>
          </Button>
        </Button.Group>
      </Grid.Column>
      <Grid.Column>
        <Segment.Group>
        <Segment size= 'massive' color= 'olive'>Past Dates</Segment>
          <Segment.Group>
            <Segment color= 'blue'>{Date1}</Segment>
            <Segment color= 'blue'>{Date2}</Segment>
            <Segment color= 'blue'>{Date3}</Segment>
          </Segment.Group>
        </Segment.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid> 
);
function nextPic(){
  if (counter > myPictures.length - 1){
    counter = 0;
  }
  picture= require("./test_images/dog".concat('', (counter + 2).toString().concat('', ".jpeg")));
  name = myNames[counter];
  ratings= myRatings[counter];
  description= myDescriptions[counter];
  Review1= myReviews[counter];
  Review2= myReviews2[counter];
  Review3= myReviews3[counter];
  Date1= myDates[counter];
  Date2= myDates2[counter];
  Date3= myDates3[counter];
  Info1 = myInfo[counter]
  Info2 = myInfo2[counter]
  Info3 = myInfo3[counter]
  Info4 = myInfo4[counter]
  Info5 = myInfo5[counter]
  counter += 1;
}



  

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
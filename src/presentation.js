// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Code,
  Deck,
  Heading,
  Image,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Provisioning Your Way to a Successful Hack
          </Heading>
        </Slide>
        
        {/* About me */}
        <Slide transition={["fade"]} bgColor="tertiary">
            <Text size={2} textColor="secondary">Robbie McKinstry</Text>
            <Text size={2} textColor="secondary">HashiCorp</Text>
            <Text size={2} textColor="secondary">robbie@hashicorp.com</Text>
            <Text size={2} textColor="secondary">Pitt CS Class of 2017</Text>
        </Slide>

        {/* Define Provisioning */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            define pro·vi·sion :
          </Heading>
            <Text size={2} textColor="secondary">
                the act of obtaining or preparing resources prior to use
            </Text>
        </Slide>

        {/* Simplest Case */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Simplest case:
          </Heading>
        </Slide>

        {/* When you ship your app */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            When you ship your app
          </Heading>
        </Slide>

        {/* Define Provisioning */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            define ship :
          </Heading>
          <Text size={2} textColor="secondary">
             the act of deploying your app to a public, live machine 
          </Text>
        </Slide>
 
        {/* But we'll get to that */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Hold your horses
          </Heading>
        </Slide>
 
        {/* Lets do something simple first */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            First things first
          </Heading>
        </Slide>

        {/* Let's Set up a repository:
            This is the kind of thing you'd do right at the start of a hackathon
        */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            <Code lang={"bash"}>git init</Code>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            define re·pos·i·to·ry 
          </Heading>
          <Text size={2} textColor="secondary">
             a remote storage volume for saving your source code, usually also saving the history of all changes to the source code
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            <iframe title={"mailtime"} src="https://giphy.com/embed/aGCDmZpfiVhPG" width="1080" height="608" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            <iframe title="smash" src="https://giphy.com/embed/xUOwG40nnyMTra0Xte" width="1080" height="608" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
            <Image src="github.jpg" fit fill />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary" caps>
            Automation!
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            Why automate what could be UI?
          </Heading>
        </Slide>

        {/* Useful when projects scale, namely in people */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            Scale
          </Heading>
         </Slide>

        {/* Organization Scale is how well you deal with your teams/departments/organization 
            changing size 
        */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            define or·gan·i·za·tion·al scale
          </Heading>
          <Text size={2} textColor="secondary">
             how well your organization deals with teams/departments/organization changing size
          </Text>
         </Slide>
      </Deck>
    );
  }
}

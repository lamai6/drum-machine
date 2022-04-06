# Front End Development Certification (FreeCodeCamp) - Exam 3/5

## Explanation

I have to create 5 projects in order to earn the Front End Development certification delivered by FreeCodeCamp. This repository is the third one : Drum Machine. I used [my own React boilerplate](https://github.com/lamai6/react-app-starter) to start creating this application. You can [run it](https://github.com/lamai6/drum-machine#quick-start), [view the demo](https://lamai6.github.io/drum-machine) or [read the specifications](https://github.com/lamai6/drum-machine#specifications) the app must meet.

## Quick start

1. Make sure that you have Node.js v12 and npm v5 or above installed
2. Clone this repo using git clone: `git clone git@github.com:lamai6/drum-machine.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`
4. Run `npm install` in order to install dependencies
5. At this point you can run `npm start` to see the React app at http://localhost:8080

## Specifications

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/MJyNMd.

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks.

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

## Exam validation

To ensure this project meets the specifications, FreeCodeCamp has a script that automatically run its own tests. You can run these tests following these steps:
- start the app or go to the project [demo](https://lamai6.github.io/drum-machine)
- click on the side menu at the top left of the page
- select the "Drum Machine" project from the drop-down menu
- click on "Run Tests" button
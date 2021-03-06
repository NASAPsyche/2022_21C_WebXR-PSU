# Project Description
With the launch of NASA’s Psyche mission coming up in August of 2022, the organization is looking for
ways to increase public awareness of this mission to the asteroid of the same name. They are looking
for an interactive AR (Augmented Reality) or VR (Virtual Reality) experience to display in museums
across the United States. The AR or VR functionality will be handled using the WebXR API.

Our objective for this project was to create an interactive museum experience with the purpose of
informing the public of the upcoming mission to Psyche. We decided to create a web-based, interactive
3D model of the solar system that displays facts about the mission to museum visitors when planets are
clicked.

# Team Members and University
Joshua Devinney
Donovan Myers
Alexander Reams
David Yakupkovic

Penn State Erie, The Behrend College

# Project Images

![Main Page](Images/Screen1.JPG)
![Fact Card](Images/Screen2.JPG)
![AR_View](Images/Screen3.jpg)

# Platform Requirements 

The platform that the system is deployed from needs to have an IDE with Node.js Node Package Manager (npm) installed or a terminal that can use npm commands. The platform also needs to have the ability to push to GitHub if the current deployment needs updated to a new version. The building process of the “Senior Design” package requires Vite.js and three.js to be installed via npm. The platform also needs to have the “Senior Design” package downloaded. Deployment is done via Netlify and GitHub which is handled remotely and does not affect the platform requirements. 

# Installation 

This system will be deployed by Arizona State University using their own methods after the software is handed over. The following are instructions for deploying the site during the development and presentation of the software prior to the handoff. 

# Libraries 

Three.js and Vite.js need to be installed via Node Package Manager (npm) to build project 

# Hosting via Netlify and GitHub 

1. Load the “Senior Design” package into an IDE with a terminal or Node.js compatible terminal. 

2. In the terminal type “npm run build” and hit “enter” to begin the rollup process to prepare the project for distribution. 

3. Wait for the rollup to complete and generate the “/dist” directory. 

4. Copy the “/Resources” folder into the “/dist” directory. 

5. Commit these files using the green checkmark on the top right of WebStorm. 

6. On the commit panel make sure all files are checked and click “Commit and Push” then “Commit and Push anyway”. 

7. On the pop-up window click “Push”. 

8. Now that the distribution folder is built and pushed to GitHub it does not need to be redone unless changes are made to the source code and from here navigate to https://app.netlify.com. 

9. Log in to the site and click on “Sites” on the top bar. 

10. Click on the “webxrpsu” site. 

11. Click on “Site settings”. 

12. Click the “Build & deploy” dropdown. 

13. Scroll down to the “Build Settings” section. 

14. Click “Edit settings” and set the Base directory section to “/SeniorDesign/dist” to point towards the Distribution folder. 

15. Click “Save”. 

16. Scroll further to the “Branches” section. 

17. Click “Edit settings” and set the production branch to “main”. 

18. Click “Save”. 

19. Scroll back to the top of the page and click “Deploys” on the top bar. 

20. Click the “Trigger deploy” drop down and select “Deploy site”. 

21. Wait for the Deploy log to display “Finished processing build request”. 

22. Check to ensure that the site is live on https://webxrpsu.netlify.app 

# Hosting via Netlify without GitHub 

1. Load the “Senior Design” package into an IDE with a terminal or Node.js compatible terminal. 

2. In the terminal type “npm run build” and hit “enter” to begin the rollup process to prepare the project for distribution. 

3. Wait for the rollup to complete and generate the “/dist” directory. 

4. Copy the “/Resources” folder into the “/dist” directory. 

5. Navigate to https://app.netlify.com/drop 

6. Drag and drop the /dist directory to the center of the page 

7. Netlify will automatically deploy and generate a link to the site using the built files

# Tools Used
- Languages
  - HTML
  - CSS
  - Javascript
- Frameworks
  - Three.js
  - WebXR API
- IDEs and External Tools
  - Webstorm IDE
  - Netlify
  - Vite.js

# Known Issues
Expanding the system can be done easily via simply adding new planets with more fact cards and image locations.  To do this, one must first create a new Planet object.  This must be passed several values including: planet radius, number of width and height segments of the geometry, x, y, and z coordinates for the planet’s position, and a material to apply to the geometry to create a full mesh object.  Once this new planet object has been made, we can add the planet object to the list of planets with the built-in. set() HashMap function, passing in the new planet object as a value and the name of the new planet as the key. After this the planet can be added to the scene by simply passing planets.get(PlanetName).getMesh() into the scene.add() function and the planet will appear in 3D space. Retrieving the planet and calling the initializeFactCards() function while passing in a list of facts and a list of their associated image locations will create the new fact cards for the planet.  The user can then run the system and get it working as shown above.  Once the user has the system up and running, the user can tap on the new plant’s solar body or label and see the new fact cards with their images.
For further implementation and refinement of the system, utilizing the initializeFactCards() function by passing in a file and reading from that file could make the system significantly more efficient.  This reduces the need for hard-coded variables storing O(n) data for the text and O(n) data for the image links.  Passing in a file path decreases the size complexity and allows for more generalization of the system.

# System Demo and Explanation of Features

https://youtu.be/AxZn2xpoZ5s

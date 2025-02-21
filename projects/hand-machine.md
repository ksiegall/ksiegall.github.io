---
title: The Hand Machine
slug: hand-machine
cover: "/assets/hand-machine/hand_machine.jpg"
excerpt: A hand gesture controlled claw machine. Made for GoatHACKS 2025. 
roles: Team Member
color: "#320032"
tags:
  - ["Python", "#f89820"]
  - ["Computer Vision", "#18aaaa"]
  - ["Microcontroller", "#c51a4a"]
  - ["Git", "#24292e"]
  - ["CAD", "#da291c"]
featured: true
priority: 3
type: Robot
type_icon: Linux
team_size: 3
status: Completed Jan 19, 2025
timeline: Jan 17th - 19th, 2025
media:
  - ["/assets/hand-machine/hand_machine.jpg", "Our hand gesture-controlled claw machine, built using 3d printer parts"]
  - ["https://www.youtube.com/embed/0YpibTBLqx0", "A video demo of the Hand Machine working"]
  - ["/assets/hand-machine/team.jpg", "That's Us! We're the team who wins!"]
  # - ["/assets/hand-machine/another_view.jpg", "Another view of the hand machine"]
  - ["/assets/hand-machine/another_another_view.jpg", "Another view of the hand machine"]
  - ["/assets/hand-machine/guts.jpg", "The guts of the hand machine"]
links:
  - ["Website", "https://devpost.com/software/hand-machine"]

---

### Inspiration

This project was inspired by Michael Reeves's _["Surgery Robot"](https://youtu.be/A_BlNA7bBxo?si=mZPmg3_MIDPBBQco)_, which uses a VR camera to track a "surgeon's" hand in 3d space, and controls a gantry with a knife on it.

This, combined with Cam having access to a collection of 3D printer parts from a disassembled Taz, gave us a starting direction from which we found our vision for the Hand Machine.
What it does

Utilizing Google's Mediapipe ML/CV Framework, we track the player's hand with a camera+raspberry pi, and break it down into landmarks. _[(see here)](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker)_ From there, we process this information, sending the centroid of the hand (relative to camera), as well as some gesture information (if the player has a closed fist) over serial to an Arduino, which controls the stepper motors and tracks the motion.

### How we built it

Cam had parts for a LulzBot 3d printer, which we borrowed and reconfigured to create our claw machine. Kay brought in a Raspberry Pi 4b to run the CV model on. We mostly worked in the Makerspace, so we utilized our access to the laser cutters in the Prototyping Lab to create the parts we needed.

### Challenges we ran into

Our team knew we were quite busy on Sunday, and didn't want to be forced into pulling an all-nighter to finish this project. As such, everything had to be constructed with parts we had lying around (plus materials purchased through the Makerspace for the laser cutter). This project would not have been possible without the 3D Printer hardware that we had access to.

The camera we use has a very heavy fish-eye lens. Its field of view is massive, and that made controlling the machine with your hand quite tedious (because the play area was effectively a dome). We solved this by cropping the camera's field of view (so the FoV is still a dome, but you don't need to get nearly as close to the camera to go the the extremes)

### Accomplishments that we're proud of

Setting up the computer vision pipeline went really smooth. Google's Mediapipe framework had a pretrained model for hand+landmark detection, so the code was "simple" to write. From there, the process layer running on the Raspberry Pi wasn't too terrible to write (we iterate through the hand landmarks to identify which of the players fingers are pointing upwards, which we use to determine if their hand is closed).

In the meantime, we were working on the stepper motor control. Our stepper drivers have speed control, and we implemented an acceleration layer in order to have smooth position control. This is controlled through an Arduino clone, which receives control commands through Serial from the Raspberry Pi.

### What we learned

From this project, we learned a lot about the design of gantries, how to make sure they are squared and level, and how to tune and optimize their performance. We also learned about camera lens distortion, and how smaller cameras utilize them to get a much larger field of view, as well as how to apply small corrective measures to improve the quality of life of the end user.

### What's next for Hand Machine

Future plans for the project include improving the vision system to allow for full 3D control of the gantry, likely by using the size of the hand as a depth estimator.

We also would like to add more quality of life / fun features, such as a laser indicator for the gantry, and a buzzer or speaker to play music.

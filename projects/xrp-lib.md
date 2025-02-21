---
title: XRPLib - eXperiential Robotics Platform
slug: xrp-lib
cover: "/assets/xrp/xrplib-cover-icon.jpg"
excerpt: A simple and intuitive robot control library used for education.
roles: Lead Software Engineer
color: "#320032"
tags:
  - ["Project Management", "#32a852"]
  - ["Python", "#f89820"]
  - ["Microcontrollers", "#C51A4A"]
  - ["Git", "#24292e"]
featured: true
priority: 1
type: Robot
type_icon: Linux
team_size: 5
status: Ongoing
timeline: Aug 2022 - Present
media:
  - ["/assets/xrp/xrplib-cover-icon.jpg", "The robot arm in home position, out of the way of the camera."]
links:
  - ["Website", "https://open-stem.github.io/XRP_MicroPython/"]
  - ["Github","https://github.com/Open-STEM/XRP_MicroPython"]

---


## Description
Between the August of 2022 and the March of 2024, I had the pleasure of working on the beta for the Xperiential Robotics Platform (XRP). The XRP Robot is a low-cost robots kit _[($65 for educators, $115 for hobbyists)](https://www.sparkfun.com/products/22230)_
designed predominantly for classroom use. This robot is equipped with a Raspberry Pi Pico, and can be programmed in C/C++, _[MicroPython](https://micropython.org/)_, and even _[Java, using the WPILib integration](https://docs.wpilib.org/en/stable/docs/xrp-robot/index.html)_. I was the software lead for the MicroPython library, which is the main one used in classrooms.

### Methodology
With the goal of making this library intuitive, the first thing we did is draft up the class structure. This was done informally and on paper, but above is a recreation of this as a UML diagram. We decided early that composition was preferable to inheritance, so an EncodedMotor contains both an Encoder and a Motor, instead of EncodedMotor being a type of Motor with bonus encoder functionality. From there, it was just a matter of replicating this thought process all the way down the line. This resulted in a Drivetrain class, which contains both the left and right drive motors, as well as the Inertial Measurement Unit (IMU). The advantage of a structure like this, especially early on when hardware components were not set in stone, was that we could swap out implementations for motors, encoders, and the IMU, all with minimal changes to the library.

Once we decided on the path forwards with object structure within XRPLib, and discussed the most intuitive behavior for each component, we began on implementation. From one of the Unified Robotics classes at WPI, I knew we could track encoder positions using an Interrupt Service Routine (ISR). MicroPython makes the implementation for this pretty easy, so I set that up and get a very basic driving program to run. It sucks. It turns out, a big drawback of a language like Python is that, as an interpreted language, code execution is not fast. As such, the multitude of interrupts resulting from normal driving speeds were eating up a large amount of time, making my robot stop later than it should have, and overall having a large amount of variance between what should have been evenly spaced prints. 

It turns out, the Raspberry Pi Pico had our solution. The _[rp2040 processor](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040)_ on the Pico has assembly level state machines (PIOs) that can be used to process basic io operations. We could use this to track the two encoder pins and increment the encoder position accordingly, which reduces the execution time of this loop to effectively nothing, as the PIO was not directly connected to the CPU, and would run perfectly synchronously for up to four motors. Unfortunately, that is not the last we'd hear of interrupts causing performance issues.

I wrote a _[Proportional-Integral-Derivative (PID) controller](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller)_ for controlling the position and speed of the motors as they drive. I moved this controller into a new class (`pid.py`) to be used anywhere I wanted, as the backing math is not implementation-specific. However, to effectively control the speed of the motors, timer-based interrupts are a critical feature. This time, lukily, I could control the rate that they get called, so I set the rate to 50Hz, which was unobtrusive.

After finishing the drivetrain implementation, I turned to focus on sensors. The XRP Robot ships with 4 sensors: An Ultrasonic Distance Sensor, Two Reflectance Sensors (which allow the robot to follow a line), and an IMU (which contains an accelerometer and a gyroscope). I had worked with all of these sensors before, but only in C++, and through other libraries or codebases that already had the communication with these sensors written. Thankfully, I'm a quick learner (and had access to the C++ versions of the code for the ultrasonic and gyroscope). 

The IMU required me to learn how to implement I2C communication in order to talk to it, and once I did I needed to implement functionality for all of the register read/writes necessary to configure it the way I wanted. Trying to package the library to keep the code readable and beginner friendly has been quite a challenge, but the solution we landed on (me, in conjunction with an engineer from Sparkfun) with was to split imu.py into two files, one for constants and register-bindings, and one for the actual IMU class.


### In Hindsight (Nov 2024 Retrospective)
When I started this project, the goal was to make a library that worked pretty quickly, such that we could start using an Agile structure with good git practices. As such, we started making the Micropython library using MicroPython, instead of utilizing the underlying C code to obtain better execution times. This caused some issues later, particularly when it came to interrupts, where fast execution times are essential to not disrupting performance in other segments of the code. Unfortunately, by the time I stopped leading this part of the project, a C-based implementation of XRPLib still had not been started. I may, at some point, return to the project to push for this better implementation.


### Going Forward (Updates Feb 2025)
I started working on XRPLib again in January 2025. The project was readying to move out of Beta, planned to begin production mid February. There was a new control board, powered by the new _[rp2350 processor](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2350)_, with new motor drivers and features not present on the Beta. There were issues I wanted to fix from the previous iteration of XRPLib, but more importantly was the new design challenge: How to add new features, while keeping all prior user code identical in functionality, while keeping one library that worked on both versions of the XRP Control Board.
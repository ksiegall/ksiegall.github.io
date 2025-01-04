---
title: XRPLib Beta - Xperiential Robotics Platform
slug: xrp-lib
cover: "/assets/xrp/xrplib-cover-icon.jpg"
excerpt: A simple and intuitive robot control library used for education.
roles: Lead Software Engineer
color: "#320032"
tags:
  - ["Project Management", "#00FF00"]
  - ["Python", "#f89820"]
  - ["Microcontrollers", "#C51A4A"]
  - ["Git", "#24292e"]
featured: true
priority: 1
type: Robot
type_icon: Linux
team_size: 5
status: Ongoing
timeline: Aug 2022 - Mar 2024
media:
  - ["/assets/xrp/xrplib-cover-icon.jpg", "The robot arm in home position, out of the way of the camera."]
  # - ["/assets/rbe3001/rbe3001-live-track.jpg", "The robot arm live tracking the position of the ball"]
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

It turns out, the Raspberry Pi Pico had our solution. The _[rp2040 processor](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html)_ on the Pico has assembly level state machines (PIOs) that can be used to process basic io operations. We could use this to track the two encoder pins and increment the encoder position accordingly, which reduces the execution time of this loop to effectively nothing, as the PIO was not directly connected to the CPU, and would run perfectly synchronously for up to four motors. Unfortunately, that is not the last we'd hear of interrupts causing performance issues.

I wrote a _[Proportional-Integral-Derivative (PID) controller](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller)_ for controlling the position and speed of the motors as they drive. I moved this controller into a new class (`pid.py`) to be used anywhere I wanted, as the backing math is not implementation-specific. However, to effectively control the speed of the motors, timer-based interrupts are a critical feature. This time, lukily, I could control the rate that they get called, so I set the rate to 50Hz, which was unobtrusive.

After finishing the drivetrain implementation, I turned to focus on sensors. The XRP Robot ships with 4 sensors: An Ultrasonic Distance Sensor, Two Reflectance Sensors (which allow the robot to follow a line), and an IMU (which contains an accelerometer and a gyroscope).


### In Hindsight
When I started this project, the goal was to make a library that worked pretty quickly, such that we could start using an Agile structure with good git practices. As such, we started making the Micropython library using MicroPython, instead of utilizing the underlying C code to obtain better execution times. This caused some issues later, particularly when it came to interrupts, where fast execution times are essential to not disrupting performance in other segments of the code. Unfortunately, by the time I stopped leading this part of the project, a C-based implementation of XRPLib still had not been started. I may, at some point, return to the project to push for this better implementation.


---
title: Terrawarden Drone Cleanup
slug: wpi-mqp-terrawarden
cover: "/assets/mqp/drone_thumbnail.jpg"
excerpt: An aerial manipulator designed to detect, navigate to, and dispose of garbage.
roles: Programmer
color: "#320032"
tags:
  - ["Python", "#f89820"]
  - ["Computer Vision", "#18aaaa"]
  - ["Deep Learning","#1818aa"]
  - ["Git", "#24292e"]
featured: true
priority: 2
type: Drone
type_icon: Linux
team_size: 6
status: May 2025
timeline: Aug 2024 - May 2025
media:
  - ["https://www.youtube.com/embed/JgRSZfa9o8A", ""]
  - ["/assets/mqp/99_percent.mp4", "A demo video of our drone picking up a weighted can in flight"]
  - ["/assets/mqp/drone_flying.jpg", "The final iteration of our drone, in flight"]
  - ["/assets/mqp/drone.jpg", "An earlier iteration of our drone"]
  - ["/assets/mqp/cad.png", "The CAD Model of our drone and manipulator"]
  - ["/assets/mqp/training_sample.png", "An example of a blender-rendered training image"]
  - ["/assets/mqp/training_sample_2.png", "A second example of a blender-rendered training image"]
links:
  - ["Videos", "https://youtu.be/JgRSZfa9o8A?si=oeynI-PV2X9chbAH"]
  - ["Paper", "https://digital.wpi.edu/concern/student_works/8c97kw15v"]

---

### Project Overview

Roadside trash, a serious environmental and economic issue, is difficult, dangerous, and expensive to remove. The Terrawarden drone, a one-meter-wide quadrotor with a 3-DOF manipulator and compliant gripper, addresses the challenges associated with collecting trash on the inaccessible and uneven terrain of highway medians by autonomously detecting and retrieving trash using on-board perception. 

### Final Results

In the end, our drone was able to take off, identify a can, navigate to it and grasp it with the 3-DOF arm. However, we found there was a limiting balance for the weight of a can, as they would blow away if the drone was nearby if too light, but be unable to be lifted if they were too heavy. Due to time constraints, a solution for this was not developed, although a PhD student in our advisor's lab was given this drone to be the basis for a potential thesis paper following our work on the project.

**Metrics:**

- Autonomous flight and trash pickup​
- Flight hold within 10 cm of setpoint​
- Manipulator within 2 cm of setpoint​
- Gripper holds 350 g payload​
- Trash detection 83.2% accurate​ (number of cans detected / number of total predictions)
  - 39.1% of real-world cans missed​
- Detection accurate up to 4 m​
- Vision feedback in under 40 ms​


### Key Responsibilities

- **Software Architecture:** Designed a centralized node structure using ROS2, where all but one node acts as Hardware Abstraction Layers, commanded by a TaskManager node. These HAL nodes were each responsible for a single hardware peripheral, such as a Detection node that uses the Realsense's Image feed, or the Arm Control node, which sends and receives information from the Dynamixels.

- **Computer Vision Model:** Created a perception stack that uses an Intel RealSense to perform efficient (3ms) bounding box detection in open environments 

- **CV Training Dataset Evaluation:** Evaluated YOLOv11 performance across multiple datasets, ultimately deciding to use a custom dataset generated using Blender

### Challenges Addressed

- **Early into the project, the team experienced issues with personal accountability:** To help lighten the load of responsibilities, daily meetings were scheduled for the mornings, before classes, to serve as a check-in and reminders of outstanding tasks (similar to scrum; however we did not enforce an amount of expected progress each day, moreso just taking note of roadblocks, enabling the rest of the team to help when needed).

- **Team member consistently underperforming:** One of our team members was consistently inflating his contributions during daily check-ins, and upon inspection the work did not hold up to standards. We organized a team meeting for the purpose of reviewing his work, and the conclusion was that scheduling cooperative work times would be helpful in keeping team members on-task while working in the lab, allowing underperforming members to work more efficiently.

- **Portions of the code were developed with quick-and-dirty methods (connected to previous challenge), and then expanded solely with patchwork fixes, causing difficult and plentiful debugging:** The core issue was that the team did not hold consistent code reviews or enforce standard coding practices. To fix the issues this caused, two members of the team (me and the one responsible for the code) sat down together to review the code. As problems were identified, I was able to come up with a simpler methodology, and wrote it in pseudocode, leaving him to finish the redesigned implementation. To finalize the new implementation, we performed a second peer review. While repeating the process elsewhere in the code resulted in a consistent codebase that held up to scrutiny by our advisors, many problems could have been avoided by holding to these standards from the beginning rather than starting with a quick-and-dirty solution.

- **Crashed drone a week before final project deadline, burning out a motor:** Following the crash, the team took a step back to fully understand what was left to complete for the project. As the only thing remaining that required the drone was the final integration test, we decided that our efforts were likely better spent creating our marketting resources (video + poster, both seen above), and while we did order new motors, they were not installed on the drone until after Project Presentation day. Focusing our attention on the outstanding tasks in other areas wound up being necessary, as we were working until the very last minute on the Project Report.

### Project Specifications

| Purpose                                | Software Tools / Frameworks|
|----------------------------------------|----------------------------|
---
| Software Integration                   | ROS2 Humble (C++ & Python) |
| Software Logging + Visualization       | Rviz2                      |
| Computer Vision Model                  | YOLOv11                    |
| Computer Vision Library                | Ultralytics/PyTorch        |
| 3D Object Segmentation                 | PointCloud Library (PCL)   |
| Servo Motor Control                    | Dynamixel SDK              |
| Flight Controller Firmware             | PX4                        |
| Flight Controller to ROS Communication | uXRCE-DDS                  |
| Dataset Generation                     | Blender (bpy)              |
| CAD                                    | Solidworks                 |
| Kinematics Calculations                | MatLab                     |
| Version Control                        | Github                     |
| Kanban Boards                          | Github Projects            |
| Paper / Poster Making                  | Microsoft Office Suite     |
| Communication                          | Discord                    |
<br />

**Software Design Patterns Used:**
- State Machine
- Hardware-Abstraction Layers
- Observer
- Decorator
- Singleton

<br />
| Hardware Component                        | Make/Model                        |
|-------------------------------------------|-----------------------------------|
---
| Drone Body                                | UAV Systems Aurelia X4            |
| Flight Computer                           | Holybro Pixhawk 6X v2A            |
| Flight Computer GPS                       | Holybro M10 GPS                   |
| External Optical Flow and Distance Sensor | MicoAir MTF-01                    |
| Remote Control Receiver                   | ExpressLRS 2.4GHz Nano Receiver   |
| Ground Station Telemetry                  | 915 MHz Telemetry Radio           |
| FAA Remote ID                             | Holy Stone Drone Remote ID Module |
| Companion Computer                        | Jetson Orin NX                    |
| Depth Camera                              | Intel RealSense D455              |
| Power Step Down Board                     | XL4015E1 5A Buck Converter        |
| Servo Control Board                       | Dynamixel OpenRB-150              |
| Arm Servos                                | Dynamixel XM430-W350-T            |
| Gripper Servos                            | Dynamixel XC330-T288-T            |
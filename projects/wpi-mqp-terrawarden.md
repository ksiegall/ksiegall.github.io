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
featured: false
priority: 5
type: Drone
type_icon: Linux
team_size: 6
status: To Be Completed May 2025 (In Progress)
timeline: Aug 2024 - May 2025
media:
  - ["https://www.youtube.com/embed/JgRSZfa9o8A", ""]
  - ["/assets/mqp/99_percent.mp4", "A demo video of our drone *almost* picking up a weighted can in flight"]
  - ["/assets/mqp/drone_flying.jpg", "The final iteration of our drone, in flight"]
  - ["/assets/mqp/drone.jpg", "Our drone with all electronics and manipulator attached"]
  - ["/assets/mqp/cad.png", "The CAD Model of our drone and manipulator"]
  - ["/assets/mqp/training_sample.png", "An example of a blender-rendered training image"]
  - ["/assets/mqp/training_sample_2.png", "A second example of a blender-rendered training image"]
links:
  - ["Video", "https://youtu.be/JgRSZfa9o8A?si=oeynI-PV2X9chbAH"]
  - ["Paper", "https://digital.wpi.edu/concern/student_works/8c97kw15v"]

---

This project is a work in progress - an expanded article with more links + videos will be added here soon!

Quick Blurb:
- Designed and developed an aerial manipulator capable of detecting and collecting litter found on roadsides and highway medians
- Created a perception stack that uses an Intel RealSense to perform efficient (3ms) bounding box detection in open environments
- Evaluated YOLOv11 performance across multiple datasets, ultimately deciding to use a custom dataset generated using Blender
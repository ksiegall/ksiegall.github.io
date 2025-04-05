---
title: Terrawarden Drone Cleanup
slug: wpi-mqp-terrawarden
cover: "/assets/mqp/drone.jpg"
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
  - ["/assets/mqp/drone.jpg", "Our drone with all electronics and manipulator attached"]
  - ["/assets/mqp/cad.png", "The CAD Model of our drone and manipulator"]
  - ["/assets/mqp/realsense_output.png", "A sample output from the intel realsense camera"]
links:
  - ["", ""]

---

This project is a work in progress - an expanded article with more links + videos will be added here soon!

Quick Blurb:
- Designed and developed an aerial manipulator capable of detecting and collecting litter found on roadsides and highway medians
- Created a perception stack that uses an Intel RealSense to perform efficient (3ms) bounding box detection in open environments
- Evaluated YOLOv11 performance across multiple datasets, ultimately deciding to use a custom dataset generated using Blender
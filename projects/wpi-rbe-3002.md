---
title: Robot Navigation - SLAM and AMCL
slug: wpi-rbe-3002
cover: "/assets/rbe3002/rbe3002-cover-icon.jpg"
excerpt: A robot to navigate, map, and localize within its environment.
roles: Programmer
color: "#320032"
tags:
  - ["ROS", "#22314E"]
  - ["Robot Localization", "#EE7F1B"]
  - ["Motion Planning", "#0082C4"]
  - ["Python", "#f89820"]
  - ["Linux", "#ffcc33"]
  - ["Git", "#24292e"]
featured: false
priority: 4
type: Robot
type_icon: Linux
team_size: 3
status: Completed Dec 13, 2023
timeline: Oct 2023 - Dec 2023
media:
  - ["/assets/rbe3002/rbe3002-map-still.jpg", "Zelda, our Turtlebot3, making its way through the maze"]
  - ["/assets/rbe3002/rbe3002-mapping.mp4", "A video of our robot performing the mapping procedure"]
  - ["/assets/rbe3002/rbe3002-rviz.mp4", "A video of what the robot sees while mapping, in 4x speed"]
  - ["/assets/rbe3002/rbe3002-amcl.mp4", "An edited video of the robot solving the kidnapping problem"]
links:
  - ["Paper", "/assets/rbe3002/rbe3002-final-report.pdf"]

---

# The Fastest Team

Midway through my Junior Year at WPI, I took Unified Robotics IV: Navigation. This course focus on concepts very commonly found in robotics: localization, path planning, and navigation. To do so, we utilized the Turtlebot3 robot, along with its LiDAR scanner. Our goal was to program the robot using the Robotic Operating System (ROS) to autonomously map an environment, return to the starting point, and then navigate to any point we command within the map. Afterwards, we were to perform the "kidnapping problem", where the robot is then placed in an unknown location within the map, and told to drive to some other location. The robot is to determine where it is on the map, and then manage to navigate to this new target. The team whose robot completed these steps the fastest were granted extra credit.

Our team consisted of three insanely talented and dedicated members who were a pleasure to work with. The experience was both challenging and enjoyable, as we not only completed the assigned task but also used the remaining time to experiment with additional features, such as localizing without any physical movement. For every little bit we wrote custom ROS launch files. Additionally, two of us opted to run everything on Windows Subsystem for Linux (WSL) rather than Ubuntu, purely for the fun of the challenge and to avoid dual-booting our personal computers.

## The Process

The first step to this process is the mapping. Using the LiDAR, we were able to take note of the walls could see. Then, we looked for the frontier, the boundary between what we could and couldn't see. We used OpenCV to find the centroid of this boundary, and set that as the robot's target position. We utilized the A* algorithm to find the shortest path to this point, using a modified heuristic to encourage the robot to stay away from the walls as much as possible, as well as discourage turning as much as possible. Path following was then executed using the Pure Pursuit algorithm, which tracks a position some distance ahead of the robot on the path, allowing the robot to preempt turns and make adjustments accordingly. The robot then repeats this procedure until no more accessible frontiers can be found. Videos of this, both of the robot, and of what the robot sees (shown using ROS Visualization, or RViz) can be seen above.

Once the robot completes the mapping procedure is complete, we use A* once more to find our way back to the position we started in. Then, we pick up the robot and move it elsewhere within the maze. The robot spins in place, collecting data until it is confident that it knows where on the map it is, then waits for a target position to be assigned. It pathfinds back, stopping occasionally to confirm its position and the optimality of its path. A video of this, very nicely edited by one of my teammates, can also be found above.

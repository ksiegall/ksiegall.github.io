---
title: Bomberman AI
slug: wpi-bomberman-ai
cover: "/assets/rbe470x/wpi-bomberman-icon.jpg"
excerpt: Variants of a Bomberman AI, using Adverserial Search and Reinforcement Learning.
roles: Programmer
color: "#320032"
tags:
  - ["Python", "#f89820"]
  - ["Simulation", "#76B900"]
  - ["Reinforcement Learning","#265400"]
  - ["Git", "#24292e"]
featured: false
priority: 8
type: Python Program
type_icon: Linux
team_size: 3
status: Completed Mar 3, 2024
timeline: Jan 2024 - Mar 2024
media:
  - ["/assets/rbe470x/wpi-bomberman-gameplay.jpg", "A screenshot of our AI playing the game"]
  # - ["/assets/rbe470x/wpi-bomberman-gameplay.mp4", "A video of our AI playing the game"]
links:
  - ["Github", "https://github.com/ksiegall/Bomberman-AI"]
  - ["Paper", "/assets/rbe470x/wpi-bomberman-report.pdf"]

---


## Description
During C-term of Junior Year, I took an experimental course: RBE 470x: AI for Robotics. The class was a new course, which ended up being a cross between WPI's Intro to AI and Machine Learning courses. In this class, we covered everything from Optimized Graph Search to Markov Decision Processes, to Reinforcement Learning. The centerpoint of this class was this python implementation of Bomberman, which the professor provided. Our two major projects for the term were to implement some of the algorithms we discussed in lecture within this environment, to create our Bomberman AI.


## Bomberman AI Part 1: Expectiminimax

This part of the project had 5 phases. Variant 1 was trivial, just get your code to walk to the end. The Variant 2 added a "stupid" monster, who moves randomly each turn. Variant3 changed the "stupid" monster to a "self-preserving" monster, who moves in a straight line, bouncing off walls at random angles, and will attack if the player is within 1 unit of the monster. Variant 4 once again changed the monster type, this time to an "aggressive" monster, who behaves similar to the "self-preserving" monster will move towards the player if they are within 2 units, not just 1. This gradually increasing difficult defined how we approached this problem.

We decided on an Expecti-minimax approach, which allows us to factor in the randomness of the monsters, while still beinng optimal when the self-preserving or aggressive monsters are acting deterministicly. A core feature of this approach is the ability to evaluate states using a custom heuristic, which will simplify a complex world down to a numerical rating.

### Our Heuristic

The first thing we wanted to do was ensure that our player knew to approach the exit. Rather than calculate A* to find an optimal path every turn, which would explode in time complexity when we run a tree search, we start the program by calculating a wavefront, starting from the exit. Our heuristic starts by grabbing the distance from our saved wavefront. Then we punish it for being too close to the monster (but only if the monster is closer to the exit than we are), and reward it for having more options for moving around (as to discourage the player from hugging the walls). We also factor in the "events" that the game supplies, which tells us if the player dies, wins, or killed a monster.

## Bomberman AI Part 2: Approximate Q-Learning

The next part of the project was not nearly as simple. We were asked to implement Reinforcement Learning, either using by use of a library or manually. We chose a manual implementation, since I thought it would be just as difficult to use PyTorch or another similar library as it would be to do it ourselves. Also, in my own (very biased) opinion, it would be more fun.

Our Reinforcement Learning Algorithm of choice was **Q-Learning**, specifically Approximate Q-Learning. Approximate Q-learning is a simplified form of reinforcement learning where the utility of a state is a linear combination of features defined within the state. These features are traditionally normalized between 0 and 1, and should be representative of all the information the model needs in order to survive. The coefficients (weights) for each of these features are iterated on mathematically throughout training.


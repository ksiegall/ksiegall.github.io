---
title: Brigham and Women's Hospital Application
slug: cs3733-soft-eng
cover: "/assets/wpi-soft-eng-icon.png"
excerpt: Full Featured Kiosk Application for Brigham and Women's Hospital, made during WPI's CS 3733 Software Engineering class.
roles: Lead Software Engineer
color: "#1A0032"
tags:
  - ["Git", "#E94F36"]
  - ["Agile", "#121212"]
  - ["Java", "#121212"]
  - ["JavaFX", "#1F4277"]
  - ["SQL", "#0000CC"]
  - ["Figma", "#1F4277"]
  - ["AWS", "#081A32"]
  - ["CSS", "#1F4277"]
featured: true
priority: 1
type: PC Application
type_icon: windows
responsibilities: Class Structure, Front-End Development, Database Interaction (SQL)
team_size: 11
status: Completed May 3, 2023
timeline: Mar 2023 - May 2023
media:
  - ["/assets/wpi-soft-eng-trailer.mp4", "The trailer for our hospital application."]
  - ["/assets/wpi-soft-eng-team.png", "The 11 members of my team for WPI's Soft Eng class"]
  - ["/assets/wpi-soft-eng-figma.png", "A Screenshot from our Figma Mockup of the UI, showing the application's homepage"]
  - ["/assets/wpi-soft-eng-jira.png", "A Screenshot from our Jira page, showing some of our user stories from Iteration 3"]
links:
  - ["Github", "https://github.com/ksiegall/Soft-Eng-Hospital-App"]

---


## Description
During D-term of Sophmore Year, I took WPI's CS 3733 Software Engineering class. The class has a notorious reputation as one of the hardest classes at the school, due to the large team size and its very short iteration cycles. Through two prototypes and four iterations, each developed during week-long agile sprints, I was forced to learn how to manage a team of 11 developers as the team's Lead Software Engineer. Our resulting app used Java, with JavaFX for the UI/UX interactions, and SQL (including a AWS-hosted server) on the back end.

The app we made was a program to be used at various kiosks around the hospital, to be used passively as signage, more actively for pathfinding around the hospital, or by staff to submit work orders or food delivery requests. To the right, you can see a trailer that we made for our app, which is used as a screensaver after a period of inactivity, which showcases some of the features that we implemented.


## Our Approach
To manage a team of 11 people, it was important we chose the right tools for the job. We used Github for software version control, used Jira for User Stories and a Kanban board, and used Figma for UI Mockups before they were created in our Java Application.

One of the most important takeaways from this class was the utility of Design Patterns. The most prevalent ones for this project were ORMs, DAOs, and the Facade patterns. These three together managed all interactions with the SQL Database.  The ORM objects mapped to the individual rows of a given table, the DAOs managed all communication with those tables, and the Facade hid all of those interactions behind a singular Singleton so that the rest of the program did not need to know anything about the database beyond what it needed to give/get from it.
                       

## Lesson Learned

The class being so work intensive meant that there was a lot to learn. For sure the hardest part of the class was managing splitting all the work between the 11 of us, but once we got comfortable with the pacing of the Sprints, we stopped having to grind on the last day before each submission. 
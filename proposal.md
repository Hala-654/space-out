# Project Title

Space-Out

## Overview

"Space-Out" is a platform designed to showcase Canada’s involvement in space exploration, providing users with detailed information about past and ongoing space missions. The platform also highlights Canada’s collaborations with NASA and other international space agencies.

### Problem Space

There is a lack of centralized access to detailed information about Canada’s role in space missions in an interactive website. While space enthusiasts, professionals, and students can find scattered data across various sources, there is no single platform dedicated to organizing and displaying this information. "Space-Out" aims to address this gap by providing a user-friendly platform that highlights Canada’s contributions to space exploration and its collaborations with global space agencies like NASA.

### User Profile

"Space-Out" is intended for individuals interested in the Canadian space sector, including:

- Young adults: Students and budding professionals interested in space and aerospace industries.
- Industry professionals: People working in or closely related to the space and aeronautics sectors.
- Space enthusiasts: Individuals with a general interest in space exploration who want to learn more about Canada's role in the field.

### Features

As a user:

- Able to see past and current space missions that Canada is involeved in, to learn about the country's contributions to space exploration.
- Able to see detailed information about Canada’s collaborations with NASA and other international space agencies.
- Able to access the Canadian Space Agency’s open-source library for mission raw data, so user can explore space mission details.
- Able to comment on their favorite misison to share their thoughts and engage with other users.
- Able to read about Canadian astronauts, their careers, and their contributions to space missions.

## Implementation

### Tech Stack

- Frontend:
  - React
  - React Router
  - Axios
- Backend:
  - Express

### APIs

- No external APIs will be used for this project. Data will be sourced from the Canadian Space Agency's open-source library and other internal resources.

### Sitemap

- Home Page: Navigation to other pages, hero images, and cards to showcase missions
- Mission Page: Displays information about each mission, including mission title, launch date, astronauts involved, and mission patch.
- Astronaut Page: Display list of canadian astronauts, their information, and their missions' patch.

### Endpoints

- GET/missions: Get a list of space missions, including titles, dates, and agency involvement.

[

{

"id": 1,

"mission_name": Artemis II

"launch": 2025

"crew": Jeremy Hanson

},

]

- GET/missions/:id : Fetch detailed information about a specific mission, including participating astronauts and mission results.

[

{

"id": 1,

"mission_name": Artemis II

"launch": 2025

"astronaut": Jeremy Hanson

"vehicle": SLS rocket and the Orion spacecraft

"patch": Jeremy-Hansen's-patch-for-the-Artemis-II-mission

"duration": 10 days

"planet": Moon

}

...

]

- GET/astronauts: list of Canadian astronauts

  [

  {

  "id": 1,

  "name":Jeremy Hanson

  "dob":

  "occupation": Fighter pilot in the royal canadian air force.

  "mission": Artemis II

  },

  {

  "id": 2,

  "name":David Saint-Jacques

  "dob": January 6, 1970

  "occupation": Engineer, astrophysicist, family doctor

  "mission": Expedition 58/59

  }

  ...

  ]

## Roadmap

- Client/Frontend:
  - Initialize the React project with basic routes and boilerplate pages
  - Create the main pages: Home, mission overview (card), and astronauts profiles.
- Server/Backend:
  - Set up the Express backend with placeholder data for missions and astronauts
- Ensure responsiveness
- Bug fixes
- Demo day

## Future Implementations

- Integrate additional APIs such as real-time ISS location tracking to add interactive elements to the website.
- Add a visual timeline to showcase the progression of space missions involving Canada.
- Include more detailed profiles and career histories of Canadian astronauts.
- Enable users to create accounts, comment on multiple missions, and track their favorite missions.

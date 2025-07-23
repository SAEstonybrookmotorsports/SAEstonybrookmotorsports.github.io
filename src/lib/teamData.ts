// src/lib/teamData.ts
export interface TeamMember {
  name: string;
  image: string;
  role: string;
  subsystem: string;
  linkedin?: string;
  bio: string;
  funBio?: string;
  custom?: string;     
}

export const teamData: TeamMember[] = [
  {
    name: 'Kushagra Taneja',
    image: 'images/team/kushagra-taneja.jpg',
    role: 'Software Lead',
    subsystem: 'Software',
    linkedin: 'https://www.linkedin.com/in/kushagra-taneja/',
    bio: 'insert professional bio here',
    funBio: 'beep boop',
    custom: 'Website Developer / Data Acquisition Systems / CAN Bus'
  },
  {
    name: 'Edward Cibu',
    image: 'images/team/edward-cibu.jpg',
    role: 'Brakes Lead / Internal PR',
    subsystem: 'Brakes',
    bio: 'insert professional bio here',
    funBio: 'car stopper and media manager',
    // no linkedin
    custom: ''  // or omit if you prefer
  },
  {
    name: 'Brandon Chan',
    image: 'images/team/brandon-chan.jpg',
    role: 'Suspension Lead',
    subsystem: 'Suspension',
    linkedin: 'https://www.linkedin.com/in/brandon-chan-0467591ab/',
    bio: 'insert professional bio here',
    funBio: 'Make Car Boing Boing',
    custom: ''
  },
  {
    name: 'Denys Tserkovniuk',
    image: 'images/team/denys-tserkovniuk.jpg',
    role: 'Driveshaft & Axles Lead',
    subsystem: 'Drivetrain',
    bio: 'insert professional bio here',
    custom: ''
  },
  {
    name: 'Erik Khachatryan',
    image: 'images/team/erik-khachatryan.jpg',
    role: 'CVT Lead',
    subsystem: 'Transmission',
    bio: 'insert professional bio here',
    custom: ''
  },
  {
    name: 'Arthur Siek',
    image: 'images/team/arthur-siek.jpg',
    role: 'Vice President / CNC Lead',
    subsystem: 'CNC',
    bio: 'insert professional bio here',
    funBio: 'Run CNC',
    custom: ''
  },
  {
    name: 'Hunter Guthy',
    image: 'images/team/hunter-guthy.jpg',
    role: 'Frame Lead',
    subsystem: 'Chassis',
    linkedin: 'https://www.linkedin.com/in/hunterguthy/',
    bio: 'insert professional bio here',
    funBio: 'Partialy appointed jig master',
    custom: '3rd year frame member'
  },
  {
    name: 'Julianna Wehmann',
    image: 'images/team/julianna-wehmann.jpg',
    role: 'President',
    subsystem: 'Leadership',
    linkedin: 'https://www.linkedin.com/in/julianna-wehmann/',
    bio: 'insert professional bio here',
    funBio: 'Past PR Manager, Driveshaft/Axles Lead and Fabrication Lead.',
    custom: ''
  },
  {
    name: 'Kevin Zhuo',
    image: 'images/team/kevin-zhuo.jpg',
    role: 'Powertrain Lead / Head Machinist',
    subsystem: 'Powertrain',
    linkedin: 'https://www.linkedin.com/in/kevin-zhuo43/',
    bio: 'insert professional bio here',
    funBio: 'Past Gearbox Lead',
    custom: ''
  },
  {
    name: 'Ziqi Wang',
    image: 'images/team/ziqi-wang.jpg',
    role: 'Gearbox Lead',
    subsystem: 'Drivetrain',
    bio: 'insert professional bio here',
    custom: ''
  },
  {
    name: 'Pasha Kusumo',
    image: 'images/team/pasha-kusumo.jpg',
    role: 'Differential Co‑Lead',
    subsystem: 'Drivetrain',
    linkedin: 'https://www.linkedin.com/in/pashakusumo/',
    bio: 'insert professional bio here',
    custom: ''
  },
  {
    name: 'Samantha Margulies',
    image: 'images/team/samantha-margulies.jpg',
    role: 'Treasurer',
    subsystem: 'Finance',
    linkedin: 'https://www.linkedin.com/in/samantha-margulies',
    bio: 'insert professional bio here',
    custom: ''
  },
  {
    name: 'Nick Clement',
    image: 'images/team/nick-clement.jpg',
    role: 'Chassis Lead',
    subsystem: 'Chassis',
    bio: 'insert professional bio here',
    custom: ''
  },
  {
    name: 'Misha Zaslavsky',
    image: 'images/team/misha-zaslavsky.jpg',
    role: 'Testing Lead',
    subsystem: 'Testing',
    bio: 'insert professional bio here',
    custom: ''
  },
  {
    name: 'Vinny Blendell',
    image: 'images/team/vinny-blendell.jpg',
    role: 'Composites Lead',
    subsystem: 'Composites',
    bio: 'insert professional bio here',
    custom: ''
  }
];

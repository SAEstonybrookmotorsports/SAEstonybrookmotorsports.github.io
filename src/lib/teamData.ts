// src/lib/teamData.ts
import kushagraImg from '../images/team/kushagra-taneja.jpg';
import edwardImg from '../images/team/edward-cibu.jpg';
import brandonImg from '../images/team/brandon-chan.jpg';
import denysImg from '../images/team/denys-tserkovniuk.jpg';
import erikImg from '../images/team/erik-khachatryan.jpg';
import arthurImg from '../images/team/arthur-siek.jpg';
import hunterImg from '../images/team/hunter-guthy.jpg';
import juliannaImg from '../images/team/julianna-wehmann.jpg';
import kevinImg from '../images/team/kevin-zhuo.jpg';
import ziqiImg from '../images/team/ziqi-wang.jpg';
import pashaImg from '../images/team/pasha-kusumo.jpg';
import samanthaImg from '../images/team/samantha-margulies.jpg';
import nickImg from '../images/team/nick-clement.jpg';
import mishaImg from '../images/team/misha-zaslavsky.jpg';
import vinnyImg from '../images/team/vinny-blendell.jpg';

export interface TeamMember {
  name: string;
  image: ImageMetadata;
  role: string;
  subsystem: string;
  linkedin?: string;
  bio: string;
  funBio?: string;
  custom?: string;
  lead: boolean;
}

export const teamData: TeamMember[] = [
  {
    name: 'Kushagra Taneja',
    image: kushagraImg,
    role: 'Software Lead',
    subsystem: 'Software',
    linkedin: 'https://www.linkedin.com/in/kushagra-taneja/',
    bio: 'Website Developer / Data Acquisition Systems / CAN Bus',
    funBio: 'beep boop',
    lead: true
  },
  {
    name: 'Edward Cibu',
    image: edwardImg,
    role: 'Brakes Lead / Internal PR',
    subsystem: 'Brakes',
    bio: 'insert professional bio here',
    funBio: 'car stopper and media manager',
    lead: true
  },
  {
    name: 'Brandon Chan',
    image: brandonImg,
    role: 'Suspension Lead',
    subsystem: 'Suspension',
    linkedin: 'https://www.linkedin.com/in/brandon-chan-0467591ab/',
    bio: 'insert professional bio here',
    funBio: 'Make Car Boing Boing',
    lead: true
  },
  {
    name: 'Denys Tserkovniuk',
    image: denysImg,
    role: 'Driveshaft & Axles Lead',
    subsystem: 'Drivetrain',
    bio: 'insert professional bio here',
    lead: true
  },
  {
    name: 'Erik Khachatryan',
    image: erikImg,
    role: 'CVT Lead',
    subsystem: 'Transmission',
    bio: 'insert professional bio here',
    lead: true
  },
  {
    name: 'Arthur Siek',
    image: arthurImg,
    role: 'Vice President / CNC Lead',
    subsystem: 'CNC',
    bio: 'insert professional bio here',
    funBio: 'Run CNC',
    lead: true
  },
  {
    name: 'Hunter Guthy',
    image: hunterImg,
    role: 'Frame',
    subsystem: 'Chassis',
    linkedin: 'https://www.linkedin.com/in/hunterguthy/',
    bio: 'insert professional bio here',
    funBio: 'Partially appointed jig master',
    custom: '3rd year frame member',
    lead: false
  },
  {
    name: 'Julianna Wehmann',
    image: juliannaImg,
    role: 'President',
    subsystem: 'Leadership',
    linkedin: 'https://www.linkedin.com/in/julianna-wehmann/',
    bio: 'insert professional bio here',
    funBio: 'Past PR Manager, Driveshaft/Axles Lead and Fabrication Lead.',
    lead: true
  },
  {
    name: 'Kevin Zhuo',
    image: kevinImg,
    role: 'Powertrain Lead / Head Machinist',
    subsystem: 'Powertrain',
    linkedin: 'https://www.linkedin.com/in/kevin-zhuo43/',
    bio: 'insert professional bio here',
    funBio: 'Past Gearbox Lead',
    lead: true
  },
  {
    name: 'Ziqi Wang',
    image: ziqiImg,
    role: 'Gearbox Lead',
    subsystem: 'Drivetrain',
    bio: 'insert professional bio here',
    lead: true
  },
  {
    name: 'Pasha Kusumo',
    image: pashaImg,
    role: 'Differential Co-Lead',
    subsystem: 'Drivetrain',
    linkedin: 'https://www.linkedin.com/in/pashakusumo/',
    bio: 'insert professional bio here',
    lead: true
  },
  {
    name: 'Samantha Margulies',
    image: samanthaImg,
    role: 'Treasurer',
    subsystem: 'Treasurer',
    linkedin: 'https://www.linkedin.com/in/samantha-margulies',
    bio: 'insert professional bio here',
    lead: false
  },
  {
    name: 'Nick Clement',
    image: nickImg,
    role: 'Chassis Lead',
    subsystem: 'Chassis',
    bio: 'insert professional bio here',
    lead: true
  },
  {
    name: 'Misha Zaslavsky',
    image: mishaImg,
    role: 'Testing Lead',
    subsystem: 'Testing',
    bio: 'insert professional bio here',
    lead: true
  },
  {
    name: 'Vinny Blendell',
    image: vinnyImg,
    role: 'Composites Lead',
    subsystem: 'Composites',
    bio: 'insert professional bio here',
    lead: true
  }
];

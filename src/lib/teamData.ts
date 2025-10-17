// src/lib/teamData.ts
import kushagraImg from '../assets/team/kushagra-taneja.jpg';
import edwardImg from '../assets/team/edward-cibu.jpg';
import brandonImg from '../assets/hero.jpg';
import denysImg from '../assets/team/denys-tserkovniuk.jpg';
import erikImg from '../assets/team/erik-khachatryan.jpg';
import arthurImg from '../assets/team/arthur-siek.jpg';
import hunterImg from '../assets/team/hunter-guthy.jpg';
import juliannaImg from '../assets/team/julianna-wehmann.jpg';
import kevinImg from '../assets/team/kevin-zhuo.jpg';
import ziqiImg from '../assets/team/ziqi-wang.jpg';
import pashaImg from '../assets/team/pasha-kusumo.jpg';
import samanthaImg from '../assets/team/samantha-margulies.jpg';
import nickImg from '../assets/hero.jpg';
import mishaImg from '../assets/team/misha-zaslavsky.jpg';
import vinnyImg from '../assets/team/vinny-blendell.jpg';
import AshtonImg from '../assets/team/ashton-gomes.jpg';
import ShornImg from '../assets/hero.jpg';
import WillImg from '../assets/team/william-ouzounian.jpg'
export interface TeamMember {
  name: string;
  image: ImageMetadata;
  role: string;
  system: string;
  linkedin?: string;
  bio: string;
  funBio?: string;
  custom?: string;
  lead: boolean;
  category: 'Faculty' | 'Eboard' | 'SystemLead' | 'Grad' | 'Member';
}

export const teamData: TeamMember[] = [
  {
    name: 'Kushagra Taneja',
    image: kushagraImg,
    role: 'Software Lead',
    system: 'Software',
    linkedin: 'https://www.linkedin.com/in/kushagra-taneja/',
    bio: 'Website Developer / Data Acquisition Systems / CAN Bus',
    funBio: 'beep boop',
    lead: true,
    category:'Member',
  },
  {
    name: 'Edward Cibu',
    image: edwardImg,
    role: 'Brakes Lead / Internal PR',
    system: 'Vehicle Dynamics',
    bio: 'insert professional bio here',
    funBio: 'car stopper and media manager',
    lead: true,
    category:'Member',
  },
  {
    name: 'Brandon Chan',
    image: brandonImg,
    role: 'Suspension Lead',
    system: 'Vehicle Dynamics',
    linkedin: 'https://www.linkedin.com/in/brandon-chan-0467591ab/',
    bio: 'insert professional bio here',
    funBio: 'Make Car Boing Boing',
    lead: true,
    category:'Member',
  },
  {
    name: 'Denys Tserkovniuk',
    image: denysImg,
    role: 'Driveshaft & Axles Lead',
    system: 'Drivetrain',
    bio: 'insert professional bio here',
    lead: true,
    category:'Member',
  },
  {
    name: 'Erik Khachatryan',
    image: erikImg,
    role: 'CVT Lead',
    system: 'Drivetrain',
    bio: 'insert professional bio here',
    lead: true,
    category:'Member',
  },
  {
    name: 'Arthur Siek',
    image: arthurImg,
    role: 'Vice President / CNC Lead',
    system: 'CNC',
    bio: 'insert professional bio here',
    funBio: 'Run CNC',
    lead: true,
    category:'Eboard',
  },
  {
    name: 'Hunter Guthy',
    image: hunterImg,
    role: 'Frame Lead',
    system: 'Chassis',
    linkedin: 'https://www.linkedin.com/in/hunterguthy/',
    bio: 'insert professional bio here',
    funBio: 'Partially appointed jig master',
    custom: '3rd year frame member',
    lead: false,
    category:'Member',
  },
  {
    name: 'Julianna Wehmann',
    image: juliannaImg,
    role: 'President',
    system: 'Leadership',
    linkedin: 'https://www.linkedin.com/in/julianna-wehmann/',
    bio: 'insert professional bio here',
    funBio: 'Past PR Manager, Driveshaft/Axles Lead and Fabrication Lead.',
    lead: true,
    category:'Eboard',
  },
  {
    name: 'Kevin Zhuo',
    image: kevinImg,
    role: 'Powertrain Lead / Head Machinist',
    system: 'Powertrain',
    linkedin: 'https://www.linkedin.com/in/kevin-zhuo43/',
    bio: 'insert professional bio here',
    funBio: 'Past Gearbox Lead',
    lead: true,
    category:'SystemLead',
  },
  {
    name: 'Ziqi Wang',
    image: ziqiImg,
    role: 'Gearbox Lead',
    system: 'Drivetrain',
    bio: 'insert professional bio here',
    lead: true,
    category:'Member',
  },
  {
    name: 'Pasha Kusumo',
    image: pashaImg,
    role: 'Differential Co-Lead',
    system: 'Drivetrain',
    linkedin: 'https://www.linkedin.com/in/pashakusumo/',
    bio: 'insert professional bio here',
    lead: true,
    category:'Member',
  },
  {
    name: 'Samantha Margulies',
    image: samanthaImg,
    role: 'Treasurer',
    system: 'Treasurer',
    linkedin: 'https://www.linkedin.com/in/samantha-margulies',
    bio: 'insert professional bio here',
    lead: false,
    category:'Eboard',
  },
  {
    name: 'Nick Clement',
    image: nickImg,
    role: 'Chassis Lead',
    system: 'Chassis',
    bio: 'insert professional bio here',
    lead: true,
    category:'SystemLead',
  },
  {
    name: 'Misha Zaslavsky',
    image: mishaImg,
    role: 'Testing Lead',
    system: 'Testing',
    bio: 'insert professional bio here',
    lead: true,
    category:'Member',
  },
  {
    name: 'Vinny Blendell',
    image: vinnyImg,
    role: 'Composites Lead',
    system: 'Chassis',
    bio: 'insert professional bio here',
    lead: true,
    category:'Member',
  },
  {
    name: 'Ashton Gomes',
    image: AshtonImg,
    role: 'Vehicle Dynamics Lead',
    system: 'Vehicle Dynamics',
    bio: 'insert professional bio here',
    lead: true,
    category:'SystemLead',
  },
  {
    name: 'Shorn Grant',
    image: ShornImg,
    role: 'Electrical Lead',
    system: 'Electrical',
    bio: 'insert professional bio here',
    lead: true,
    category:'SystemLead',
  },
  {
    name: 'William Ouzonian',
    image: WillImg,
    role: 'Secretary/Facilities Lead',
    system: 'Powertrain',
    bio: 'insert professional bio here',
    funBio: 'yes',
    lead: true,
    category:'Eboard',
  },


];

// src/lib/teamData.ts
import kushagraImg from '../assets/team/kushagra-taneja.jpg';
import edwardImg from '../assets/team/edward-cibu.jpg';
import denysImg from '../assets/team/denys-tserkovniuk.jpg';
import erikImg from '../assets/team/erik-khachatryan.jpg';
import arthurImg from '../assets/team/arthur-siek.jpg';
import hunterImg from '../assets/team/hunter-guthy.jpg';
import juliannaImg from '../assets/team/julianna-wehmann.jpg';
import kevinImg from '../assets/team/kevin-zhuo.jpg';
import ziqiImg from '../assets/team/ziqi-wang.jpg';
import pashaImg from '../assets/team/pasha-kusumo.jpg';
import samanthaImg from '../assets/team/samantha-margulies.jpg';
import mishaImg from '../assets/team/misha-zaslavsky.jpg';
import vinnyImg from '../assets/team/vinny-blendell.jpg';
import AshtonImg from '../assets/team/ashton-gomes.jpg';
import WillImg from '../assets/team/william-ouzounian.jpg';
import eldaImg from '../assets/team/elda-berhaneyessus.jpg';
import dianaImg from '../assets/team/diana-russo.jpg';
import jasonImg from '../assets/team/jason-praisner.jpg';
import samImg from '../assets/team/samuel-block.jpg';
import brandonImg from '../assets/team/brandon-chan.jpg';
import defaultImg from '../assets/hero.jpg';
import type { ImageMetadata } from 'astro';

export interface TeamMember {
  name: string;
  image: ImageMetadata;
  role?: string;
  system: string;
  linkedin?: string;
  bio?: string;
  category: 'Faculty' | 'Eboard' | 'SystemLead' | 'Aboard' | 'Member';
}

export const teamData: TeamMember[] = [
  {
    name: 'Julianna Wehmann',
    image: juliannaImg,
    role: 'President',
    system: 'Leadership',
    linkedin: 'https://www.linkedin.com/in/julianna-wehmann/',
    category: 'Eboard'
  },
  {
    name: 'Arthur Siek',
    image: arthurImg,
    role: 'Vice President / CNC Lead',
    system: 'CNC',
    category: 'Eboard'
  },
  {
    name: 'Samantha Margulies',
    image: samanthaImg,
    role: 'Treasurer / Facilities Manager',
    system: 'Leadership',
    linkedin: 'https://www.linkedin.com/in/samantha-margulies',
    category: 'Eboard'
  },
  {
    name: 'Elda Berhaneyessus',
    image: eldaImg,
    role: 'Secretary',
    system: 'Suspension',
    category: 'Eboard'
  },
  {
    name: 'Jason Praisner',
    image: jasonImg,
    role: 'Design Leader',
    system: 'Vehicle Dynamics',
    category: 'Aboard'
  },
  {
    name: 'William Ouzounian',
    image: WillImg,
    system: 'Powertrain',
    category: 'Member'
  },
  {
    name: 'Kevin Zhuo',
    image: kevinImg,
    role: 'Head Machinist / Powertrain Lead',
    system: 'Powertrain',
    linkedin: 'https://www.linkedin.com/in/kevin-zhuo43/',
    category: 'Aboard',
  },
  {
    name: 'Zayan Zahoori',
    image: defaultImg,
    role: 'Testing Manager',
    system: 'Electrical',
    category: 'Aboard'
  },
  {
    name: 'Ashton Gomes',
    image: AshtonImg,
    role: 'Vehicle Dynamics Lead',
    system: 'Vehicle Dynamics',
    category: 'SystemLead'
  },
  {
    name: 'Nick Clement',
    image: defaultImg,
    role: 'Chassis Lead',
    system: 'Chassis',
    category:'SystemLead'
  },
  {
    name: 'Diana Russo',
    image: dianaImg,
    role: 'Electrical Lead',
    system: 'Electrical',
    category: 'SystemLead'
  },
  {
    name: 'Brandon Chan',
    image: brandonImg,
    system: 'Powertrain',
    category: 'Member'
  },
  {
    name: 'Kushagra Taneja',
    image: kushagraImg,
    system: 'Electrical',
    linkedin: 'https://www.linkedin.com/in/kushagra-taneja/',
    category: 'Member'
  },
  {
    name: 'Edward Cibu',
    image: edwardImg,
    role: 'Internal PR',
    system: 'Vehicle Dynamics',
    category: 'Member'
  },
  {
    name: 'Denys Tserkovniuk',
    image: denysImg,
    system: 'Powertrain',
    category: 'Member'
  },
  {
    name: 'Erik Khachatryan',
    image: erikImg,
    system: 'Powertrain',
    category: 'Member'
  },
  {
    name: 'Hunter Guthy',
    image: hunterImg,
    system: 'Chassis',
    category: 'Member'
  },
  {
    name: 'Ziqi Wang',
    image: ziqiImg,
    system: 'Powertrain',
    category: 'Member'
  },
  {
    name: 'Pasha Kusumo',
    image: pashaImg,
    system: 'Powertrain',
    linkedin: 'https://www.linkedin.com/in/pashakusumo/',
    category: 'Member'
  },
  {
    name: 'Misha Zaslavsky',
    image: mishaImg,
    system: 'Vehicle Dynamics',
    category: 'Member'
  },
  {
    name: 'Samuel Block',
    image: samImg,
    system: 'Chassis',
    category: 'Member'
  },
  {
    name: 'Vinny Blendell',
    image: vinnyImg,
    system: 'Chassis',
    category: 'Member'
  }
];
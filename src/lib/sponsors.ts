export type Sponsor = {
    name: string;
    personName?: string;
    tier: "Gold" | "Silver" | "Bronze" | "Honorable Mentions";
    image: string;
    alt: string;
    url?: string;
  };
  
  export const sponsors: Sponsor[] = [
    {
      name: "College of Engineering & Applied Sciences",
      tier: "Gold",
      image: "/images/sponsors/ceas.jpg",
      alt: "Stony Brook College of Engineering & Applied Sciences",
      url: "https://www.stonybrook.edu/ceas/",
    },
    {
      name: "Stony Brook USG",
      tier: "Gold",
      image: "/images/sponsors/usg.png",
      alt: "Stony Brook USG",
      url: "https://stonybrookusg.com/",
    },
    {
      name: "Stony Brook Mechanical Engineering",
      tier: "Gold",
      image: "/images/sponsors/mecheng.png",
      alt: "Stony Brook Mechanical Engineering",
      url: "https://www.stonybrook.edu/undergraduate-admissions/programs/mec.php",
    },
    {
      name: "Flagpoles Inc",
      tier: "Gold",
      image: "/images/sponsors/flagpoles.gif",
      alt: "Flagpoles Inc",
      url: "http://www.flagpolesinc.com/",
    },
    {
      name: "Gene Haas Foundation",
      tier: "Gold",
      image: "/images/sponsors/ghaas.png",
      alt: "Gene Haas Foundation",
      url: "https://www.ghaasfoundation.org/",
    },
  
    {
      name: "Solidworks",
      tier: "Silver",
      image: "/images/sponsors/solidworks.svg",
      alt: "Solidworks",
      url: "https://www.solidworks.com/",
    },
    {
      name: "4XPro",
      tier: "Silver",
      image: "/images/sponsors/4xpro.avif",
      alt: "4XPro",
      url: "https://www.4xpro.com/",
    },
    {
      name: "Ansys",
      tier: "Silver",
      image: "/images/sponsors/Ansys.jpg",
      alt: "Ansys",
      url: "https://www.ansys.com/",
    },
    {
      name: "KISSsoft",
      tier: "Silver",
      image: "/images/sponsors/kisssoft.svg",
      alt: "KISSsoft",
      url: "https://www.kisssoft.com/en/",
    },
    {
      name: "Hexagon",
      tier: "Silver",
      image: "/images/sponsors/hexagon.png",
      alt: "Hexagon",
      url: "https://hexagon.com/",
    },
    {
      name: "Mastercam",
      tier: "Silver",
      image: "/images/sponsors/Mastercam.svg",
      alt: "Mastercam",
      url: "https://www.mastercam.com/",
    },
    {
      name: "Kenesto",
      tier: "Silver",
      image: "/images/sponsors/kenesto.png",
      alt: "Kenesto",
      url: "https://www.kenesto.com/",
    },
    {
      name: "Maloya",
      tier: "Silver",
      image: "/images/sponsors/maloya.webp",
      alt: "Maloya",
      url: "https://maloyalaser.com/",
    },
  
    {
      name: "D&I Finishing Inc",
      tier: "Bronze",
      image: "/images/sponsors/di_finishing.png",
      alt: "D&I Finishing Inc",
      url: "/sponsors/difinishing",
    },
    {
      name: "KK Finishing Inc",
      tier: "Bronze",
      image: "/images/sponsors/kkfinishing.png",
      alt: "KK Finishing Inc",
      url: "http://www.kkfinishingco.com/",
    },
    {
      name: "Burton Industries Inc",
      tier: "Bronze",
      image: "/images/sponsors/burton.png",
      alt: "Burton Industries Inc",
      url: "https://burtonind.com/",
    },
    {
      name: "Base Brooklyn",
      tier: "Bronze",
      image: "/images/sponsors/basebrooklyn.webp",
      alt: "Base Brooklyn",
      url: "https://base-brooklyn.myshopify.com/",
    },
  
    {
      name: "Noah Machtay",
      personName: "Noah Machtay",
      tier: "Honorable Mentions",
      image: "/images/honorable/noah.jpg",
      alt: "Noah Machtay",
    },
    {
      name: "Austin Giordano",
      personName: "Austin Giordano",
      tier: "Honorable Mentions",
      image: "/images/honorable/austin.jpg",
      alt: "Austin Giordano",
    },
    {
      name: "Joe Schurz",
      personName: "Joe Schurz",
      tier: "Honorable Mentions",
      image: "/images/honorable/joe.jpg",
      alt: "Joe Schurz",
    },
  ];
  
  export const tierDescriptions: Record<string, string> = {
    gold: "Our top sponsors who provide major support across all operations.",
    silver: "Key contributors who help drive critical components of the team.",
    bronze: "Valued sponsors who help make our work possible.",
    "Honorable Mentions": "Team alumni and advisors who helped us along the way.",
  };
  
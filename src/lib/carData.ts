// src/lib/carData.ts

export interface PhotoLink {
  label: string;
  url: string;
}
export interface CarData {
  year: string;
  carNumber: string;
  standing: string;
  photoUrl: string;
  detailPageUrl: string;
  photosLink: PhotoLink[];
  specNames?: string[];
  specValues?: string[];
  awards?: string[];
}

export const carData: CarData[] = [
  // Pre‑2005
  {
    year: "1988",
    carNumber: "45",
    standing: "Unknown",
    photoUrl: "images/pastcars/1988.jpg",
    detailPageUrl: "/cars/1988",
    photosLink: [
      { label: "1988 Competition Photos", url: "https://goo.gl/photos/TFczhRE4p4Tr1WHbA" }
    ],
  },
  {
    year: "1997",
    carNumber: "47",
    standing: "23rd Overall in Midwest",
    photoUrl: "images/pastcars/1997.jpg",
    detailPageUrl: "/cars/1997",
    photosLink: [
      { label: "Baja SAE Midwest", url: "https://goo.gl/photos/zeEx1v5M6ETEytA7" }
    ],
  },
  {
    year: "1998",
    carNumber: "45",
    standing: "54th Overall in Midwest",
    photoUrl: "images/pastcars/1998.jpg",
    detailPageUrl: "/cars/1998",
    photosLink: [],
  },
  {
    year: "1999",
    carNumber: "40",
    standing: "51st Overall in Ohio",
    photoUrl: "images/pastcars/1999.jpg",
    detailPageUrl: "/cars/1999",
    photosLink: [
      { label: "Baja SAE Ohio", url: "https://goo.gl/photos/rng852EZecGdyR3c9" }
    ],
  },
  {
    year: "2000",
    carNumber: "51",
    standing: "23rd Overall in Midwest",
    photoUrl: "images/pastcars/2000.jpg",
    detailPageUrl: "/cars/2000",
    photosLink: [
      { label: "Baja SAE Midwest", url: "https://goo.gl/photos/DyJFreZFReyYJsFS7" }
    ],
  },
  {
    year: "2001",
    carNumber: "86",
    standing: "28th Overall in Midwest",
    photoUrl: "images/pastcars/2001.jpg",
    detailPageUrl: "/cars/2001",
    photosLink: [
      { label: "Baja SAE Midwest", url: "https://goo.gl/photos/nu9vdUDB8uvUHaz37" }
    ],
  },
  {
    year: "2002",
    carNumber: "52",
    standing: "62nd Overall in Midwest",
    photoUrl: "images/pastcars/2002.jpg",
    detailPageUrl: "/cars/2002",
    photosLink: [
      { label: "Baja SAE Midwest", url: "https://goo.gl/photos/SNeb2BFWxMeS6daz6" }
    ],
  },
  {
    year: "2003",
    carNumber: "20",
    standing: "88th Overall in Midwest",
    photoUrl: "images/pastcars/2003.jpg",
    detailPageUrl: "/cars/2003",
    photosLink: [
      { label: "Baja SAE Midwest", url: "https://goo.gl/photos/uC6BL7gDu917Apfd8" }
    ],
  },
  {
    year: "2004",
    carNumber: "100",
    standing: "47th Overall in Midwest",
    photoUrl: "images/pastcars/2004.jpg",
    detailPageUrl: "/cars/2004",
    photosLink: [
      { label: "Baja SAE Midwest", url: "https://goo.gl/photos/mMVx3LAvxPBA3Twv9" }
    ],
  },

  // 2005+
  {
    year: "2005",
    carNumber: "99",
    standing: "61st Overall in Ohio",
    photoUrl: "images/pastcars/2005.jpg",
    detailPageUrl: "/cars/2005",
    photosLink: [
      { label: "Baja SAE Ohio", url: "https://goo.gl/photos/cBkezsAY9UGx3HW2A" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`82"`,`59"`,`60"`,`367 lbs`,
      `10" × 7" Front & Rear`,
      `22" × 7" Maxxis RAZR2 (front); 23" × 7" Kenda Claw (rear)`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2006",
    carNumber: "130",
    standing: "44th Overall in Wisconsin",
    photoUrl: "images/pastcars/2006.jpg",
    detailPageUrl: "/cars/2006",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/9nwyDoUggJ9prFJn7" },
      { label: "Baja SAE Rochester", url: "https://goo.gl/photos/dL3fe4DLk9fpzdHu5" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `58"`,`52"/50"`,`82"`,`60"`,`61"`,`368 lbs`,
      `10" × 7" Front & Rear`,`22" × 7" Maxxis RAZR2`,`22" × 7" Maxxis RAZR2`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2007",
    carNumber: "27/50",
    standing: "3rd Overall in South Dakota & 20th Overall in Rochester",
    photoUrl: "images/pastcars/2007.jpg",
    detailPageUrl: "/cars/2007",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/uhwezdamVx6thC429" },
      { label: "Frame Jig", url: "https://goo.gl/photos/wuYAWCHwf5Rp4gkZ6" },
      { label: "Spring Testing", url: "https://goo.gl/photos/hYY53UzwBLrzdrt28" },
      { label: "Baja SAE South Dakota", url: "https://goo.gl/photos/mA6MRBL2BXe9mEXk6" },
      { label: "Industrial Advisory Board", url: "https://goo.gl/photos/3Udkjwd8nmUReSE96" },
      { label: "Flagpoles Car Show", url: "https://goo.gl/photos/WkNWj5zNEXUv9Ub8" },
      { label: "Car 27/50 Renderings", url: "https://goo.gl/photos/qGQuW4FaueU1JjhB8" },
      { label: "2007 Baja SAE South Dakota", url: "https://www.youtube.com/watch?v=tuksneU8sLM" },
      { label: "2007 Baja SAE Rochester", url: "https://www.youtube.com/watch?v=iLfFBeIFQXQ" },
      { label: "2007 Testing", url: "https://www.youtube.com/watch?v=xfxI0I5HcEI" },
      { label: "2007 Testing Part 2", url: "https://www.youtube.com/watch?v=PB_b5ZlFJ5Q" }
    ],
    awards: [
      "Autodesk Inventor Design Communication Award (1st Place) — Rochester World Challenge",
      "Polaris Overall Design Award (2nd Place)",
      "Briggs & Stratton Overall Performance Award (3rd Place)"
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Tires","Suspension","Powertrain"
    ],
    specValues: [
      `65.8"`,`55.1"`,`87.7"`,`62.7"`,`57.8"`,`503 lbs`,
      `10" × 7" Front & Rear`,`22" × 8" Front & Rear`,
      `4 Wheel Independent Suspension`,`CVT, Gear Box, Differential`
    ],
  },
  {
    year: "2008",
    carNumber: "3/19",
    standing: "2nd Overall in Montreal & 8th Overall in Illinois",
    photoUrl: "images/pastcars/2008.jpg",
    detailPageUrl: "/cars/2008",
    photosLink: [
      { label: "Fabrication: Part 1", url: "https://goo.gl/photos/JtVw8ncuVcjnLs7a7" },
      { label: "Fabrication: Part 2", url: "https://goo.gl/photos/AnGZdrPDLAQEXfa6A" },
      { label: "Fabrication: Part 3", url: "https://goo.gl/photos/DwJs2zNCTWH8ojtj9" },
      { label: "Body Panel Manufacturing", url: "https://goo.gl/photos/TTA69NDRewT34SvG7" },
      { label: "Testing Videos", url: "https://goo.gl/photos/czSWCCanJ6Ce1Qj4A" },
      { label: "Summer Testing", url: "https://goo.gl/photos/bsFaadhPkeoqCtKn9" },
      { label: "Baja SAE Montreal Awards Dinner", url: "https://goo.gl/photos/uZ82At8GhD7sqmc57" },
      { label: "Baja SAE Montreal: Part 1", url: "https://goo.gl/photos/eR4F1AufKJwhoh9E6" },
      { label: "Baja SAE Montreal: Suspension & Traction", url: "https://goo.gl/photos/ECxrmoNs24Qmxz3h6" },
      { label: "Baja SAE Montreal: Endurance Race", url: "https://goo.gl/photos/bjZzYUoJ1fidiL9t7" },
      { label: "Between Competitions", url: "https://goo.gl/photos/2RaW5GMgN3TEscHV7" },
      { label: "Baja SAE Illinois: Part 1", url: "https://goo.gl/photos/kbQXKaaqj5aaK2ZV8" }
    ],
    awards: [
      "Montreal Autodesk Inventor Design Communication Award (2nd Place)",
      "Illinois Autodesk Inventor Design Communication Award (1st Place)",
      "Illinois Polaris Design Award (2nd Place)",
      "Illinois FIRST Robotic Ergonomics Award"
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Tires","Suspension","Powertrain"
    ],
    specValues: [
      `65.8"`,`55.1"`,`87.7"`,`62.7"`,`57.8"`,`503 lbs`,
      `10" × 7" Front & Rear`,`22" × 8" Front & Rear`,
      `4 Wheel Independent Suspension`,`CVT, Gear Box, Differential`
    ],
  },
  {
    year: "2009",
    carNumber: "2",
    standing: "5th Overall in Wisconsin",
    photoUrl: "images/pastcars/2009.jpg",
    detailPageUrl: "/cars/2009",
    photosLink: [
      { label: "Fabrication: Part 1", url: "https://goo.gl/photos/iqeBvHxBSRqLVsz69" },
      { label: "Fabrication: Part 2", url: "https://goo.gl/photos/Dh2C7GVA6AD966mP7" },
      { label: "Baja SAE Wisconsin", url: "https://goo.gl/photos/jXP7zc84fcBmwwJW8" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Tires","Suspension","Powertrain"
    ],
    specValues: [
      `66"`,`54"`,`82"`,`54"`,`46"`,`450 lbs`,
      `10" × 7" Front & Rear`,`23" × 8" Front & Rear`,
      `4 Wheel Independent Suspension`,`CVT, Gear Box, Differential`
    ],
    awards: [
      "Stony Brook Motorsports Promotional Video"
    ]
  },
  {
    year: "2010",
    carNumber: "64",
    standing: "32nd Overall in Rochester",
    photoUrl: "images/pastcars/2010.jpg",
    detailPageUrl: "/cars/2010",
    photosLink: [
      { label: "Baja SAE Rochester", url: "https://goo.gl/photos/PjfUJ2P8ouRPNgd69" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Tires","Suspension","Powertrain"
    ],
    specValues: [
      `62"`,`50.5"`,`85"`,`59"`,`59"`,`430 lbs`,
      `10" × 7" Front & Rear`,`23" × 8" Front & Rear`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2011",
    carNumber: "34",
    standing: "10th Overall in Illinois",
    photoUrl: "images/pastcars/2011.jpg",
    detailPageUrl: "/cars/2011",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/f18Drw9eKZFpGFwc6" },
      { label: "Baja SAE Illinois", url: "https://goo.gl/photos/uWE282WXahjcXCTEA" },
      { label: "2011 Baja SAE Illinois", url: "https://www.youtube.com/watch?v=MdFbQzdB9i4" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Tires","Suspension","Powertrain"
    ],
    specValues: [
      `63"`,`54"`,`82"`,`54"`,`46"`,`425 lbs`,
      `10" × 7" Front & Rear`,`23" × 7" Front & Rear`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2012",
    carNumber: "10/96",
    standing: "33rd Overall in Oregon & 21st Overall in Wisconsin",
    photoUrl: "images/pastcars/2012.jpg",
    detailPageUrl: "/cars/2012",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/Kdqp8tQpHJud8KLH7" },
      { label: "Baja SAE Wisconsin", url: "https://goo.gl/photos/H64cMohZmPUYffXy7" },
      { label: "Baja SAE Oregon", url: "https://goo.gl/photos/sHVvPBwzbcdYxbEA8" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `60"`,`62"`,`82"`,`54"`,`46"`,`396 lbs`,
      `10" × 7" Front & Rear`,`22" × 7" Dunlop KT171`,`23" × 7" Maxxis Razr 2`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2013",
    carNumber: "45",
    standing: "36th Overall in Rochester",
    photoUrl: "images/pastcars/2013.jpg",
    detailPageUrl: "/cars/2013",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/MqW7GTRZTbLX75SJ7" },
      { label: "Baja SAE Rochester", url: "https://goo.gl/photos/Uetd379EF7bjdRf99" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59.5"`,`52.5"`,`82"`,`59"`,`59"`,`378 lbs`,
      `10" × 7" Front & Rear`,`22" × 7" Dunlop KT171`,`23" × 7" Kenda Bearclaw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2014",
    carNumber: "68",
    standing: "16th Overall in Illinois",
    photoUrl: "images/pastcars/2014.jpg",
    detailPageUrl: "/cars/2014",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/iE5i9xyUQMsjS1oc9" },
      { label: "Baja SAE Illinois", url: "https://goo.gl/photos/eiu31AxLUtpobnwz7" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59.5"`,`52"`,`82"`,`59"`,`59"`,`374 lbs`,
      `10" × 7" Front & Rear`,`22" × 7" Maxxis RAZR2`,`23" × 7" Kenda Claw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2015",
    carNumber: "18",
    standing: "70th Overall in Maryland",
    photoUrl: "images/pastcars/2015.jpg",
    detailPageUrl: "/cars/2015",
    photosLink: [
      { label: "Baja SAE Maryland", url: "https://goo.gl/photos/4w1e3ApXzz3kep83A" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`82"`,`59"`,`60"`,`367 lbs`,
      `10" × 7" Front & Rear`,`22" × 7" Maxxis RAZR2`,`23" × 7" Kenda Claw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2016",
    carNumber: "22",
    standing: "46th Overall in Rochester",
    photoUrl: "images/pastcars/2016.jpg",
    detailPageUrl: "/cars/2016",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/9nwyDoUggJ9prFJn7" },
      { label: "Baja SAE Rochester", url: "https://goo.gl/photos/dL3fe4DLk9fpzdHu5" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `58"`,`52"/50"`,`82"`,`60"`,`61"`,`368 lbs`,
      `10" × 7" Front & Rear`,`22" × 7" Maxxis RAZR2`,`22" × 7" Maxxis RAZR2`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2017",
    carNumber: "15/125",
    standing: "27th Overall in Kansas & 61st Overall in Illinois",
    photoUrl: "images/pastcars/2017.jpg",
    detailPageUrl: "/cars/2017",
    photosLink: [
      { label: "Fabrication", url: "https://goo.gl/photos/9u6NvxjEFnQvXJ52A" },
      { label: "Involvement Fairs", url: "https://goo.gl/photos/fPt1q4kKr4DWNmcT8" },
      { label: "New Member Competition", url: "https://goo.gl/photos/rt53ZKT4xQ1S3G6u7" },
      { label: "Wolfstock", url: "https://goo.gl/photos/WK8VT2Poy47MhMQUA" },
      { label: "Three Village Holiday Parade", url: "https://goo.gl/photos/1YiuEeAqyzwJ9gok9" },
      { label: "Baja SAE Kansas", url: "https://photos.app.goo.gl/eTM3nJsi81nNxm9t9" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"`,`83"`,`59"`,`60"`,`390 lbs`,
      `10" × 7" Front & Rear`,`22x7-10 Maxxis RAZR2`,`22x7-10 Maxxis RAZR2`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2018",
    carNumber: "22",
    standing: "31st Overall in Oregon",
    photoUrl: "images/pastcars/2018.png",
    detailPageUrl: "/cars/2018",
    photosLink: [
      { label: "Fabrication", url: "https://photos.app.goo.gl/F8VooVZbv23qnGjA8" },
      { label: "Involvement Fairs", url: "https://photos.app.goo.gl/DZpYz9SmWNvKVZ9x5" },
      { label: "New Member Competition", url: "https://photos.app.goo.gl/P2ejpyWsNpm7key26" },
      { label: "CommUniversity Day", url: "https://photos.app.goo.gl/r3Qx9hVDrEku1sgC7" },
      { label: "Wolfieland", url: "https://photos.app.goo.gl/Pj936YYq66MBYs4X8" },
      { label: "Baja SAE Oregon", url: "https://photos.app.goo.gl/oQJACw3ccqcGVVur8" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`83"`,`59"`,`60"`,`390 lbs`,
      `10" × 7" Front & Rear`,`22x7-10 Maxxis RAZR2`,`23x7-10 Kenda Claw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2019",
    carNumber: "14",
    standing: "43rd Overall in Rochester",
    photoUrl: "images/pastcars/2019.jpg",
    detailPageUrl: "/cars/2019",
    photosLink: [
      { label: "Fabrication", url: "https://photos.app.goo.gl/wAHvUF427Rb2ZmrYA" },
      { label: "New Member Competition", url: "https://photos.app.goo.gl/ZU46h1StiptV9v7f9" },
      { label: "CommUniversity Day", url: "https://photos.app.goo.gl/DqLjBXCfWvMoN1Tq8" },
      { label: "Baja SAE Rochester", url: "https://photos.app.goo.gl/CaRrmJf8yFjwefTs6" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`83"`,`59"`,`60"`,`390 lbs`,
      `10" × 7" Front & Rear`,`22x7-10 STI Tech 4`,`23x7-10 Kenda Claw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  // 2020 & 2021 skipped
  {
    year: "2022",
    carNumber: "14",
    standing: "70th Overall in Rochester",
    photoUrl: "images/pastcars/2022.jpg",
    detailPageUrl: "/cars/2022",
    photosLink: [
      { label: "Fabrication", url: "https://photos.app.goo.gl/" },
      { label: "Involvement Fairs", url: "https://photos.app.goo.gl/" },
      { label: "New Member Competition", url: "https://photos.app.goo.gl/" },
      { label: "CommUniversity Day", url: "https://photos.app.goo.gl/" },
      { label: "Baja SAE Rochester", url: "https://photos.app.goo.gl/" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`83"`,`59"`,`60"`,`360 lbs`,
      `10" × 5" Front & Rear`,`22x7-10 Maxxis RAZR2`,`23x7-10 Kenda Bear Klaw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle`
    ],
  },
  {
    year: "2023",
    carNumber: "15",
    standing: "62nd Overall in Oregon",
    photoUrl: "images/pastcars/2023.jpg",
    detailPageUrl: "/cars/2023",
    photosLink: [
      { label: "Fabrication", url: "https://photos.app.goo.gl/" },
      { label: "Involvement Fairs", url: "https://photos.app.goo.gl/" },
      { label: "New Member Competition", url: "https://photos.app.goo.gl/" },
      { label: "CommUniversity Day", url: "https://photos.app.goo.gl/" },
      { label: "Baja SAE Rochester", url: "https://photos.app.goo.gl/" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`86"`,`59"`,`63"`,`560 lbs`,
      `10" × 5" Front & Rear`,`23x7-10 Maxxis RAZR2`,`23x7-10 Kenda Bear Klaw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle, Transfer Case, 4WD`
    ],
  },
  {
    year: "2024",
    carNumber: "86/99",
    standing: "31st Overall in California & 25th Overall in Williamsport; 13th Maneuverability & 10th Endurance",
    photoUrl: "images/pastcars/2024.jpg",
    detailPageUrl: "/cars/2024",
    photosLink: [
      { label: "Fabrication", url: "https://photos.app.goo.gl/" },
      { label: "Involvement Fairs", url: "https://photos.app.goo.gl/" },
      { label: "New Member Competition", url: "https://photos.app.goo.gl/" },
      { label: "CommUniversity Day", url: "https://photos.app.goo.gl/" },
      { label: "Baja SAE Rochester", url: "https://photos.app.goo.gl/" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`86"`,`59"`,`63"`,`560 lbs`,
      `10" × 5" Front & Rear`,`23x7-10 Maxxis RAZR2`,`23x7-10 Kenda Bear Klaw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle, Transfer Case, 4WD`
    ],
  },
  {
    year: "2025",
    carNumber: "92",
    standing: "40th Overall in Maryland",
    photoUrl: "images/pastcars/2024.jpg",
    detailPageUrl: "/cars/2024",
    photosLink: [
      { label: "Fabrication", url: "https://photos.app.goo.gl/" },
      { label: "Involvement Fairs", url: "https://photos.app.goo.gl/" },
      { label: "New Member Competition", url: "https://photos.app.goo.gl/" },
      { label: "CommUniversity Day", url: "https://photos.app.goo.gl/" },
      { label: "Baja SAE Rochester", url: "https://photos.app.goo.gl/" }
    ],
    specNames: [
      "Wheel Base","Track","Length","Width","Height","Weight","Wheels","Front Tires","Rear Tires","Suspension","Powertrain"
    ],
    specValues: [
      `59"`,`52"/50"`,`86"`,`59"`,`63"`,`500 lbs`,
      `10" × 5" Front & Rear`,`23x7-10 Maxxis RAZR2`,`23x7-10 Kenda Bear Klaw`,
      `4 Wheel Independent Suspension`,`CVT, Transaxle, Transfer Case, 4WD`
    ],
  },
];

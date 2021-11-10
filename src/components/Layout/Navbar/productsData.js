import { BsLifePreserver } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export const productsData = [
  {
    id: 1,
    category: "Auto Insurance",
    icon: <AiFillCar />,
    subcat: [
      {
        id: 1,
        category: "Two Insurance",
        link: "/home/auto/two-wheeler",
      },
      {
        id: 2,
        category: "Three Wheeler Insurance",
        link: "/home/auto/three-wheeler",
      },
      {
        id: 3,
        category: "Bus or Truck Insurance",
        link: "/home/auto/commercial",
      },
      {
        id: 4,
        category: "Van Insurance",
        link: "/home/auto/commercial",
      },
      {
        id: 4,
        category: "Private Car Insurance",
        link: "/home/auto/private",
      },
    ],
  },
  {
    id: 2,
    category: "Life Insurance",
    icon: <BsLifePreserver />,
    subcat: [
      {
        id: 1,
        category: "Private Life Insurance",
        link: "/home/life/",
      },
      {
        id: 2,
        category: "Term Life Insurance",
        link: "/home/life/",
      },
      {
        id: 3,
        category: "Group Life Insurance",
        link: "/home/life/",
      },
    ],
  },
  {
    id: 3,
    category: "Health Insurace",
    icon: <MdHealthAndSafety />,
    subcat: [
      {
        id: 1,
        category: "PPO",
        depth: 2,
        link: "/home/health/PPO",
      },
      {
        id: 2,
        category: "HMO",
        depth: 2,
        link: "/home/health/HMO",
      },
      {
        id: 3,
        category: "Point of Service",
        depth: 2,
        link: "/home/health/point-of-service",
      },
      {
        id: 4,
        category: "Health Saving",
        depth: 2,
        link: "/home/health/health-saving",
      },
    ],
  },
  {
    id: 4,
    category: "Travel Insurance",
    icon: <GiCommercialAirplane />,
    subcat: [
      {
        id: 1,
        category: "Single Trip",
        depth: 2,
        link: "/home/travel/single-trip",
      },
      {
        id: 2,
        category: "Multi Trip",
        depth: 2,
        link: "/home/travel/multi-trip",
      },
    ],
  },
];

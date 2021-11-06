import { BsLifePreserver } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export const navdata = [
  {
    id: 1,
    category: "Insurance Products",
    depth: 0,
    subcat: [
      {
        id: 1,
        category: "Auto Insurance",
        depth: 1,
        icon: <AiFillCar />,
        subcat: [
          {
            id: 1,
            category: "Two Wheeler",
            depth: 2,
            link: "/home/auto/two-wheeler",
          },
          {
            id: 2,
            category: "Three Wheeler",
            depth: 2,
            link: "/home/auto/three-wheeler",
          },
          {
            id: 3,
            category: "Commercial Auto",
            depth: 2,
            link: "/home/auto/commercial",
          },
          {
            id: 4,
            category: "Private Auto",
            depth: 2,
            link: "/home/auto/private",
          },
        ],
      },
      {
        id: 2,
        category: "Life Insurance",
        depth: 1,
        icon: <BsLifePreserver />,
        subcat: [
          {
            id: 1,
            category: "Private Life Insurance",
            depth: 2,
            link: "/home/life/",
          },
          {
            id: 2,
            category: "Term Life Insurance",
            depth: 2,
            link: "/home/life/",
          },
          {
            id: 3,
            category: "Group Life Insurance",
            depth: 2,
            link: "/home/life/",
          },
        ],
      },
      {
        id: 3,
        category: "Health Insurace",
        depth: 1,
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
        depth: 1,
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
    ],
  },
  {
    id: 2,
    category: "Policy Renew",
    depth: 0,
    subcat: [
      {
        id: 1,
        category: "Auto Insurance Renewal",
        depth: 1,
      },
      {
        id: 2,
        category: "Life Insurance Renewal",
        depth: 1,
      },
      {
        id: 3,
        category: "Health Insurance Renewal",
        depth: 1,
      },
      {
        id: 4,
        category: "Travel Insurance Renewal",
        depth: 1,
      },
    ],
  },
  {
    id: 3,
    category: "File a Claim",
    depth: 0,
  },
];

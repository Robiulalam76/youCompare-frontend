import { BsLifePreserver } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export const autoInsuranceRoutes = {
  id: 1,
  category: "Auto Insurance",
  icon: <AiFillCar style={{ color: "gray" }} />,
  subcat: [
    {
      id: 1,
      category: "Private Car Insurance",
      link: "/home/auto/private",
    },
    {
      id: 2,
      category: "Two Wheeler Insurance",
      link: "/home/auto/two-wheeler",
    },
    {
      id: 3,
      category: "Three Wheeler Insurance",
      link: "/home/auto/three-wheeler",
    },
    {
      id: 4,
      category: "Commercial Bus or Van Insurance",
      link: "/home/auto/commercial/bus_van",
    },
    {
      id: 5,
      category: "Commercial Truck Insurance",
      link: "/home/auto/commercial/truck",
    },
    {
      id: 6,
      category: "Commercial Car Insurance",
      link: "/home/auto/commercial/car",
    }
  ],
};

export const lifeInsuranceRoutes = {
  id: 2,
  category: "Life Insurance",
  icon: <BsLifePreserver style={{ color: "gray" }} />,
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
};

export const travelInsuranceRoutes = {
  id: 3,
  category: "Travel Insurance",
  icon: <GiCommercialAirplane style={{ color: "gray" }} />,
  subcat: [
    {
      id: 1,
      category: "Single Trip",
      link: "/home/travel/single-trip",
    },
    {
      id: 2,
      category: "Multi Trip",
      link: "/home/travel/multi-trip",
    },
  ],
};
export const healthInsuranceRoutes = {
  id: 4,
  category: "Health Insurace",
  icon: <MdHealthAndSafety style={{ color: "gray" }} />,
  subcat: [
    {
      id: 1,
      category: "PPO",
      link: "/home/health/PPO",
    },
    {
      id: 2,
      category: "HMO",
      link: "/home/health/HMO",
    },
    {
      id: 3,
      category: "Point of Service",
      link: "/home/health/point-of-service",
    },
    {
      id: 4,
      category: "Health Saving",
      link: "/home/health/health-saving",
    },
  ],
};

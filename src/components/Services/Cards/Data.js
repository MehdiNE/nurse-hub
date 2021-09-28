// import Card from "../UI/Card";
import BuyCard from "./BuyCard";
import "./Data.css";

import child from "../../../Assets/Services-icons/child.png";
import stethoscope from "../../../Assets/Services-icons/icons8-stethoscope-24.png";
import assistive from "../../../Assets/Services-icons/icons8-assistive-technology-24.png";
import nurse from "../../../Assets/Services-icons/icons8-nurse-24.png";
import tooth from "../../../Assets/Services-icons/icons8-tooth-cracked-24.png";
import stick from "../../../Assets/Services-icons/icons8-walking-stick-24.png";

// import classes from "./AvailableMeals.module.css";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "مراقبت از بیمار کرونایی",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: nurse,
    price: 0,
  },
  {
    id: "m2",
    name: "مراقبت از کودک",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: child,
    price: 0,
  },
  {
    id: "m3",
    name: "مراقبت از سالمندان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: stick,
    price: 0,
  },
  {
    id: "m4",
    name: "معاینه بیماری های خفیف",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: stethoscope,
    price: 0,
  },

  {
    id: "m5",
    name: "مشاوره روان پزشکی",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: stethoscope,
    price: 0,
  },
  {
    id: "m6",
    name: " مراقبت از معلولان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: assistive,
    price: 0,
  },
  {
    id: "m7",
    name: "دندان پزشکی",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: tooth,

    price: 0,
  },
  {
    id: "m8",
    name: " مراقبت از معلولان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    icon: stethoscope,
    price: 0,
  },
];

const Data = () => {
  const dataList = DUMMY_DATA.map((data, index) => (
    <BuyCard
      key={data.id}
      name={data.name}
      item={data}
      description={data.description}
      icon={data.icon}
      price={data.price}
    />
  ));

  return <div className="cards">{dataList}</div>;
};

export default Data;

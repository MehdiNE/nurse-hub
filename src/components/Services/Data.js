// import Card from "../UI/Card";
import BuyCard from "./BuyCard";
import "./Data.css";

// import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "مراقبت از بیمار کرونایی",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },
  {
    id: "m2",
    name: "مراقبت از کودک",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },
  {
    id: "m3",
    name: "مراقبت از سالمندان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },
  {
    id: "m4",
    name: " مراقبت از معلولان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },

  {
    id: "m5",
    name: " مراقبت از معلولان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },
  {
    id: "m6",
    name: " مراقبت از معلولان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },
  {
    id: "m7",
    name: " مراقبت از معلولان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },
  {
    id: "m8",
    name: " مراقبت از معلولان",
    description: ` طراحی اساسا مورد استفاده قرار گیرد. چینی دستاورد اصلیه حروف چینیها دستاوردهای اصلی 
    `,
    price: 0,
  },
];

const Data = () => {
  const mealsList = DUMMY_MEALS.map((meal, index) => (
    <BuyCard
      key={meal.id}
      name={meal.name}
      item={meal}
      description={meal.description}
      price={meal.price}
    />
  ));

  return <div className="cards">{mealsList}</div>;
};

export default Data;

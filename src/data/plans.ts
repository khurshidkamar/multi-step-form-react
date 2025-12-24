export interface Plan {
  id: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: string;
}

export const plans: Plan[] = [
  {
    id: "arcade",
    title: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: "src/assets/icon-arcade.svg",
  },
  {
    id: "advanced",
    title: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: "src/assets/icon-advanced.svg",
  },
  {
    id: "pro",
    title: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: "src/assets/icon-pro.svg",
  },
];

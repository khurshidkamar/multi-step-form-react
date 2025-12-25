export interface AddOn {
  id: string;
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export const addon: AddOn[] = [
  {
    id: "1",
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "2",
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "3",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

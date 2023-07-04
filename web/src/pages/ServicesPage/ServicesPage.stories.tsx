import type { ComponentMeta } from "@storybook/react";

import ServicesPage from "./ServicesPage";

export const generated = () => {
  return <ServicesPage />;
};

export default {
  title: "Pages/ServicesPage",
  component: ServicesPage,
} as ComponentMeta<typeof ServicesPage>;

import type { ComponentMeta } from "@storybook/react";

import PortfolioPage from "./PortfolioPage";

export const generated = () => {
  return <PortfolioPage />;
};

export default {
  title: "Pages/PortfolioPage",
  component: PortfolioPage,
} as ComponentMeta<typeof PortfolioPage>;

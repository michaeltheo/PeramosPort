import { navigation } from "./navigation";
import { services } from "./services";
import { home } from "./home";
import { notFound } from "./notFound";

export const bg = {
  ...navigation,
  ...services,
  ...home,
  ...notFound,
};

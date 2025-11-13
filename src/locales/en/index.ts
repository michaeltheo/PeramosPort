import { navigation } from "./navigation";
import { services } from "./services";
import { home } from "./home";
import { notFound } from "./notFound";

export const en = {
  ...navigation,
  ...services,
  ...home,
  ...notFound,
};

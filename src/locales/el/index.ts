import { navigation } from "./navigation";
import { services } from "./services";
import { home } from "./home";
import { notFound } from "./notFound";
import { footer } from "./footer";

export const el = {
  ...navigation,
  ...services,
  ...home,
  ...notFound,
  ...footer,
};

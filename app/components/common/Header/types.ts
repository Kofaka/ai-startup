// Constants
import { RouteName } from '@/app/constants';

export type NavSubItem = {
  label: string;
  href: RouteName;
}

export type NavItem = {
  label: string,
} & ({
  href: RouteName,
  subItems?: never,
} | {
  href?: never,
  subItems: NavSubItem[],
});

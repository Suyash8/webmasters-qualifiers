import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="flex flex-row justify-between w-full px-16 py-16">
      <Link href="/">
        <span>Logo</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/genres">
              <NavigationMenuItem>Genres</NavigationMenuItem>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/movies">
              <NavigationMenuItem>Movies</NavigationMenuItem>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default HeaderComponent;

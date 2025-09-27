import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CircleIcon } from "lucide-react";
export default function Toolbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Algorithms</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>BFS</NavigationMenuLink>
              <NavigationMenuLink>Djikstra</NavigationMenuLink>
              <NavigationMenuLink>A*</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Mazes & Patterns</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Speed</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <div className="flex-row items-center gap-2">
                      <CircleIcon />
                      Fast
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <div className="flex-row items-center gap-2">
                      <CircleIcon />
                      Average
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <div className="flex-row items-center gap-2">
                      <CircleIcon />
                      Slow
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button>Start</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

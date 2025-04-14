import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

// ❖ Footer
interface FigmaFooterProps extends BaseFigmaProps {}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Footer",
  componentKey: "67063895062792c7c36cd5a67945f071bea9a04d",
  mapper(figma: FigmaFooterProps) {
    // Find main sections
    const description = figma.$findOneByName("Lorem ipsum")?.$textContent;
    const menuOptions = figma.$findOneByName("Menu Options");
    const logo = figma.$findOneByName("SHOPAHOLIC")?.$textContent;

    return (
      <Footer>
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">{logo}</div>

          {/* Description Section */}
          <div className="footer-description">{description}</div>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {menuOptions?.$children.map(
                (item) =>
                  item?.$type === "TEXT" && (
                    <NavigationMenuItem>
                      <NavigationMenuLink href="#">
                        {item.$textContent}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Actions Section */}
          <div className="footer-actions">
            <Button variant="ghost">
              {figma.$findOneByName("SIGN IN")?.$textContent}
            </Button>
          </div>
        </div>
      </Footer>
    );
  },
});

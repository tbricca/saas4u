import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Footer } from "@/components/Footer";
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
        {description && (
          <div className="footer-content mb-8">
            {logo && <div className="footer-logo text-xl font-semibold mb-4">{logo}</div>}
            <div className="footer-description text-gray-400">{description}</div>
            {menuOptions && (
              <NavigationMenu className="mt-6">
                <NavigationMenuList>
                  {menuOptions.$children.map(
                    (item, index) =>
                      item?.$type === "TEXT" && (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink href="#" className="text-gray-400 hover:text-white transition-colors">
                            {item.$textContent}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
        )}
      </Footer>
    );
  },
});

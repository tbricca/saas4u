import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ImageHero } from "@/components/Hero/ImageHero";

// ❖ Hero
interface FigmaHeroProps extends BaseFigmaProps {
  buttonText?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Hero",
  componentKey: "a837183f3e395ee854e766fa12efe4b9279d2d6e",
  mapper(figma: FigmaHeroProps) {
    // Get background image from rectangle
    const backgroundImage =
      figma.$findOneByName("tamara-bellis-IwVRO3TLjLc-unsplash 1")?.$imageUrl ??
      "";

    // Get title and button text, either from props or from tree
    const title =
      figma.Title ?? figma.$findOneByName("Title")?.$textContent ?? "";
    const buttonText =
      figma.buttonText ??
      figma.$findOneByName("Shop Now")?.$textContent ??
      "Shop Now";

    return (
      <ImageHero
        title={title}
        subTitle="" // Required prop but not in Figma, using empty string as default
        buttonText={buttonText}
        buttonLink="#" // Required prop but not in Figma, using "#" as default
        backgroundImage={backgroundImage}
        alignment="center" // Required prop but not in Figma, using "center" as default
        makeFullBleed={false} // Required prop but not in Figma, using false as default
      />
    );
  },
});

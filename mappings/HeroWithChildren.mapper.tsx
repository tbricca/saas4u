import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import HeroWithChildren from "@/components/Hero/HeroWithChildren";
import { BuilderBlocks } from "@builder.io/react";

// ❖ HeroWithChildren
interface FigmaHeroWithChildrenProps extends BaseFigmaProps {
  header?: string;
  makeFullBleed?: boolean;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "HeroWithChildren",
  componentKey: "a837183f3e395ee854e766fa12efe4b9279d2d6e",
  mapper(figma: FigmaHeroWithChildrenProps) {
    return (
      <HeroWithChildren
        header={figma.header || ""}
        makeFullBleed={figma.makeFullBleed || false}
        childBlocks={[]}
      />
    );
  },
});

import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextHero } from "@/components/Hero/TextHero";

// ❖ TextHero
interface FigmaTextHeroProps extends BaseFigmaProps {
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "TextHero",
  componentKey: "d479e90b2bc223b6bf044c269f800f37c94ae804",
  mapper(figma: FigmaTextHeroProps) {
    return <TextHero title={figma.Title ?? ""} subTitle="" />;
  },
});

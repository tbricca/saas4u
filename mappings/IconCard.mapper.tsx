import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import IconCard from "@/components/Card/IconCard";

// ❖ IconCard
interface FigmaIconCardProps extends BaseFigmaProps {
  icon?: string;
  title?: string;
  description?: string;
  altText?: string;
  coloredBackground?: boolean;
  alignment?: 'left' | 'center' | 'right';
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "IconCard",
  componentKey: "a837183f3e395ee854e766fa12efe4b9279d2d6e",
  mapper(figma: FigmaIconCardProps) {
    return (
      <IconCard
        icon={figma.icon || "https://via.placeholder.com/100"}
        title={figma.title || "Card Title"}
        description={figma.description || "Card description goes here..."}
        altText={figma.altText || "Icon"}
        coloredBackground={figma.coloredBackground || false}
        alignment={figma.alignment || "center"}
      />
    );
  },
});

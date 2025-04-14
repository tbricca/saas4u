import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { IconCard } from "@/components/Card/IconCard";

// ❖ IconCard
interface FigmaIconCardProps extends BaseFigmaProps {
  Description?: string;
  Collection?: string;
  Title?: string;
  Icon?: string;
  Alignment?: "Center" | "Left" | "Right" | "Alignment4";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "IconCard",
  componentKey: "52454ebe6a528eb41954cc50fb390b43afd8b981",
  mapper(figma: FigmaIconCardProps) {
    // Transform alignment to lowercase for React component
    const alignment = figma.Alignment?.toLowerCase() as
      | "center"
      | "left"
      | "right"
      | undefined;

    // Generate altText from title or use a default
    const altText = figma.Title ? `Icon for ${figma.Title}` : "Card icon";

    return (
      <IconCard
        icon={figma.Icon ?? ""}
        title={figma.Title ?? ""}
        description={figma.Description ?? ""}
        altText={altText}
        alignment={alignment}
      />
    );
  },
});

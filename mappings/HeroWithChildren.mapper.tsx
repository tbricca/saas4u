import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { HeroWithChildren } from "@/components/Hero/HeroWithChildren";
import { IconCard } from "@/components/Card/IconCard";

// ❖ HeroWithChildren
interface FigmaHeroWithChildrenProps extends BaseFigmaProps {
  Header?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "HeroWithChildren",
  componentKey: "0130f89f740663ddaaf26c3021c83ee9e67d5273",
  mapper(figma: FigmaHeroWithChildrenProps) {
    const frame11 = figma.$findOneByName("Frame 11");

    return (
      <HeroWithChildren>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-center">{figma.Header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frame11?.$children.map((card, index) => {
              if (card?.$type !== "INSTANCE") return null;

              const title = card.$findOneByName("Title")?.$textContent;
              const description =
                card.$findOneByName("Description")?.$textContent;

              return (
                <IconCard>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </IconCard>
              );
            })}
          </div>
        </div>
      </HeroWithChildren>
    );
  },
});

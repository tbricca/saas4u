import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

// ❖ ProgressBar
interface FigmaProgressBarProps extends BaseFigmaProps {
  Value?: string;
}

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "ProgressBar",
  componentKey: "e040aba24013a590437d4e8618309227b993e5af",
  mapper(figma: FigmaProgressBarProps) {
    // Extract the value from props, default to empty string if undefined
    const value = figma.Value ?? "";

    return (
      <div style={{ position: "relative" }}>
        {/* Rectangle background */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0", // Default background color
          }}
        />

        {/* Value display */}
        <div
          style={{
            position: "relative",
            padding: "8px",
            textAlign: "center",
          }}
        >
          {value}
        </div>
      </div>
    );
  },
});

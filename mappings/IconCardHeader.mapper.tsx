import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

// ❖ IconCard/Header
interface FigmaIconCardHeaderProps extends BaseFigmaProps {
  Title?: string;
}

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "IconCard/Header",
  componentKey: "349b2e5ade59660c7f31653f3419aeaf585bcdda",
  mapper(figma: FigmaIconCardHeaderProps) {
    // Find main sections
    const menuOptions = figma.$findOneByName("Menu Options");
    const logo = figma.$findOneByName("SHOPAHOLIC");
    const shoppingCart = figma.$findOneByName("Shopping Cart");
    const signInButton = figma.$findOneByName("Sign In Button");

    // Extract menu items
    const menuItems = menuOptions?.$children
      .map((item) => item?.$textContent)
      .filter(Boolean);

    return (
      <nav style={{ width: "100%", padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {logo && <h1>{logo.$textContent}</h1>}
          </div>

          {/* Menu Options */}
          <div style={{ display: "flex", gap: "2rem" }}>
            {menuItems?.map((item, index) => (
              <span style={{ cursor: "pointer" }}>{item}</span>
            ))}
          </div>

          {/* Actions Section */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {shoppingCart && (
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <CartIcon />
              </button>
            )}
            {signInButton && (
              <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
                {signInButton.$findOneByName("SIGN IN")?.$textContent}
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  },
});

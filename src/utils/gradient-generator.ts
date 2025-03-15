import tinycolor from "tinycolor2";

export const generateSophisticatedGradient = () => {
  // Helper function to check if colors are too similar
  const isColorTooSimilar = (color1: string, existingColors: string[]) => {
    return existingColors.some((existing) => {
      const diff = tinycolor.readability(color1, existing);
      return diff < 1.5;
    });
  };

  // Generate unique base color
  const generateUniqueColor = (existingColors: string[] = []) => {
    let attempts = 0;
    let newColor;

    do {
      newColor = tinycolor({
        h: Math.random() * 360,
        s: 55 + Math.random() * 25,
        l: 60 + Math.random() * 20,
      }).toHexString();

      attempts++;
    } while (attempts < 10 && isColorTooSimilar(newColor, existingColors));

    return newColor;
  };

  // Generate gradient colors
  const mainColor = generateUniqueColor();
  const midColor = tinycolor(mainColor).spin(30).saturate(10).toHexString();
  const midVariant = tinycolor(midColor).setAlpha(0.65).toHexString();

  return [mainColor, midVariant, midColor];
};


export const generateGradientOrientation = () => {
  const randomCoordinate = () => Math.random(); // Generate a random value between 0 and 1
  return {
    start: { x: randomCoordinate(), y: randomCoordinate() },
    end: { x: randomCoordinate(), y: randomCoordinate() },
  };
};

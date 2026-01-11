module.exports = (text) => {
  const words = text.split(" ");
  const wordCount = words.length;

  let fluencyScore = 60;
  if (wordCount > 50) fluencyScore += 10;
  if (!text.includes("um") && !text.includes("uh")) fluencyScore += 10;

  const suggestions = [];
  if (text.includes("um") || text.includes("uh"))
    suggestions.push("Reduce filler words like um, uh");

  if (wordCount < 30)
    suggestions.push("Try to speak longer for better clarity");

  return {
    wordCount,
    fluencyScore,
    suggestions
  };
};

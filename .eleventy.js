module.exports = function(eleventyConfig) {
  // Pass through all existing folders unchanged
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("btp");
  eleventyConfig.addPassthroughCopy("dailyverses");
  eleventyConfig.addPassthroughCopy("prayer");
  eleventyConfig.addPassthroughCopy("hc");
  eleventyConfig.addPassthroughCopy("bible");
  eleventyConfig.addPassthroughCopy("category");

  // Pass through all HTML files in root (existing pages)
  eleventyConfig.addPassthroughCopy("*.html");

  // Ignore the _includes and _data folders for passthrough
  eleventyConfig.ignores.add("_includes/**");
  eleventyConfig.ignores.add("_data/**");
  eleventyConfig.ignores.add("node_modules/**");

  // Watch for changes in these folders
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addWatchTarget("./js/");

  // Add date filter for footer year
  eleventyConfig.addFilter("date", function(date, format) {
    if (format === "%Y") {
      return new Date().getFullYear();
    }
    return date;
  });

  return {
    dir: {
      input: "src",           // Only process files in src/ folder
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};

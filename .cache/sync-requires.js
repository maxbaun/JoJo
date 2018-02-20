// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/maxbaun/Projects/JoJo/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-dolphin-js": preferDefault(require("/Users/maxbaun/Projects/JoJo/src/templates/dolphin.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/maxbaun/Projects/JoJo/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/maxbaun/Projects/JoJo/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/maxbaun/Projects/JoJo/src/pages/index.js")),
  "component---src-pages-photos-js": preferDefault(require("/Users/maxbaun/Projects/JoJo/src/pages/photos.js")),
  "component---src-pages-videos-js": preferDefault(require("/Users/maxbaun/Projects/JoJo/src/pages/videos.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/maxbaun/Projects/JoJo/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "jojo.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/jojo.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "mojo.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/mojo.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "about.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/about.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/index.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "photos.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/photos.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "videos.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/videos.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "404.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/404.json"),
  "layout-index.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/maxbaun/Projects/JoJo/.cache/json/404-html.json")
}
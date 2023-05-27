
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/krishnajha/Desktop/Projects/Personal/personal-site2.0/packages/frontend/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/krishnajha/Desktop/Projects/Personal/personal-site2.0/packages/frontend/src/pages/index.tsx"))
}


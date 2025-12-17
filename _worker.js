export default {
  async fetch(request) {
    // 1. Define your target base URL
    const GITHUB_BASE = "https://brandner.github.io";

    // 2. Parse the incoming request URL
    const url = new URL(request.url);
    const path = url.pathname;

    // 3. Handle the specific exception first (Order matters!)
    if (path === "/4970833") {
      return Response.redirect(`${GITHUB_BASE}/match.html`, 301);
    }

    // 4. Handle the root path (Standard behavior)
    // Checks for empty slash or explicit index.html
    if (path === "/" || path === "/index.html") {
      return Response.redirect(`${GITHUB_BASE}`, 301);
    }

    // 5. Handle all other subfolders/paths (The Catch-All)
    // This captures /foo, /bar/baz, /anything-else
    return Response.redirect(`${GITHUB_BASE}/subfolder.html`, 301);
  },
};
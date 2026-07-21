// GitHub Pages serves this site from /portfolio_code, but next/image and plain
// hrefs don't get the basePath applied automatically when images are unoptimized.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (path: string) => `${BASE_PATH}${path}`;

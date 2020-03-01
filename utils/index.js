import path from "path"

export function resolvePath(routePath, basePath) {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(basePath)) {
    return basePath
  }
  return path.resolve(basePath, routePath)
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
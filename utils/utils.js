export const createId = () => {
  const str = performance.now().toString(36) + Math.random().toString(36)
  return str.replace(/\./g, '').padEnd(17, 'x').substr(1, 15)
}
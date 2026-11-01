/// <reference types="vite/client" />
declare module '*.svg' {
  const content: React.FC<{ className?: string }>
  export default content
}

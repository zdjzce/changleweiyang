declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

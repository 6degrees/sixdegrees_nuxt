import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "preview"
declare module "C:/Users/atheer/Documents/GitHub/sixdegrees_nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
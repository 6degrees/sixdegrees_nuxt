import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "preview"
declare module "C:/Users/atheer/Downloads/wetransfer_main_files_2024-07-07_0656/Main_Files/sixdegrees_nuxtjs/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
export type TPost = { thumb: string; title: string; url: string }

export type TArticle = {} & TPost & {
    description: string
    tag: string
    time: string
    urlTag: string
  }

export type TBreadcrumbWithUrl = {
  title: string
  url?: string
}

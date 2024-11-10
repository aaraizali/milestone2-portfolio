interface HeaderItem {
    label: string,
    page: string,
}

export interface NavItems {
    home: HeaderItem,
    about: HeaderItem,
    projects: HeaderItem,
    contact: { label: string, page: string }
}
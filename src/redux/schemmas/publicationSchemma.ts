type Icon = {
    id: number,
    library: String,
    tag: String
}
export type ContactData = {
    id: number,
    text?: String,
    number?: String,
    url?: string,
    txt: String,
    type: String,
    icon: Icon
}
type Data = {
    id: number,
    library: String
    tag: string
    detail: String
}
type Colors = {
    id: number,
    color: string,
    name: String,
    images: String[],
}
export type Sizes = {
    id: number,
    size: String,
}
export type Publication = {
    id: Number,
    title: String,
    status: Boolean,
    price: Number,
    contactData: ContactData[],
    data: Data[],
    colors: Colors[]
    sizes: Sizes[],
}


type Icon = {
    id: number,
    library: String,
    tag: String
}
export type ContactData = {
    id: Number,
    text?: String,
    number?: String,
    url?: String,
    txt: String,
    type: String,
    icon: Icon
}
type Data = {
    id: number,
    library: String
    tag: String
    detail: String
}
type Colors = {
    id: number,
    color: String,
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


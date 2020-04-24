
export type AddressObject = {
  post_id: string
  location_id: string
  title: string
  street: string
  state: string
  city: string
  zip_code: string
  country: string
  full_address: string
  post_type: string
  latitude?: string
  longitude?: string
}

export type Settings = {
  delimiter: string
  inquotes: string
  locationId: number
  postId: number
  postType: string
}

export type Row = Array<string>
export type AddressRow = Array<AddressObject>
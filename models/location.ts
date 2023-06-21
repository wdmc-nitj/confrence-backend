export default interface Location {
  id: string
  confId: string
  description: string
  address: string
  latitude: string
  longitude: string
  feature: boolean
  sequence: number
  createdAt: Date
  updatedAt: Date
}

export default class RowData {
  
  height: number
  images: Array<ImageData>

  constructor(height: number, images: Array<ImageData>) {
    this.height = height
    this.images = images
  }
}
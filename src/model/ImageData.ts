export default class ImageData {

    id: number
    src: string
    lazySrc: string
    width: number
    height: number

    constructor(id: number ,src: string, lazySrc: string, width: number, height: number) {
        this.lazySrc = lazySrc
        this.id = id
        this.src = src
        this.width = width
        this.height = height
    }

}
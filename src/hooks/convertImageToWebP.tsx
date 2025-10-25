export const convertImageToWebP = (jpgURL:string, callback:Function) => {
    const img = new Image()

    img.onload = function() {
        const canvas = document.createElement('canvas')

        canvas.width = img.width
        canvas.height = img.height

        const ctx = canvas.getContext('2d')

        ctx?.drawImage(img, 0, 0)

        try {
            const webPImageURL = canvas.toDataURL('image/webp', .7)
            callback(webPImageURL)
        }
        catch(error) {
            console.error('Failed to convert webp', error)
            callback(null)
        }
    }
    img.onerror = function() {
        console.error('Failed to load original image')
        callback(null)
    }
    img.src = jpgURL
}



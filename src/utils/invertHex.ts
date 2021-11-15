export const invertHex = (hex:string) => {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase(); 
}

// invertHex('00FF00'); // Returns FF00FF
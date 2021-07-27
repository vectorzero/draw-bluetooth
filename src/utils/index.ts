import JsBarcode from 'jsbarcode'
import QRCode from 'qrcode'

export function textToBase64BarCode(text: String) {
  const canvas = document.createElement('canvas')
  JsBarcode(canvas, text, { displayValue: false, margin: 0 })
  return canvas.toDataURL('image/png')
}

export function textToBase64QrCode(text: String) {
  const canvas = document.createElement('canvas')
  QRCode.toCanvas(canvas, text, { margin: 1 })
  return canvas.toDataURL('image/png')
}

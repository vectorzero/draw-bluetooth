class SfPrint {
  /**
   * 初始化纸张
   * 0 整个标签的横向偏移量
   * 200 横向分辨率
   * 200 纵向分辨率
   * @param height 750 标签的高度
   * @param width 576 标签的宽度
   * @param number 1 要打印的标签数量
   */
  constructor(height = 750, width = 576, number = 1) {
    this.str = `! 0 200 200 ${height} ${number}\r\nPAGE-WIDTH ${width}\r\n`
  }

  /**
   * 设置字体放大倍数
   *  @param w : 1~10倍
   *  @param h : 1~10倍
   */
  setFontWidthAndHeight(w, h) {
    return (this.str = `${this.str}SETMAG ${w} ${h}'\r\n'`)
  }

  /**
   * 打印文本且换行
   * @param font 字体名称/编号 取值 1 : 8*12大小 ; 55 : 16*16大小 ; 4 : 32*32大小 其他默认 24*24大小
   * @param size 字体大小 字体的大小标识。(默认值 0，最大值 7)
   * @param x 横向起始位置
   * @param y 纵向起始位置
   * @param text 要打印的文本
   */
  printlnText(font, size, x, y, text) {
    return (this.str = `TEXT ${font} ${size} ${x} ${y} ${text}\r\n`)
  }

  /**
   * 打印文本且换行 逆时针旋转270度，纵向打印文本
   * @param font 字体名称/编号 取值 1 : 8*12大小 ; 55 : 16*16大小 ; 4 : 32*32大小 其他默认 24*24大小
   * @param size 字体大小 字体的大小标识。(默认值 0，最大值 7)
   * @param x 横向起始位置
   * @param y 纵向起始位置
   * @param text 要打印的文本
   */
  printlnText270(font, size, x, y, text) {
    return (this.str = `TEXT270 ${font} ${size} ${x} ${y} ${text}\r\n`)
  }

  /**
   *
   * @param x0 起点的x坐标
   * @param y0 起点的y坐标
   * @param x1 终点的x坐标
   * @param y1 终点的y坐标
   * @param width 线宽
   */
  printLine(x0, y0, x1, y1, width) {
    return (this.str = `${this.str}Line ${x0} ${y0} ${x1} ${y1} ${width}\r\n`)
  }

  /**
   *
   * @param x 左上角的x坐标
   * @param y 左上角的y坐标
   * @param width 矩形的宽度
   * @param height 矩形的高度
   * @param borderArr 显示的边框【上,右,下,左】：1表示显示，0表示隐藏。如：[1,0,1,1]表示右边框不显示
   * @param borderWidth 线宽
   */
  printRect(x, y, width, height, borderArr = [1, 1, 1, 1], borderWidth = 1) {
    // 上边框
    if (borderArr[0]) {
      this.str = `${this.str}Line ${x} ${y} ${x + width} ${y} ${borderWidth}\r\n`
    }
    // 右边框
    if (borderArr[1]) {
      this.str = `${this.str}Line ${x + width} ${y} ${x + width} ${
        y + height
      } ${borderWidth}\r\n`
    }
    // 下边框
    if (borderArr[2]) {
      this.str = `${this.str}Line ${x + width} ${y + height} ${x + width} ${
        y + height
      } ${borderWidth}\r\n`
    }
    // 左边框
    if (borderArr[3]) {
      this.str = `${this.str}Line ${x} ${y} ${x} ${y + height} ${borderWidth}\r\n`
    }
    return this.str
  }

  /**
   * 打印横向条码和文字
   * @param {} x 横向起始位置
   * @param {} y 纵向起始位置
   * @param {} height 条码的高度
   * @param {} data 条码数据
   */
  printSweepCodeAndText(x, y, height, data) {
    this.setSweepCodeText()
    this.str = this.str.concat(
      'BARCODE 128 2 1 ' + height + ' ' + x + ' ' + y + ' ' + data + '\r\n'
    )
    this.setSweepCodeTextEnd()
    return this.str
  }

  /**
   * 打印横向条码
   * @param x 横向起始位置
   * @param y 纵向起始位置
   * @param height 条码的高度
   * @param data 条码数据
   */
  printSweepCode(x, y, height, data) {
    return (this.str = this.str.concat(
      'BARCODE 128 2 1 ' + height + ' ' + x + ' ' + y + ' ' + data + '\r\n'
    ))
  }

  /**
   * 设置横向条码文本起始
   */
  setSweepCodeText() {
    return (this.str = this.str.concat('BARCODE-TEXT 7 0 5\r\n'))
  }

  /**
   * 设置横向条码文本结束
   */
  setSweepCodeTextEnd() {
    return (this.str = this.str.concat('BARCODE-TEXT OFF\r\n'))
  }

  /**
   * 设置纵向条码文本起始
   */
  setSweepCodeTextVertical() {
    return (this.str = this.str.concat('VBARCODE-TEXT 7 0 5\r\n'))
  }

  /**
   * 设置纵向条码文本结束
   */
  setSweepCodeTextEndVertical() {
    return (this.str = this.str.concat('VBARCODE-TEXT OFF\r\n'))
  }

  /**
   * 纵向打印条码和文字
   * @param x 横向起始位置
   * @param y 纵向终点位置
   * @param height 条码的高度
   * @param data 条码数据
   */
  printSweepCodeAndTextVertical(x, y, height, data) {
    this.setSweepCodeTextVertical()
    this.str = this.str.concat(
      'VBARCODE 128 3 1 ' + height + ' ' + x + ' ' + y + ' ' + data + '\r\n'
    )
    this.setSweepCodeTextEndVertical()
    return this.str
  }

  /**
   * 纵向打印条码
   * @param x 横向起始位置
   * @param y 纵向终点位置
   * @param height 条码的高度
   * @param data 条码数据
   */
  printSweepCodeVertical(x, y, height, data) {
    return (this.str = this.str.concat(
      'VBARCODE 128 3 1 ' + height + ' ' + x + ' ' + y + ' ' + data + '\r\n'
    ))
  }

  /**
   *
   * @param x 横向起始位置
   * @param y 纵向起始位置
   * @param WAndH 二维码宽高,范围:1~32
   * @param data 填入二维码的数据
   */
  printQRCode(x, y, wAndH, data) {
    return (this.str = this.str.concat(
      'BARCODE QR ' +
        x +
        ' ' +
        y +
        ' M 2 U ' +
        wAndH +
        '\r\nMA,' +
        data +
        '\r\nENDQR\r\n'
    ))
  }

  /**
   * 对齐方式  center right left
   * @param alignMethod
   */
  setAlign(alignMethod) {
    return (this.str = this.str.concat(alignMethod.toUpperCase() + '\r\n'))
  }

  /**
   * 打印矩形框
   * @param x0 左上角x坐标
   * @param y0 左上角y坐标
   * @param x1 右下角X坐标
   * @param y1 右下角y坐标
   */
  printBox(x0, y0, x1, y1) {
    return (this.str = `${this.str}BOX ${x0} ${y0} ${x1} ${y1} 2\r\n`)
  }

  /**
   * 设置打印机为标签检测模式
   */
  setGapSense() {
    return (this.str = `${this.str}GAP-SENSE\r\n`)
  }

  /**
   * 设置打印结束后，并走纸到定位点
   */
  setForm() {
    return (this.str = `${this.str}FORM\r\n`)
  }

  /**
   * 指令控制结束并打印控制内容
   */
  setPrint() {
    return (this.str = `${this.str}PRINT\r\n`)
  }
}
export { SfPrint }

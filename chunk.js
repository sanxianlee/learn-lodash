import slice from './slice.js'

/**
 * 将 array 拆分成多个 size 长度的块，把这些块组成一个新数组。 
 * 如果 array 无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
 *
 * @版本 >=3.0.0
 * @类型 数组
 * @参数 {Array} 需要被处理的数组。
 * @参数 {number} [size=1] 每个块的长度。
 * @返回值 {Array} 返回一个包含拆分块数组的新数组（相当于一个二维数组）。
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  // 下面这句定义数组长度, 之前觉得可有可无
  // 但是理解了javascript的内存分配后(https://www.cnblogs.com/yuzhongwusan/archive/2012/03/27/2418964.html)
  // 我觉得应该是从底层解释器的层面解读 预定义数组长度 就是指定了数组所占内存空间的数目 所以更加节省内存吧 
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk

/**
 * 创建一个新数组并包含原数组中所有的非假值元素。  
 * 例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
 *
 * @版本 >=0.1.0
 * @类型 Array
 * @参数 {Array} 过滤数组对象
 * @返回值 {Array} 返回过滤假值后的数组.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
  // 预定义
  let resIndex = 0
  const result = []
  
  // 参数数组为null 返回空数组 
  if (array == null) {
    return result
  }

  // 遍历数组 如果是 false、null、 0、""、undefined 和 NaN 等值都是 在if语句中 都是 false 只有 true 的才给返回数组插值
  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export default compact

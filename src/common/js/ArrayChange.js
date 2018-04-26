//查找数组的对象
export const findModel = function (Arr,name,val) {
  return Arr.find(val => val[name] == val)
}

export function toggleClass(element, className) {
  console.log("触发改变主题");
  if (!element || !className) {
    throw new Error("主题变色参数缺失");
  }

  let classString = element.className;
  const nameIndex = classString.indexOf(className);

  if (nameIndex === -1) {
    classString = className;
  }

  console.log(classString);
  element.className = classString;
};


// 格式化时间 type === "1" 需要时分秒
export function FormatTime(time, type="1") {
  if(!time) {
    return "-";
  };

  const D = new Date(time);

  const d = {
    y: D.getFullYear(),
    M: D.getMonth() + 1,
    d: D.getDate() < 10 ? "0" + D.getDate() : D.getDate(),
    H: D.getHours() < 10 ? "0" + D.getHours() : D.getHours(),
    m: D.getMinutes() < 10 ? "0" + D.getMinutes() : D.getMinutes(),
    s: D.getSeconds() < 10 ? "0" + D.getSeconds() : D.getSeconds()
  };

  return type === "1" ? (d.y + "-" + d.M + "-" + d.d + " " + d.H + ":" + d.m + ":" + d.s) : (d.y + "-" + d.M + "-" + d.d)
};

// 填充分割符号
export function Divide(str) {
  return str ? str : "-";
};
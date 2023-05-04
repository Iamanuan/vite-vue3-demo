import service from ".";

// 案件数据统计
export function queryCaseSummary() {
  return service({
    url: "/liteWorkbench/queryCaseSummary",
    method: "post",
  });
}

// 查询案件列表
export function queryCaseList(data) {
  return service({
    url: "/liteCase/queryCaseList",
    method: "post",
    data,
  });
}
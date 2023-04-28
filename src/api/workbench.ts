import service from ".";

// 案件数据统计
export function queryCaseSummary() {
  return service({
    url: "/liteWorkbench/queryCaseSummary",
    method: "post",
  });
}
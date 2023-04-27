export interface StatisticsListInt {
  value: number,
  label: string
}

// 案件搜索数据
interface searchFormInt {
  caseCode: string,
  caseName: string
}

export class workbenchData {
  statisticsList: StatisticsListInt[] = [] // 统计展示数据
  searchForm: searchFormInt = {
    caseCode: '',
    caseName: ''
  }
}
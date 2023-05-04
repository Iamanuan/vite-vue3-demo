export interface StatisticsListInt {
  value: number,
  label: string
}

// 案件搜索数据
export interface SearchFormInt {
  caseNumber: string,
  caseName: string
}

export class workbenchData {
  statisticsList: StatisticsListInt[] = [] // 统计展示数据
  searchForm: SearchFormInt = {
    caseNumber: '',
    caseName: ''
  }
}
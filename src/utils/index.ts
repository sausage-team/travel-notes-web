import moment from 'moment'

export class Util {

  public momentDate (num: any, type: string = '') {
    if (num) {
      if (Object.prototype.toString.call(num) === '[object Date]') {
        num = num.getTime()
      }
      num = Number(num)
      switch (type) {
        case 'date':
          return moment(num).format('YYYY-MM-DD')
        case 'date_h':
          return moment(num).format('YYYY/MM/DD')
        case 'date_time':
          return moment(num).format('YYYY-MM-DD HH:mm:ss')
        case 'data_h_time':
          return moment(num).format('YYYY/MM/DD HH:mm:ss')
        case 'data_h_time_h':
          return moment(num).format('YYYY/MM/DD HH:mm')
        case 'time':
          return moment(num).format('HH:mm:ss')
        case 'time_h':
          return moment(num).format('HH:mm')
        case 'month_year':
          return moment(num).format('MMMM/YYYY')
        case 'day':
          return moment(num).format('DD')
      }
    } else {
      return ''
    }
  }
}

export default new Util()

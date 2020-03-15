import {
  Component,
  Scheduled,
} from "@tspring/context"

@Component
export default class TestTask {

  @Scheduled({ cron: '0/5 * * * * *' })
  taks1 () {
    console.log('do taks1 ...')
  }

  @Scheduled({ cron: '0/2 * * * * *' })
  taks2 () {
    console.log('do taks2 ...')
  }
}

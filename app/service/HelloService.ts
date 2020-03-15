import {
  Service,
} from "@tspring/context"
import { Value } from "@tspring/beans"

@Service
export class HelloService {

  @Value('${common.helloString}')
  private helloString?: string

  getHelloString (user: string, msg: string) {
    return `${this.helloString} (user=${user}, msg=${msg})`
  }
}

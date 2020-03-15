import { HelloService } from "../service/HelloService"
import {
  PathVariable,
  RequestMapping,
  RestController,
  GetMapping
} from "@tspring/web"
import { Autowired } from "@tspring/beans"

@RestController
@RequestMapping('/api/v1')
export class HelloController {

  @Autowired
  private helloService?: HelloService

  @GetMapping('/greeting')
  greeting () {
    return 'greeting !'
  }

  @GetMapping('/hello/:user/:msg')
  hello (
    @PathVariable('msg') msg: string,
    @PathVariable('user') user: string,
  ) {
    return this.helloService!.getHelloString(user, msg)
  }
}

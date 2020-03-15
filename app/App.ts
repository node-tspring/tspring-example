import {
  SpringBootApplication,
} from '@tspring/boot'

import {
  SmartInitializingSingleton, Value, Autowired
} from '@tspring/beans'

import {
  EnableScheduling,
  ComponentScan,
  Bean
} from '@tspring/context'

import {
  EnableKoaWebServer,
} from '@tspring/web'
import { Implements } from '@tspring/core'

class Abc {
  constructor(private msg: string) {
    console.log('call Abc#constructor')
  }

  hello () {
    return `Hello ${this.msg} !`
  }
}

@SpringBootApplication
@EnableKoaWebServer
@EnableScheduling
@ComponentScan([
  'app/config'
])
@Implements(SmartInitializingSingleton)
export class App implements SmartInitializingSingleton {
  afterSingletonsInstantiated(): void {
    console.log('App#helloString: ', this.helloString)
    console.log('App#abc: ', this.abc!.hello())
  }

  @Value('${common.helloString}')
  private helloString?: string

  @Autowired
  public abc?: Abc

  @Bean
  static myAbc (): Abc {
    return new Abc('myAbc')
  }
}

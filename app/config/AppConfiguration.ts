import { ComponentScan, Configuration, Import } from "@tspring/context"

@ComponentScan([
  'app/controller',
  'app/service',
  'app/schedule'
])
@Configuration
export class AppConfiguration {

}

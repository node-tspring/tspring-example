import { SpringApplication } from '@tspring/boot'
import { App } from './App'

const applicationContext = SpringApplication.run(App, process.argv)
// const beanFactory = applicationContext.getBeanFactory()

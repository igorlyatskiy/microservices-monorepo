import { RmqOptions } from "@nestjs/microservices"

export type MicroserviceConfig = {
  name: string
  config: RmqOptions
}

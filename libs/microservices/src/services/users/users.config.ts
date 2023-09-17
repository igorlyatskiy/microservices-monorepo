import { Transport } from "@nestjs/microservices";
import { MicroserviceConfig } from "../../types";
import { USERS_QUEUE } from "./users.common";
import { RABBIT_MQ_URl } from "../../common";

export const usersRmq: MicroserviceConfig = {
  name: 'USERS_RMQ_MICROSERVICE',
  config: {
    transport: Transport.RMQ,
    options: {
      urls: [ RABBIT_MQ_URl ],
      queue: USERS_QUEUE,
    }
  }
}

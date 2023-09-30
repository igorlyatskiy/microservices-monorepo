import { Transport } from "@nestjs/microservices";
import { MicroserviceConfig } from "../../types";
import { RABBIT_MQ_URl } from "../../common";
import { COMMENTS_QUEUE } from "./comments.common";

export const commentsRmq: MicroserviceConfig = {
  name: 'COMMENTS_RMQ_MICROSERVICE',
  config: {
    transport: Transport.RMQ,
    options: {
      urls: [ RABBIT_MQ_URl ],
      queue: COMMENTS_QUEUE,
    }
  }
}

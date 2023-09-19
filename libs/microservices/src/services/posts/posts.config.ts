import { Transport } from "@nestjs/microservices";
import { MicroserviceConfig } from "../../types";
import { RABBIT_MQ_URl } from "../../common";
import { POSTS_QUEUE } from "./posts.common";

export const postsRmq: MicroserviceConfig = {
  name: 'POSTS_RMQ_MICROSERVICE',
  config: {
    transport: Transport.RMQ,
    options: {
      urls: [ RABBIT_MQ_URl ],
      queue: POSTS_QUEUE,
    }
  }
}

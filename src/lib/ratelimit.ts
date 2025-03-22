import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "./redis";

export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(15, "10s"),
});
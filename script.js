import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1000,
  duration: "30s",

  // stages: [
  //   { duration: "30s", target: 20 },
  //   { duration: "1m30s", target: 10 },
  //   { duration: "20s", target: 0 },
  // ],
};

export default function () {
  const res = http.get("http://192.168.10.18:5000");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "duration was <= 200ms": (r) => r.timings.duration,
  });
  sleep(1);
}

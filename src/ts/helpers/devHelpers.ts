require("dotenv").config();
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function log(msg: unknown): void {
  //  eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (process.env.DEBUGGING !== "false") {
    console.log(msg);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function time(msg: string): void {
  //  eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (process.env.DEBUGGING !== "false") {
    console.time(msg);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function timeEnd(msg: string): void {
  //  eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (process.env.DEBUGGING !== "false") {
    console.timeEnd(msg);
  }
}

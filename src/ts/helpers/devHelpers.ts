// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function log(msg: unknown): void {
  // @ts-expect-error Does not recognize import.meta.env
  //  eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (import.meta.env.VITE_APP_DEBUGGING !== "false") {
    console.log(msg);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function time(msg: string): void {
  // @ts-expect-error Does not recognize import.meta.env
  //  eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (import.meta.env.VITE_APP_DEBUGGING !== "false") {
    console.time(msg);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function timeEnd(msg: string): void {
  // @ts-expect-error Does not recognize import.meta.env
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (import.meta.env.VITE_APP_DEBUGGING !== "false") {
    console.timeEnd(msg);
  }
}

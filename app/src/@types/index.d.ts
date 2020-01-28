declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.ttf" {
  const value: any;
  export default value;
}

declare namespace NodeJS {
  interface ProcessEnv {
    FACEBOOK_APP_KEY: string;
  }
}

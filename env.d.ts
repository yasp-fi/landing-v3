declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NOTION_DATABASE_ID: string;
      NOTION_TOKEN: string;
      PG_HOST: string;
      PG_USER: string;
      PG_PASSWORD: string;
      PG_NAME: string;
      PG_PORT: string;
    }
  }
}
# oauth-example

An Simple project to demonstrate how to roll your roll OAuth2 server and client.

## Structure

- `api`: The OAuth2 server implementation written in NestJS.
- `web`: The OAuth2 client implementation written in NextJS

## How to run

0. Set up your own MongoDB database and Redis cache storage.
1. Use `pnpm` to install dependencies for both `api` and `web` projects.

    ```bash
    pnpm install
    ```

2. Create a `.env` file in both `api` and `web` projects and fill in the necessary environment variables.

    ```bash
    # api/.env
    WEB_URL=""
    API_URL=""

    MONGODB_URI=""
    MONGODB_USERNAME=""
    MONGODB_PASSWORD=""
    MONGODB_DBNAME=""

    REDIS_URI=""

    JWT_ACCESS_SECRET=""
    JWT_REFRESH_SECRET=""
    CRYPTO_PASSWORD=""
    CRYPTO_SALT=""

    DISCORD_APP_ID=""
    DISCORD_CLIENT_ID=""
    DISCORD_PUBLIC_KEY=""
    DISCORD_CLIENT_SECRET=""

    GOOGLE_CLIENT_ID=""
    GOOGLE_CLIENT_SECRET=""
    ```

3. Run both projects.

    ```bash
    pnpm run --stream -r "/^dev:.*$/"
    ```

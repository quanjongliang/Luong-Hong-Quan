# Setup and Installation

Follow these steps to set up and run the project on your local machine.

## 1. Update .env File

Copy the contents of `.env.example` to a new file named `.env` and update the environment variables as needed.

```bash
cp .env.example .env
```

Edit the `.env` file with your preferred settings.

## 2. Install Dependencies

Install the necessary dependencies by running:

```bash
npm install
```

## 3. Build the Project

Build the project using the following command:

```bash
npm run build
```

## 4. Migrate Databases

Run the database migrations to set up the database schema:

```bash
npm run migrate:up
```

## 5. Run the Project

Start the project in development mode:

```bash
npm run dev
```

## Additional Information

- **Start in Production Mode**: Use `npm start` instead of `npm run dev` to run the project in production mode.
- **Rollback Migrations**: If you need to rollback the last migration, you can use the command `npm run migrate:down`.

## Notes

- Ensure that your database is running and the credentials in the `.env` file are correct before running the migration and starting the project.
- For any issues during setup, refer to the project documentation or contact the maintainers.
- Default port: 3000

# REST API Documentation

## Resources

### Create resource

#### Request

`POST /api/resources`

```
curl --location 'http://localhost:3000/api/resources' \
--header 'Content-Type: application/json' \
--data '{
    "name": "resource name"
}'
```

#### Response

```json
{
  "data": {
    "id": 16,
    "name": "asdasdas",
    "updatedAt": "2024-08-05T08:30:50.127Z",
    "createdAt": "2024-08-05T08:30:50.127Z"
  },
  "meta": {}
}
```

### Get resources

#### Request

`GET /api/resources`

```
curl --location 'http://localhost:3000/api/resources?skip=0&take=10'
```

#### Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "resource name",
      "createdAt": "2024-08-05T08:30:50.127Z",
      "updatedAt": "2024-08-05T08:30:50.127Z"
    }
  ],
  "meta": {
    "total": 1,
    "skip": 0
  }
}
```

### Get resource by id

#### Request

`GET /api/resources/:id`

```
curl --location 'http://localhost:3000/api/resources/1'
```

#### Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "resource name",
      "createdAt": "2024-08-05T08:30:50.127Z",
      "updatedAt": "2024-08-05T08:30:50.127Z"
    }
  ],
  "meta": {}
}
```

### Update resource by id

#### Request

`PATCH /api/resources/:id`

```
curl --location --request PATCH 'http://localhost:3000/api/resources/1' \
--header 'Content-Type: application/json' \
--data '{
    "name":"resource 1 updated"
}'
```

#### Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "resource 1 updated",
      "createdAt": "2024-08-05T08:30:50.127Z",
      "updatedAt": "2024-08-05T08:30:50.127Z"
    }
  ],
  "meta": {}
}
```

### Delete resource by id

#### Request

`DELETE /api/resources/:id`

```
curl --location --request DELETE 'http://localhost:3000/api/resources/1'
```

#### Response

```json
{
  "data": {
    "message": "Delete successfully."
  },
  "meta": {}
}
```
# Luong-Hong-Quan

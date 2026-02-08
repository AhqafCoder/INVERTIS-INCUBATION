# Invertis Incubation Center - Backend Server

Express.js REST API with MongoDB for managing incubation center content.

## Features

- **Authentication**: JWT-based auth for admin users
- **File Upload**: Multer for images, videos, PDFs (max 50MB)
- **Security**: Helmet, CORS, rate limiting
- **Content Management**: CRUD APIs for all content types
- **Database**: MongoDB with Mongoose ODM

## Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment

Create `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/invertis-incubation
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### 3. Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

### 4. Run Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register admin user
- `POST /api/auth/login` - Login & get token
- `GET /api/auth/me` - Get current user (protected)

### Incubation Programs
- `GET /api/incubation` - Get all programs
- `GET /api/incubation/:slug` - Get program by slug
- `POST /api/incubation` - Create program (protected)
- `PUT /api/incubation/:id` - Update program (protected)
- `DELETE /api/incubation/:id` - Delete program (admin only)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (protected)
- `PUT /api/events/:id` - Update event (protected)
- `DELETE /api/events/:id` - Delete event (admin only)

### Gallery
- `GET /api/gallery` - Get all gallery images
- `POST /api/gallery` - Upload image (protected)
- `PUT /api/gallery/:id` - Update image (protected)
- `DELETE /api/gallery/:id` - Delete image (admin only)

### Achievements
- `GET /api/achievements` - Get all achievements
- `POST /api/achievements` - Create achievement (protected)
- `PUT /api/achievements/:id` - Update achievement (protected)
- `DELETE /api/achievements/:id` - Delete achievement (admin only)

### Patents
- `GET /api/patents` - Get all patents
- `POST /api/patents` - Create patent (protected)
- `PUT /api/patents/:id` - Update patent (protected)
- `DELETE /api/patents/:id` - Delete patent (admin only)

### Videos
- `GET /api/videos` - Get all videos
- `POST /api/videos` - Create video (protected)
- `PUT /api/videos/:id` - Update video (protected)
- `DELETE /api/videos/:id` - Delete video (admin only)

## Authentication

Protected routes require JWT token in Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## File Uploads

Supported formats:
- **Images**: JPEG, JPG, PNG, GIF
- **Videos**: MP4, MOV, AVI
- **Documents**: PDF

Max file size: 50MB

## Database Models

### User
- email, password, name, role (admin/editor), isActive

### IncubationProgram
- title, slug, description, image, category, duration, features, eligibility, tags

### Event
- title, description, images[], date, location, category, speakers[], registrationLink

### Gallery
- title, description, image, category, eventId, order, tags

### Achievement
- title, description, category, image, date, organization, link

### Patent
- title, description, patentNumber, inventors[], filingDate, grantDate, status, category

### Video
- title, description, videoUrl, thumbnailUrl, category, duration, views

## Error Handling

All errors return JSON:

```json
{
  "error": {
    "message": "Error message",
    "stack": "..." // only in development
  }
}
```

## Security Features

- **Helmet**: Security HTTP headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes
- **Password Hashing**: bcrypt with salt rounds
- **JWT Expiration**: 30 days

## Production Deployment

1. Set `NODE_ENV=production` in .env
2. Change `JWT_SECRET` to a strong random string
3. Use MongoDB Atlas or production MongoDB
4. Configure proper CORS origin
5. Set up SSL/HTTPS
6. Use PM2 or similar for process management

```bash
npm install -g pm2
pm2 start server.js --name invertis-api
pm2 save
pm2 startup
```

# Database Seeding Guide

## What is Seeding?

Database seeding is the process of populating your database with initial sample data. This is useful for:
- **Development**: Quick setup with realistic data
- **Testing**: Consistent test data across environments
- **Demo**: Showcase features with meaningful content

## Quick Start

### 1. Make Sure MongoDB is Running

```bash
# Check if MongoDB is running
mongosh

# If not running, start it
mongod
```

### 2. Configure Environment

Ensure your `server/.env` file has the correct MongoDB URI:

```env
MONGODB_URI=mongodb://localhost:27017/invertis-incubation
```

### 3. Run Seed Script

```bash
cd server
npm run seed
```

## What Data Gets Created?

### 👤 Users (2)
- **Admin User**
  - Email: `admin@invertis.org`
  - Password: `Admin@123`
  - Role: Admin (full access)

- **Editor User**
  - Email: `editor@invertis.org`
  - Password: `Editor@123`
  - Role: Editor (content management)

### 📚 Incubation Programs (3)
1. Tech Startup Incubation Program
2. Social Innovation Fellowship
3. Women Entrepreneur Accelerator

### 📅 Events (3)
1. National Startup Day 2026
2. Inverthon 2026 - 48 Hour Hackathon
3. Founders Forum: Scaling Strategies

### 🖼️ Gallery Images (3)
1. Innovation Showcase 2026
2. Incubation Center Workspace
3. Shark Tank Season 2

### 🏆 Achievements (3)
1. AICTE Recognition for Best Incubation Center
2. 50+ Startups Successfully Incubated
3. Best Student Startup Award

### 📄 Patents (2)
1. IoT-Based Smart Agriculture Monitoring System
2. Biodegradable Packaging Material from Agricultural Waste

### 🎥 Videos (3)
1. Invertis Innovation Center - Overview
2. Founder Success Story: TechVenture
3. Inverthon 2025 Highlights

## Output Example

```bash
🌱 Starting database seeding...
✅ Connected to MongoDB
🗑️  Clearing existing data...
✅ Cleared all collections
📝 Inserting users...
✅ Created 2 users
📝 Inserting incubation programs...
✅ Created 3 incubation programs
📝 Inserting events...
✅ Created 3 events
📝 Inserting gallery images...
✅ Created 3 gallery images
📝 Inserting achievements...
✅ Created 3 achievements
📝 Inserting patents...
✅ Created 2 patents
📝 Inserting videos...
✅ Created 3 videos

🎉 Database seeding completed successfully!

📊 Summary:
   Users: 2
   Incubation Programs: 3
   Events: 3
   Gallery Images: 3
   Achievements: 3
   Patents: 2
   Videos: 3

🔑 Admin Credentials:
   Email: admin@invertis.org
   Password: Admin@123

🔑 Editor Credentials:
   Email: editor@invertis.org
   Password: Editor@123

👋 Database connection closed
```

## ⚠️ Important Notes

### Data Clearing
The seed script **DELETES ALL EXISTING DATA** before inserting new data. This ensures a clean state.

**Warning**: Do NOT run this in production! Only use for development and testing.

### Re-seeding
You can run the seed script multiple times. Each time it will:
1. Clear all existing data
2. Insert fresh sample data

### Custom Data
To modify the seed data, edit `server/seed.js` and update the data arrays:
- `users`
- `incubationPrograms`
- `events`
- `galleryImages`
- `achievements`
- `patents`
- `videos`

## After Seeding

### 1. Login to Admin Panel
```
URL: http://localhost:3000/admin/login
Email: admin@invertis.org
Password: Admin@123
```

### 2. Test API Endpoints

```bash
# Get all incubation programs
curl http://localhost:5000/api/incubation

# Get all events
curl http://localhost:5000/api/events

# Get all achievements
curl http://localhost:5000/api/achievements
```

### 3. Explore the Data
- Browse the frontend at `http://localhost:3000`
- Check admin dashboard for content overview
- Test CRUD operations through admin panel

## Troubleshooting

### Error: connect ECONNREFUSED
MongoDB is not running. Start MongoDB:
```bash
mongod
```

### Error: Authentication failed
Check your MongoDB URI in `.env` file.

### Error: Cannot find module
Install dependencies:
```bash
npm install
```

### Clear Database Without Seeding
If you just want to clear the database:
```bash
mongosh invertis-incubation
db.dropDatabase()
```

## Production Warning

**NEVER run the seed script in production!**

The seed script is only for development and testing. In production:
1. Use database migrations
2. Manually create admin users
3. Import production data carefully
4. Always backup before any data operations

## Next Steps

After seeding:
1. ✅ Login to admin panel
2. ✅ Explore the sample data
3. ✅ Test CRUD operations
4. ✅ Add your own content
5. ✅ Customize the seed data for your needs

# 🚀 Quick Start Guide

## Step 1: Install Dependencies

### Backend
```bash
cd server
npm install
```

### Frontend
```bash
cd client
npm install
```

## Step 2: Configure Environment

### Backend (.env)
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/invertis-incubation
JWT_SECRET=change-this-to-a-random-secret-key
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### Frontend (.env.local)
```bash
cd client
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
```

## Step 3: Start MongoDB

### Option A: Local MongoDB
```bash
mongod
```

### Option B: MongoDB Atlas (Cloud)
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create cluster and get connection string
3. Update `MONGODB_URI` in server/.env

## Step 4: Start Servers

### Terminal 1 - Backend
```bash
cd server
npm run dev
```
✅ Backend running at http://localhost:5000

### Terminal 2 - Frontend
```bash
cd client
npm run dev
```
✅ Frontend running at http://localhost:3000

## Step 5: Create Admin User

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@invertis.org",
    "password": "Admin@123",
    "name": "Admin User",
    "role": "admin"
  }'
```

## Step 6: Login to Admin Panel

1. Open http://localhost:3000/admin/login
2. Login with credentials from Step 5
3. Access dashboard at http://localhost:3000/admin/dashboard

## 🎉 You're Ready!

- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login
- **API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## 📝 Next Steps

1. **Add Content**: Use admin panel to add incubation programs, events, etc.
2. **Upload Files**: Upload images and videos through the admin interface
3. **Customize**: Edit components in `client/components/`
4. **Deploy**: Follow production deployment guide in main README

## 🆘 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
mongosh

# If not installed, install MongoDB Community Edition
# https://www.mongodb.com/docs/manual/installation/
```

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 3000 (frontend)
npx kill-port 3000
```

### Module Not Found
```bash
# Clear node_modules and reinstall
cd server
rm -rf node_modules package-lock.json
npm install

cd ../client
rm -rf node_modules package-lock.json .next
npm install
```

## 📚 Documentation

- Full README: [README.md](README.md)
- Backend API: [server/README.md](server/README.md)
- Component Docs: [client/README.md](client/README.md)

# 🌍 Wanderlust

A full-stack travel listing web application where users can create, explore, and review travel destinations. Built with Node.js, Express, MongoDB, and Cloudinary.

---

## 🚀 Live Demo

> Coming soon after deployment

---

## ✨ Features

- 🔐 User Authentication (Register / Login / Logout) using Passport.js
- 🏠 Create, Read, Update, Delete (CRUD) travel listings
- 🖼️ Image upload for listings via Cloudinary
- ⭐ Leave star ratings and comments on listings
- 🗺️ Interactive map for each listing using Mapbox GL JS
- 🔒 Authorization — only listing owners can edit or delete their listings
- 💬 Review system — only review authors can delete their own reviews
- ✅ Server-side validation using Joi
- 🌐 Session stored in MongoDB Atlas using connect-mongo
- 📱 Responsive UI with Bootstrap 5

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Frontend | EJS, EJS-Mate, Bootstrap 5 |
| Database | MongoDB Atlas, Mongoose |
| Authentication | Passport.js, passport-local-mongoose |
| Image Upload | Multer, Cloudinary |
| Maps | Mapbox GL JS |
| Validation | Joi |
| Session Store | connect-mongo |
| Environment | dotenv |

---

## 📁 Project Structure

```
├── controller/
│   ├── listing.js       # Listing CRUD logic
│   ├── review.js        # Review logic
│   └── user.js          # Auth logic
├── models/
│   ├── listing.js       # Listing schema
│   ├── review.js        # Review schema
│   └── user.js          # User schema
├── routes/
│   ├── listing.js       # Listing routes
│   ├── review.js        # Review routes
│   └── user.js          # Auth routes
├── views/
│   ├── layouts/         # Boilerplate layout
│   ├── listings/        # Listing views (index, show, new, edit)
│   ├── users/           # Login & signup views
│   └── includes/        # Navbar, footer, flash
├── public/
│   ├── css/             # Custom styles
│   └── js/              # Client-side scripts
├── utils/
│   ├── ExpressError.js  # Custom error class
│   └── wrapAsync.js     # Async error wrapper
├── middleware.js         # Auth, validation, ownership middlewares
├── schema.js            # Joi validation schemas
├── cloudeConfig.js      # Cloudinary configuration
├── app.js               # Main entry point
└── .env                 # Environment variables (not committed)
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file in the root directory

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
CLOUDE_NAME=your_cloudinary_cloud_name
CLOUDE_API_KEY=your_cloudinary_api_key
CLODE_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
SECRET=your_64_character_hex_secret
```

### 4. Run the app

```bash
nodemon app.js
```

### 5. Open in browser

```
http://localhost:8000/listings
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `CLOUDE_NAME` | Cloudinary cloud name |
| `CLOUDE_API_KEY` | Cloudinary API key |
| `CLODE_API_SECRET` | Cloudinary API secret |
| `MAP_TOKEN` | Mapbox GL JS public access token |
| `SECRET` | 64-character hex string for session encryption |

---

## 📸 Screenshots

> Add screenshots here after deployment

---

## 🔐 Authentication & Authorization

- Users must be logged in to create listings or leave reviews
- Only the **owner** of a listing can edit or delete it
- Only the **author** of a review can delete it
- Unauthorized access redirects with a flash error message

---

## 🌐 API Routes

### Listings
| Method | Route | Description |
|---|---|---|
| GET | `/listings` | All listings |
| GET | `/listings/new` | New listing form |
| POST | `/listings` | Create listing |
| GET | `/listings/:id` | Show listing |
| GET | `/listings/:id/edit` | Edit listing form |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |

### Reviews
| Method | Route | Description |
|---|---|---|
| POST | `/listings/:id/reviews` | Create review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete review |

### Users
| Method | Route | Description |
|---|---|---|
| GET | `/signup` | Signup form |
| POST | `/signup` | Register user |
| GET | `/login` | Login form |
| POST | `/login` | Login user |
| GET | `/logout` | Logout user |

---

## 📦 Dependencies

```json
"axios": "^1.20.0",
"cloudinary": "^1.32.0",
"connect-flash": "^0.1.1",
"connect-mongo": "^5.1.0",
"dotenv": "^17.4.2",
"ejs": "^3.1.10",
"ejs-mate": "^4.0.0",
"express": "^4.18.2",
"express-session": "^1.19.0",
"joi": "^18.2.3",
"method-override": "^3.0.0",
"mongodb": "^6.21.0",
"mongoose": "^6.13.5",
"multer": "^2.2.0",
"multer-storage-cloudinary": "^4.0.0",
"passport": "^0.7.0",
"passport-local": "^1.0.0",
"passport-local-mongoose": "^7.1.2"
```

---

## 👨‍💻 Author

Made with ❤️ by **Shahalam**

---

## 📄 License

This project is licensed under the ISC License.

<!-- Here's a complete and professional `README.md` template for your **Vite + React** project with:

* Project intro
* How to run
* Contact page info with EmailJS
* Tech stack
* Folder structure (optional section)

---

## 📄 `README.md`

```markdown
# 🌐 Ashley — Premium Pomegranate Export Website

This is a responsive and modern website built with **Vite + React** for a business exporting fresh Indian pomegranates globally. It includes sections like Home, About Us, Product Showcase, and Contact Us — all without a backend.

---

## 🚀 Live Demo

🔗 [View Website](https://your-deployed-site-link.com)

---

## 📂 Project Structure

```

├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── tailwind.config.js (if used)

````

---

## 🛠️ How to Run This Project

### ✅ 1. Clone the Repository
```bash
git clone https://github.com/prajyot-codes/Ashley-Global-Exim-Website
cd Ashley-Global-Exim-Website
````

### ✅ 2. Install Dependencies

Make sure you have Node.js v16 or above.

```bash
npm install
```

### ✅ 3. Run Development Server

```bash
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

### ✅ 4. Build for Production

```bash
npm run build
```

### ✅ 5. Preview the Build

```bash
npm run preview
```

---

## ✉️ Contact Page Setup (via EmailJS)

This project includes a **Contact Us** form that works without a backend using [EmailJS](https://emailjs.com/).

### 📧 Features:

* Fields: Name, WhatsApp Number, Email, Message
* WhatsApp Business link
* Business email and phone
* Google Maps embedded office address

### 🔧 How to Configure:

1. Go to [EmailJS.com](https://emailjs.com/) and sign up
2. Add your email service (e.g., Gmail)
3. Create a new **email template** with fields: `user_name`, `user_whatsapp`, `user_email`, `message`
4. Copy your:

   * **Service ID**
   * **Template ID**
   * **Public Key**
5. In your project:

   ```bash
   npm install @emailjs/browser
   ```
6. In `Contact.jsx`, use:

   ```js
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
   ```

---

## 🛠 Tech Stack

* ⚡ Vite
* ⚛️ React
* 💨 Tailwind CSS 
* ✉️ EmailJS *(contact form integration)*
* 🗺 Google Maps Embed

---

## 📬 Contact

**Email:** [ashleyglobalexim5@gmail.com](mailto:ashleyglobalexim5@gmail.com)
**Phone:** +91-7972586650
**Alternative Phone :** +91-9834093923
**WhatsApp:** [Chat on WhatsApp](https://wa.me/917972586650)
**Office Address:** Khamgaon, Maharashtra, India, 444303

---

## 🧾 License

This project is licensed under the MIT License.
Feel free to fork and customize it for your own business!


```

# 📝 Dynamic JSON-Driven Form Builder

## 🚀 Project Overview
This project is built with **Angular 18** and **TailwindCSS**, featuring a **custom component-based architecture**. It dynamically generates forms based on a JSON configuration and applies validation rules accordingly.

---

## 📌 How to Start the Project

1. **Clone the repository**
2. **Install dependencies** using `npm install`
3. **Run the project** with `ng serve`

The application will be available at `http://localhost:4200/`.

---

## 📜 JSON Structure

The project uses a dynamic form structure based on the following interface:

```typescript
export interface Field {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  validations?: Validations;
  defaultValue?: any;
  fields?: Field[];
  options?: Option[];
}

export interface Option {
  value: string;
  label: string;
}

export interface Validations {
  required?: boolean;
  email?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  async?: string;
}
```

---

## 📌 Features
✔ **Supports various field types** (text, email, password, select, checkbox, etc.).
✔ **Applies dynamic validation rules** from the JSON schema.
✔ **Handles nested form groups and repeatable fields** (e.g., hobbies list).
✔ **Provides real-time validation feedback** to the user.
✔ **Includes a live preview panel** displaying form data as the user fills it out.
✔ **Submits the form and displays a confirmation message.**
✔ **Automatically saves data on every change** to preserve form progress.
✔ **Implements an async email validator** when `validations` contains `async: 'email'`.

---

## 📌 Services and Custom Directives
- A **service contains the JSON form structure**, providing dynamic field generation.
- A **custom directive for phone number formatting** is applied when `type: 'tel'`.
- A **test file is included for the dynamic component** to ensure functionality.

---

## ⚡ Bonus Features (Optional, Extra Points)
🚀 **Async Validation**: API-based validation for email uniqueness.
🚀 **State Persistence**: Stores form progress in local storage.
🚀 **Custom Directives/Pipes**: Input formatting for specific fields.
🚀 **Unit Testing**: Test cases for key form functionalities.

📌 **Now you’re ready to build! 🚀**


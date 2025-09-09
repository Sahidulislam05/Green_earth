# README question answers.

## 1) What is the difference between var, let, and const? 
- **var** → জাভাস্ক্রিপ্টে আগে থেকে ব্যবহৃত হয়। এর স্কোপ ফাংশন লেভেল পর্যন্ত থাকে। একই ভ্যারিয়েবল আবার ডিক্লেয়ার করা যায়।  
- **let** → ES6 এ আসা নতুন উপায়। ব্লক স্কোপড ({} এর ভেতরে সীমাবদ্ধ)। একবার ডিক্লেয়ার করলে আবার ডিক্লেয়ার করা যায় না। তবে মান পরিবর্তন করা যায়।  
- **const** → কনস্ট্যান্ট ভ্যালু রাখার জন্য ব্যবহার হয়। একবার মান সেট করলে পরে পরিবর্তন করা যায় না। তবে অবজেক্ট বা অ্যারের ভেতরের মান পরিবর্তন করা যায়।  

---

## 2) What is the difference between map(), forEach(), and filter()? 
- **map()** → প্রতিটি এলিমেন্টের ওপর কাজ করে নতুন একটি অ্যারে রিটার্ন করে।  
- **forEach()** → শুধু লুপ চালায় এবং প্রতিটি এলিমেন্টে কাজ করে, কিন্তু নতুন কিছু রিটার্ন করে না।  
- **filter()** → যেসব এলিমেন্ট শর্ত মেনে চলে সেগুলোকে নিয়ে নতুন অ্যারে তৈরি করে।  

---
## 3) What are arrow functions in ES6?
### Arrow Function (ES6)  
- এটি ফাংশন লেখার শর্টকাট সিনট্যাক্স।  
- `function` কীওয়ার্ড লাগে না।  
- `this` কনটেক্সটকে সহজভাবে হ্যান্ডেল করতে সাহায্য করে।  

**উদাহরণ:**   js
const add = (a, b) => a + b;


## 4) How does destructuring assignment work in ES6?
### Destructuring Assignment (ES6)

অ্যারে বা অবজেক্ট থেকে আলাদা আলাদা ভ্যারিয়েবলে মান নেওয়ার সহজ পদ্ধতি।

কোড ছোট ও পরিষ্কার হয়।

উদাহরণ:

const [x, y] = [10, 20];  
console.log(x); // 10  
console.log(y); // 20  

const {name, age} = {name: "Sahidul", age: 21};  
console.log(name);  
console.log(age);  


## 5) Explain template literals in ES6. How are they different from string concatenation?
### Template Literals (ES6)

ব্যাকটিক (`) ব্যবহার করে লেখা হয়।

${} এর ভেতর ভ্যারিয়েবল বা এক্সপ্রেশন বসানো যায়।

সাধারণ string concatenation (+) এর চেয়ে সহজ ও পড়তে সুন্দর।

উদাহরণ:

const name = "Sahidul";  
const age = 21;  
console.log(`My name is ${name} and I am ${age} years old.`);

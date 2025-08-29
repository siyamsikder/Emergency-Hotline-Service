1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   ans: getElementById একটি একক আইডি দিয়ে একটিমাত্র এলিমেন্টকে খুঁজে বের করে।
   getElementsByClassName একটি একটি অবজেক্ট ফেরত দেয়, যা দেখতে অনেকটা অ্যারের মতো হলেও এটি একটি অ্যারের লাইক object।
   querySelector কোনো CSS সিলেক্টর ব্যবহার করে ডকুমেন্টের প্রথম ম্যাচ করা এলিমেন্টকে খুঁজে বের করে।
   querySelectorAll একই CSS সিলেক্টর ব্যবহার করে ডকুমেন্টের সব ম্যাচ করা এলিমেন্টকে খুঁজে বের করে।

2. How do you create and insert a new element into the DOM?
   ans:ইভেন্ট বাবলিং হলো একটি প্রক্রিয়া যেখানে একটি ইভেন্ট নির্দিষ্ট এলিমেন্টে ট্রিগার হয়, তখন সেই ইভেন্টটি তার প্যারেন্ট এলিমেন্টগুলোর দিকে উপরের দিকে উঠতে থাকে।এর ফলে প্যারেন্ট এলিমেন্টগুলোর ওপর যদি কোনো ইভেন্ট হ্যান্ডলার থাকে, তাহলে সেটিও ট্রিগার হয়।
   
3. What is Event Bubbling and how does it work?
   ans: এটি হলো একটি প্রক্রিয়া যেখানে কোনো একটি এলিমেন্টে ইভেন্ট ট্রিগার হলে সেই ইভেন্টটি তার প্যারেন্ট এলিমেন্টগুলোর দিকে উপরের দিকে প্রবাহিত হতে থাকে। এর ফলে প্রতিটি প্যারেন্ট এলিমেন্টও সেই ইভেন্টকে শুনতে পায় এবং তাদের জন্য নির্ধারিত হ্যান্ডলার থাকলে তা কার্যকর হয়।

4. What is Event Delegation in JavaScript? Why is it useful?
   ans:Event Delegation হলো parent element এ event listener বসিয়ে child element এর ইভেন্ট হ্যান্ডেল করার টেকনিক যা কোড ছোট করে পারফরম্যান্স বাড়ায় এবং dynamic elements এর জন্যও কাজ করে।

5. What is the difference between preventDefault() and stopPropagation() methods?
   ans:preventDefault element এর default কাজ বন্ধ করে যেমন link এ ক্লিক করলে redirect না হওয়া।
       আর stopPropagation event কে parent element এ propagate হওয়া থেকে আটকায়।

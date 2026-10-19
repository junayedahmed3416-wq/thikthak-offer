# thikthak-offer
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>প্রিমিয়াম শার্ট কম্বো অফার - থিকথাক</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Hind Siliguri', sans-serif; }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 pb-20">

  <!-- Top Announcement Bar -->
  <div class="bg-red-600 text-white text-center py-2 px-4 font-semibold text-sm sm:text-base shadow">
    🔥 সীমিত সময়ের বিশেষ অফার! স্টক শেষ হওয়ার আগেই অর্ডার করুন!
  </div>

  <!-- Header Section -->
  <header class="bg-white shadow-md py-4 px-6 sticky top-0 z-50 flex justify-between items-center">
    <div class="text-2xl font-bold text-red-600 tracking-wide">THIKTHAK</div>
    <div class="flex items-center gap-3">
      <a href="https://www.facebook.com/share/1C9ZupXw8y/" target="_blank" class="text-xs sm:text-sm bg-blue-600 text-white px-3 py-1.5 rounded-full font-bold shadow hover:bg-blue-700 transition">আমাদের পেইজ</a>
      <a href="#order-form" class="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow hover:bg-red-700 transition">অর্ডার করুন</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-4xl mx-auto px-4 pt-6 pb-4">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div class="relative">
        <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80" alt="Shirt Combo" class="w-full h-72 sm:h-96 object-cover">
        <span class="absolute top-4 left-4 bg-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow">২৬% ছাড়</span>
      </div>

      <div class="p-6 text-center">
        <h1 class="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-2">প্রিমিয়াম ক্যাজুয়াল শার্ট কম্বো অফার</h1>
        <p class="text-gray-600 text-sm sm:text-base mb-4">১০০% কটন ফ্যাব্রিক ও প্রিমিয়াম স্টিচিং নিয়ে তৈরি সেরা কোয়ালিটি শার্টের আকর্ষণীয় কম্বো প্যাকেজ!</p>
        
        <!-- Pricing Banner -->
        <div class="bg-red-50 rounded-xl p-4 my-4 flex justify-center items-center gap-4 border border-red-100">
          <div>
            <span class="text-gray-400 line-through text-lg sm:text-xl font-bold">১২৫০৳</span>
            <span class="text-2xl sm:text-4xl font-extrabold text-red-600 ml-2">৯৯০৳</span>
          </div>
        </div>

        <!-- Urgency Countdown Timer -->
        <div class="bg-gray-900 text-white p-3 rounded-lg my-4">
          <p class="text-xs sm:text-sm text-gray-300 mb-1">⏰ অফারের সময় বাকি আছে:</p>
          <div class="text-lg sm:text-2xl font-mono font-bold text-yellow-400" id="timer">05:42:10</div>
        </div>

        <a href="#order-form" class="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-3.5 rounded-xl shadow-lg transition transform active:scale-95">
          🛒 সরাসরি অর্ডার করুন (ক্যাশ অন ডেলিভারি)
        </a>
      </div>
    </div>
  </section>

  <!-- Product Features -->
  <section class="max-w-4xl mx-auto px-4 py-6">
    <h2 class="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6">আমাদের শার্ট কেন সেরা?</h2>
    
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="bg-white p-4 rounded-xl shadow text-center border border-gray-100">
        <div class="text-3xl mb-2">🧵</div>
        <h3 class="font-bold text-sm sm:text-base text-gray-800">১০০% সুতি কাপড়</h3>
        <p class="text-xs text-gray-500 mt-1">অত্যন্ত আরামদায়ক ও সফ্‌ট</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow text-center border border-gray-100">
        <div class="text-3xl mb-2">✨</div>
        <h3 class="font-bold text-sm sm:text-base text-gray-800">পাকা কালার Guarantee</h3>
        <p class="text-xs text-gray-500 mt-1">ধোয়ার পর রঙ উঠবে না</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow text-center border border-gray-100">
        <div class="text-3xl mb-2">🚚</div>
        <h3 class="font-bold text-sm sm:text-base text-gray-800">ক্যাশ অন ডেলিভারি</h3>
        <p class="text-xs text-gray-500 mt-1">পণ্য হাতে পেয়ে টাকা দিন</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow text-center border border-gray-100">
        <div class="text-3xl mb-2">🔄</div>
        <h3 class="font-bold text-sm sm:text-base text-gray-800">সহজ রিটার্ন পলিসি</h3>
        <p class="text-xs text-gray-500 mt-1">পছন্দ না হলে তাত্ক্ষণিক রিটার্ন</p>
      </div>
    </div>
  </section>

  <!-- Size Chart Section -->
  <section class="max-w-4xl mx-auto px-4 py-6">
    <div class="bg-white p-6 rounded-2xl shadow border border-gray-100">
      <h2 class="text-xl font-bold text-gray-900 text-center mb-4">📐 সাইজ মেজারমেন্ট (ইঞ্চি)</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-center text-gray-600 border-collapse">
          <thead>
            <tr class="bg-gray-100 text-gray-800 font-bold">
              <th class="p-3 border">সাইজ</th>
              <th class="p-3 border">চেস্ট (Chest)</th>
              <th class="p-3 border">লেন্থ (Length)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border font-semibold">M</td>
              <td class="p-3 border">38"</td>
              <td class="p-3 border">28"</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="p-3 border font-semibold">L</td>
              <td class="p-3 border">40"</td>
              <td class="p-3 border">29"</td>
            </tr>
            <tr>
              <td class="p-3 border font-semibold">XL</td>
              <td class="p-3 border">42"</td>
              <td class="p-3 border">30"</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="p-3 border font-semibold">XXL</td>
              <td class="p-3 border">44"</td>
              <td class="p-3 border">31"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Order Form Section -->
  <section id="order-form" class="max-w-xl mx-auto px-4 py-6">
    <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border-2 border-red-500">
      <h2 class="text-2xl font-extrabold text-center text-gray-900 mb-2">অর্ডার করতে নিচের ফর্মটি পূরণ করুন</h2>
      <p class="text-center text-red-600 font-semibold text-sm mb-6">কোনো অগ্রিম টাকা দিতে হবে না, পণ্য হাতে পেয়ে চেক করে টাকা দেবেন!</p>

      <form id="checkoutForm" onsubmit="handleOrder(event)" class="space-y-4">
        <div>
          <label class="block font-bold text-gray-700 mb-1">আপনার নাম *</label>
          <input type="text" id="name" required placeholder="আপনার পুরো নাম লিখুন" class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none">
        </div>

        <div>
          <label class="block font-bold text-gray-700 mb-1">মোবাইল নম্বর *</label>
          <input type="tel" id="phone" required placeholder="01XXXXXXXXX" class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none">
        </div>

        <div>
          <label class="block font-bold text-gray-700 mb-1">সম্পূর্ণ ঠিকানা *</label>
          <textarea id="address" required rows="2" placeholder="জেলা, থানা এবং বাসার সম্পূর্ণ ঠিকানা লিখুন" class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"></textarea>
        </div>

        <div>
          <label class="block font-bold text-gray-700 mb-1">সাইজ নির্বাচন করুন *</label>
          <select id="size" required class="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none font-semibold">
            <option value="M">M - (38 Chest)</option>
            <option value="L">L - (40 Chest)</option>
            <option value="XL">XL - (42 Chest)</option>
            <option value="XXL">XXL - (44 Chest)</option>
          </select>
        </div>

        <!-- Order Summary Box -->
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm space-y-2">
          <div class="flex justify-between">
            <span>শার্ট কম্বো অফার মূল্য:</span>
            <span class="font-bold">৯৯০৳</span>
          </div>
          <div class="flex justify-between">
            <span>ডেলিভারি চার্জ:</span>
            <span class="font-bold text-emerald-600">ফ্রি (সীমিত সময়ের জন্য)</span>
          </div>
          <hr>
          <div class="flex justify-between text-base font-bold text-gray-900">
            <span>মোট মূল্য:</span>
            <span class="text-red-600 text-xl">৯৯০৳</span>
          </div>
        </div>

        <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-xl text-lg transition transform active:scale-95">
          ✅ অর্ডার নিশ্চিত করুন (৯৯০৳)
        </button>
      </form>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-gray-900 text-white text-center py-6 px-4 mt-10 mb-12 sm:mb-0">
    <p class="font-bold text-lg mb-2">THIKTHAK</p>
    <p class="text-sm text-gray-400 mb-4">যে কোনো প্রয়োজনে আমাদের ফেসবুক পেইজে মেসেজ করুন।</p>
    <a href="https://www.facebook.com/share/1C9ZupXw8y/" target="_blank" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition">ফেসবুক পেইজ ভিজিট করুন</a>
    <p class="text-xs text-gray-500 mt-6">© 2026 Thikthak. All Rights Reserved.</p>
  </footer>

  <!-- Sticky Bottom Order Button (Mobile View) -->
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 sm:hidden shadow-lg flex justify-between items-center">
    <div>
      <span class="text-xs text-gray-500 block">কম্বো অফার প্রাইজ:</span>
      <span class="text-xl font-bold text-red-600">৯৯০৳</span>
    </div>
    <a href="#order-form" class="bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold shadow text-sm">অর্ডার করুন</a>
  </div>

  <!-- JavaScript for Countdown Timer & Order Submission -->
  <script>
    // Countdown Timer logic
    function startTimer(duration, display) {
      let timer = duration, hours, minutes, seconds;
      setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);
    }

    window.onload = function () {
      const fiveHours = 5 * 3600 + 42 * 60 + 10;
      const display = document.querySelector('#timer');
      startTimer(fiveHours, display);
    };

    // Form Order Handler (Sends order to your WhatsApp)
    function handleOrder(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const size = document.getElementById('size').value;

      // Your WhatsApp Number
      const myWhatsAppNumber = "8801610456223"; 

      const message = `হ্যালো, আমি শার্ট কম্বো অফারটি অর্ডার করতে চাই।%0A%0A` +
                      `👤 নাম: ${name}%0A` +
                      `📞 মোবাইল: ${phone}%0A` +
                      `📍 ঠিকানা: ${address}%0A` +
                      `👕 সাইজ: ${size}%0A` +
                      `💰 মোট মূল্য: ৯৯০ টাকা`;

      // Open WhatsApp with order details
      window.open(`https://wa.me/${myWhatsAppNumber}?text=${message}`, '_blank');
    }
  </script>
</body>
</html>

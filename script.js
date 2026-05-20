  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Smooth nav highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
    });
  });
  // Typing animation
const words = [
  "Data Analyst",
  "Database Developer",
  "SQL Expert",
  "Power BI Developer",
  "Revenue Intelligence Builder"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = words[wordIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => isDeleting = true, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();
// Animated counters
function animateCounter(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      animateCounter(el, target, 1500);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});
// Dark/Light mode toggle
function toggleTheme() {
  document.body.classList.toggle('light');
  const btn = document.getElementById('themeToggle');
  if (document.body.classList.contains('light')) {
    btn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
}

// Remember theme preference
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  document.getElementById('themeToggle').textContent = '☀️';
}
// Page loader
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loaderBar');
let progress = 0;

const loadInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress >= 100) {
    progress = 100;
    loaderBar.style.width = '100%';
    clearInterval(loadInterval);
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 300);
  } else {
    loaderBar.style.width = progress + '%';
  }
}, 100);
// Hamburger menu
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}
// Scroll progress bar
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scrollBar').style.width = scrollPercent + '%';
});
// Fake sales database
const salesData = [
  { region: "North", revenue: 120000 },
  { region: "South", revenue: 95000 },
  { region: "East", revenue: 143000 },
  { region: "West", revenue: 87000 }
];

function runSQL() {

  const tableBody = document.querySelector('#resultTable tbody');

  tableBody.innerHTML = '';

  salesData.forEach(row => {
    tableBody.innerHTML += `
      <tr>
        <td>${row.region}</td>
        <td>$${row.revenue.toLocaleString()}</td>
      </tr>
    `;
  });

}

function toggleChat() {
  const bot = document.getElementById("aiBot");

  if (bot.style.display === "block") {
    bot.style.display = "none";
  } else {
    bot.style.display = "block";
  }
}

function sendMessage() {

  const input = document.getElementById("userInput");
  const messages = document.getElementById("chatMessages");

  const userText = input.value.trim();

  if (!userText) return;

  messages.innerHTML += `
    <div class="user-msg">${userText}</div>
  `;

  let reply = "I don't understand that yet.";

  const msg = userText.toLowerCase();

  if (msg.includes("sql")) {
    reply = "Akingboye specializes in PostgreSQL, Supabase, analytical queries and revenue intelligence systems.";
  }

  else if (msg.includes("project")) {
    reply = "One of the featured projects is the Revenue Intelligence System containing forecasting, churn analysis and cohort analytics.";
  }

  else if (msg.includes("power bi")) {
    reply = "Akingboye uses Power BI for dashboarding and business intelligence reporting.";
  }

  else if (msg.includes("experience")) {
    reply = "Akingboye is a Junior Data Analyst focused on transforming raw data into actionable insights.";
  }
else if (
  msg.includes("who is akingboye") ||
  msg.includes("tell me about akingboye")
) {
  reply = "Akingboye is a data analyst and database developer focused on SQL systems, revenue intelligence and analytics engineering.";
}

else if (
  msg.includes("what can you do") ||
  msg.includes("who are you")
) {
  reply = "I'm Akingboye's AI assistant. I can explain his projects, technical skills, experience and analytics systems.";
}

else if (
  msg.includes("best project") ||
  msg.includes("main project")
) {
  reply = "The flagship project is the Revenue Intelligence System — an advanced SQL analytics platform with forecasting, churn analysis and cohort tracking.";
}

else if (
  msg.includes("revenue intelligence")
) {
  reply = "The Revenue Intelligence System was built using PostgreSQL and Supabase. It analyzes revenue growth, customer behavior, forecasting and business KPIs.";
}

else if (
  msg.includes("why should we hire")
) {
  reply = "Akingboye combines technical SQL expertise with strong analytical thinking and modern dashboard development.";
}

else if (
  msg.includes("what databases")
) {
  reply = "Akingboye primarily works with PostgreSQL and Supabase for scalable analytical systems.";
}

else if (
  msg.includes("analytics")
) {
  reply = "Akingboye builds analytics systems focused on forecasting, KPI tracking, segmentation and business intelligence.";
}

else if (
  msg.includes("future goals")
) {
  reply = "Akingboye aims to become a high-level analytics engineer building enterprise intelligence systems.";
}

else if (
  msg.includes("experience level")
) {
  reply = "Akingboye is currently growing as a data analyst with strong hands-on SQL and analytics engineering experience.";
}

else if (
  msg.includes("contact") ||
  msg.includes("reach")
) {
  reply = "You can reach Akingboye through the contact section below on this portfolio.";
}

else if (
  msg.includes("github")
) {
  reply = "Akingboye's GitHub contains SQL systems, analytics projects and database engineering work.";
}

else if (
  msg.includes("power bi")
) {
  reply = "Power BI is used for building interactive dashboards and executive-level reporting systems.";
}

else if (
  msg.includes("sql")
) {
  reply = "SQL is one of Akingboye's strongest skills, especially PostgreSQL analytics, advanced queries and revenue intelligence systems.";
}

else if (
  msg.includes("ai")
) {
  reply = "This AI assistant was custom-built into the portfolio using JavaScript to create an interactive experience.";
}

else if (
  msg.includes("who is Mishael") ||
  msg.includes("tell me about Mishael")
) {
  reply = "Mishael Akingboye is a data analyst and database developer focused on SQL systems, revenue intelligence and analytics engineering.";
}

else if (
  msg.includes("hi") ||
  msg.includes("hello") ||
  msg.includes("hey")
) {
  const greetings = [
    "Hello 👋 How can I help you today?",
    "Hi there — ask me anything about Akingboye or his projects.",
    "Hey 👋 I'm the AI assistant for this portfolio.",
    "Welcome 🚀 Ask about projects, SQL, analytics or experience."
  ];

  reply = greetings[Math.floor(Math.random() * greetings.length)];
}
else if (
  msg.includes("how are you")
) {
  reply = "I'm doing great 🚀 Ready to talk about analytics, SQL systems and projects.";
}
else if (
  msg.includes("thanks") ||
  msg.includes("thank you")
) {
  reply = "You're welcome 👌";
}
else if (
  msg.includes("joke")
) {
  reply = "Why do analysts love SQL? Because they enjoy good relationships 😄";
}
else if (
  msg.includes("skills")
) {
  reply = "Akingboye works with SQL, PostgreSQL, Power BI, Supabase, analytics engineering and dashboard systems.";
}
else if (
  msg.includes("learning") ||
  msg.includes("currently studying")
) {
  reply = "Currently expanding into Python, advanced analytics engineering and AI-powered systems.";
}
else {
  reply = "I'm not fully trained for that yet 🤖 Try asking about SQL, projects, analytics, Power BI, GitHub or experience.";
}


  setTimeout(() => {
  addMessage(reply, "bot");
}, 700);

    messages.scrollTop = messages.scrollHeight;

  }, 500);

  input.value = "";
}


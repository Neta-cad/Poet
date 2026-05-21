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

  // USER MESSAGE
  messages.innerHTML += `
    <div class="user-msg">${userText}</div>
  `;

  const msg = userText.toLowerCase();

  let reply = "I can answer questions about SQL, analytics, projects, Power BI, GitHub and Revenue Intelligence Systems.";

  // RESPONSES

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
    reply = "I'm Akingboye's AI assistant. I can explain projects, technical skills, analytics systems and SQL work.";
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
    msg.includes("ai")
  ) {
    reply = "This AI assistant was custom-built into the portfolio using JavaScript to create an interactive experience.";
  }




  else if (
    msg.includes("hello") ||
    msg.includes("hi") ||
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

// SMART AI RESPONSES

if (
  msg.includes("hello") ||
  msg.includes("hi") ||
  msg.includes("hey") ||
  msg.includes("good morning") ||
  msg.includes("good afternoon") ||
  msg.includes("good evening")
) {

  const greetings = [
    "Hello 👋 Welcome to Akingboye's portfolio.",
    "Hi there 🚀 Ask me anything about projects, SQL or analytics.",
    "Hey 👋 I'm the AI assistant for this portfolio.",
    "Welcome 🔥 How can I help you today?",
    "Hello 👨‍💻 Interested in analytics engineering or SQL systems?",
    "Nice to meet you 👋"
  ];

  reply = greetings[Math.floor(Math.random() * greetings.length)];
}

else if (
  msg.includes("how are you")
) {
  reply = "I'm doing great 🚀 Ready to talk about data, analytics and projects.";
}

else if (
  msg.includes("thank you") ||
  msg.includes("thanks")
) {
  reply = "You're welcome 👌";
}

else if (
  msg.includes("bye") ||
  msg.includes("goodbye")
) {
  reply = "Goodbye 👋 Thanks for visiting the portfolio.";
}

else if (
  msg.includes("who made you")
) {
  reply = "I was custom-built by Mishael Akingboye using JavaScript.";
}

else if (
  msg.includes("are you real")
) {
  reply = "I'm a portfolio AI assistant designed to answer questions about projects and technical skills.";
}

else if (
  msg.includes("what is your name")
) {
  reply = "I'm Akingboye's AI Assistant.";
}

else if (
  msg.includes("who is mishael") ||
  msg.includes("who is akingboye") ||
  msg.includes("tell me about mishael")
) {
  reply = "Mishael Akingboye is a data analyst and database developer focused on SQL systems, analytics engineering and revenue intelligence.";
}

else if (
  msg.includes("skills") ||
  msg.includes("what skills")
) {
  reply = "Akingboye specializes in SQL, PostgreSQL, Supabase, Power BI, data analytics, forecasting and dashboard systems.";
}

else if (
  msg.includes("sql")
) {
  reply = "SQL is one of Akingboye's strongest skills, especially PostgreSQL analytics and revenue intelligence systems.";
}

else if (
  msg.includes("power bi")
) {
  reply = "Power BI is used for interactive dashboards and executive reporting systems.";
}

else if (
  msg.includes("python")
) {
  reply = "Python is used for analytics, automation and data processing workflows.";
}

else if (
  msg.includes("database")
) {
  reply = "Akingboye works with PostgreSQL and Supabase to build scalable analytical database systems.";
}

else if (
  msg.includes("analytics")
) {
  reply = "Akingboye builds analytics systems focused on KPIs, forecasting, segmentation and business intelligence.";
}

else if (
  msg.includes("experience")
) {
  reply = "Akingboye is growing as a modern data analyst with strong SQL and analytics engineering experience.";
}

else if (
  msg.includes("github")
) {
  reply = "The GitHub contains SQL systems, analytics projects and database engineering work.";
}

else if (
  msg.includes("project")
) {
  reply = "Featured projects include the Revenue Intelligence System and multiple analytics case studies.";
}

else if (
  msg.includes("revenue intelligence")
) {
  reply = "The Revenue Intelligence System is a PostgreSQL analytics platform with forecasting, churn analysis and KPI tracking.";
}

else if (
  msg.includes("best project") ||
  msg.includes("main project")
) {
  reply = "The flagship project is the Revenue Intelligence System.";
}

else if (
  msg.includes("car insurance")
) {
  reply = "The Car Insurance Analytics project explored claim frequency, customer risk factors, household income patterns and insurance trends.";
}

else if (
  msg.includes("hire")
) {
  reply = "Akingboye combines analytical thinking, SQL engineering and modern dashboard development.";
}

else if (
  msg.includes("future")
) {
  reply = "The goal is to become a high-level analytics engineer building enterprise intelligence systems.";
}

else if (
  msg.includes("contact")
) {
  reply = "You can contact Akingboye through the contact section below.";
}

else if (
  msg.includes("joke")
) {
  reply = "Why do data analysts love SQL? Because they like relationships 😄";
}

else if (
  msg.includes("love you")
) {
  reply = "😂 I'm just code, but thanks.";
}

else if (
  msg.includes("ai")
) {
  reply = "This AI assistant was built into the portfolio using JavaScript.";
}

else if (msg.includes("data analyst")) {
  reply = "Akingboye is building modern data analytics systems focused on SQL engineering and business intelligence.";
}

else if (msg.includes("future data analyst")) {
  reply = "The future of data analytics combines SQL, AI, cloud engineering and business intelligence.";
}

else if (msg.includes("machine learning")) {
  reply = "Akingboye is exploring machine learning concepts alongside analytics engineering.";
}

else if (msg.includes("dashboard")) {
  reply = "Interactive dashboards help businesses monitor KPIs and make data-driven decisions.";
}

else if (msg.includes("kpi")) {
  reply = "KPIs are important metrics used to measure business performance and growth.";
}

else if (msg.includes("forecast")) {
  reply = "Forecasting helps businesses predict future revenue, growth and customer behavior.";
}

else if (msg.includes("business intelligence")) {
  reply = "Business Intelligence transforms raw data into actionable insights.";
}

else if (msg.includes("cloud")) {
  reply = "Cloud platforms are essential for scalable analytics and modern data systems.";
}

else if (msg.includes("supabase")) {
  reply = "Supabase was used as the backend database platform for analytical systems.";
}

else if (msg.includes("postgresql")) {
  reply = "PostgreSQL is one of the most powerful relational databases for analytics engineering.";
}

else if (msg.includes("visualization")) {
  reply = "Data visualization makes complex insights easier to understand.";
}

else if (msg.includes("automation")) {
  reply = "Automation improves data workflows and reduces repetitive tasks.";
}

else if (msg.includes("big data")) {
  reply = "Big data technologies help process massive business datasets efficiently.";
}

else if (msg.includes("etl")) {
  reply = "ETL pipelines are used to extract, transform and load business data.";
}

else if (msg.includes("data cleaning")) {
  reply = "Data cleaning is critical for accurate analytics and reporting.";
}

else if (msg.includes("excel")) {
  reply = "Excel remains an important tool for business reporting and quick analysis.";
}

else if (msg.includes("team")) {
  reply = "Akingboye collaborates effectively and enjoys solving analytical problems.";
}

else if (msg.includes("problem solving")) {
  reply = "Strong problem-solving is one of the key strengths behind the analytics projects.";
}

else if (msg.includes("why analytics")) {
  reply = "Analytics helps businesses make smarter and faster decisions.";
}

else if (msg.includes("goal")) {
  reply = "The long-term goal is to build enterprise-grade intelligence systems.";
}

else if (msg.includes("motivation")) {
  reply = "Curiosity and problem-solving drive the passion for analytics engineering.";
}

else if (msg.includes("learning")) {
  reply = "Continuous learning is important in the fast-changing tech industry.";
}

else if (msg.includes("career")) {
  reply = "Akingboye is building a strong career in analytics engineering and data systems.";
}

else if (msg.includes("strength")) {
  reply = "Technical SQL expertise and analytical thinking are major strengths.";
}

else if (msg.includes("weakness")) {
  reply = "Like every growing engineer, continuous improvement is part of the journey.";
}

else if (msg.includes("internship")) {
  reply = "Hands-on analytics projects help develop real-world experience.";
}

else if (msg.includes("remote")) {
  reply = "Modern analytics teams often collaborate remotely using cloud technologies.";
}

else if (msg.includes("skills for analyst")) {
  reply = "Important analyst skills include SQL, Power BI, Excel, Python and communication.";
}

else if (msg.includes("communication")) {
  reply = "Communication is essential for explaining analytical insights clearly.";
}

else if (msg.includes("decision making")) {
  reply = "Data-driven decision making improves business performance.";
}

else if (msg.includes("startup")) {
  reply = "Analytics systems help startups understand growth and customer behavior.";
}

else if (msg.includes("enterprise")) {
  reply = "Enterprise analytics focuses on scalable data systems and intelligence platforms.";
}

else if (msg.includes("revenue")) {
  reply = "Revenue analytics helps businesses monitor growth and profitability.";
}

else if (msg.includes("customer")) {
  reply = "Customer analytics reveals behavior patterns and retention trends.";
}

else if (msg.includes("churn")) {
  reply = "Churn analysis helps businesses understand customer loss patterns.";
}

else if (msg.includes("cohort")) {
  reply = "Cohort analysis tracks customer groups over time for deeper insights.";
}

else if (msg.includes("data engineer")) {
  reply = "Data engineering focuses on building scalable systems for processing data.";
}

else if (msg.includes("analytics engineer")) {
  reply = "Analytics engineering combines software engineering and business analytics.";
}

else if (msg.includes("technology")) {
  reply = "Modern technology is transforming analytics and business intelligence.";
}

else if (msg.includes("innovation")) {
  reply = "Innovation drives better analytical systems and smarter businesses.";
}

else if (msg.includes("performance")) {
  reply = "Performance optimization is important in analytical databases.";
}

else if (msg.includes("query")) {
  reply = "Optimized SQL queries improve analytics performance significantly.";
}

else if (msg.includes("database design")) {
  reply = "Database design affects scalability, speed and analytical accuracy.";
}

else if (msg.includes("api")) {
  reply = "APIs help connect applications and analytical systems together.";
}

else if (msg.includes("frontend")) {
  reply = "Frontend systems improve user interaction and visualization.";
}

else if (msg.includes("backend")) {
  reply = "Backend systems power databases, analytics and application logic.";
}

else if (msg.includes("javascript")) {
  reply = "JavaScript powers the interactive features on this portfolio.";
}

else if (msg.includes("website")) {
  reply = "This portfolio website was custom-designed and developed from scratch.";
}

else if (msg.includes("portfolio")) {
  reply = "This portfolio showcases analytics projects, SQL systems and technical skills.";
}

else if (msg.includes("challenge")) {
  reply = "Every analytics project presents unique technical and business challenges.";
}

else if (msg.includes("solution")) {
  reply = "Strong analytical solutions combine data, logic and business understanding.";
}

else if (msg.includes("industry")) {
  reply = "Data analytics is transforming industries worldwide.";
}

else if (msg.includes("finance")) {
  reply = "Financial analytics helps businesses track revenue and profitability.";
}

else if (msg.includes("insurance")) {
  reply = "Insurance analytics helps identify customer risk and claim trends.";
}

else if (msg.includes("healthcare")) {
  reply = "Healthcare analytics improves operational efficiency and patient insights.";
}

else if (msg.includes("retail")) {
  reply = "Retail analytics helps businesses understand customer purchasing behavior.";
}

else if (msg.includes("future of ai")) {
  reply = "AI will continue transforming analytics, automation and decision-making.";
}

else if (msg.includes("future of sql")) {
  reply = "SQL remains one of the most important technologies in data analytics.";
}

else if (msg.includes("coding")) {
  reply = "Coding enables automation, analytics and intelligent applications.";
}

else if (msg.includes("smart")) {
  reply = "This AI assistant was designed to provide smart portfolio interactions.";
}

else if (msg.includes("fun fact")) {
  reply = "Fun fact 🚀 SQL has remained one of the top technologies in data careers for decades.";
}

else if (msg.includes("inspiration")) {
  reply = "Building intelligent systems and solving business problems is a major inspiration.";
}

else if (msg.includes("leadership")) {
  reply = "Leadership in tech involves communication, innovation and problem-solving.";
}

else if (msg.includes("success")) {
  reply = "Success in analytics comes from consistency, curiosity and continuous learning.";
}

else if (msg.includes("growth")) {
  reply = "Growth comes from building real projects and solving practical problems.";
}

else if (msg.includes("hardworking")) {
  reply = "Strong dedication and consistent learning drive technical growth.";
}

else if (msg.includes("passion")) {
  reply = "There is strong passion for analytics engineering and intelligent systems.";
}

else if (msg.includes("creative")) {
  reply = "Creativity is important for building innovative analytics solutions.";
}

else if (msg.includes("mentor")) {
  reply = "Learning from experienced professionals accelerates technical growth.";
}

else if (msg.includes("technology trends")) {
  reply = "AI, cloud analytics and automation are shaping future technology trends.";
}

else if (msg.includes("data science")) {
  reply = "Data science combines analytics, statistics and machine learning.";
}

else if (msg.includes("statistics")) {
  reply = "Statistics is essential for understanding patterns and analytical insights.";
}

else if (msg.includes("open source")) {
  reply = "Open-source technologies power many modern analytics systems.";
}

else if (msg.includes("motivate me")) {
  reply = "Consistency beats talent when talent stops learning 🚀";
}

else if (msg.includes("tell me something")) {
  reply = "Analytics engineering is one of the fastest-growing fields in technology.";
}

else if (msg.includes("random")) {
  reply = "Random fact 🚀 PostgreSQL is widely used for enterprise analytics systems.";
}

else if (
  msg.includes("what can you do")
) {
  reply = "I can explain projects, analytics systems, technical skills, SQL work and portfolio information.";
}

else {
  reply = "I may not understand that fully yet, but I can answer questions about analytics, SQL, databases, Power BI, projects and Akingboye's experience.";
}



  // BOT MESSAGE
  const typingId = Date.now();

messages.innerHTML += `
  <div class="bot-msg typing" id="typing-${typingId}">
    Analyst AI is typing...
  </div>
`;

messages.scrollTop = messages.scrollHeight;

setTimeout(() => {

  document.getElementById(`typing-${typingId}`).remove();

  messages.innerHTML += `
    <div class="bot-msg">${reply}</div>
  `;

  messages.scrollTop = messages.scrollHeight;

}, 1200);

  input.value = "";
}
const ctx = document.getElementById('analyticsChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Revenue Growth',
      data: [12,19,15,25,32,41],
      borderColor: '#00d4ff',
      backgroundColor: 'rgba(0,212,255,0.15)',
      tension: 0.4,
      fill: true
    }]
  },

  options: {
    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:'white'
        }
      }
    },

    scales:{
      x:{
        ticks:{ color:'#94a3b8' }
      },

      y:{
        ticks:{ color:'#94a3b8' }
      }
    }
  }
});
function toggleRecruiterMode(){

  document.body.classList.toggle('recruiter-mode');

  const btn = document.querySelector('.recruiter-btn');

  if(document.body.classList.contains('recruiter-mode')){
    btn.innerHTML = '✅ Exit Recruiter Mode';
  } else {
    btn.innerHTML = '⭐ Recruiter Mode';
  }

}
// Analytics Dashboard Charts
const chartDefaults = {
  color: '#94a3b8',
  borderColor: '#1e293b',
};

// 1. Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [{
      label: 'Revenue ($)',
      data: [1900000, 1520000, 1650000, 906000, 558000, 491000, 444000, 368000, 392000, 608000, 524000],
      borderColor: '#00d4ff',
      backgroundColor: 'rgba(0,212,255,0.08)',
      borderWidth: 2,
      pointBackgroundColor: '#00d4ff',
      pointRadius: 4,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#94a3b8', font: { size: 11 } } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } },
      y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } }
    }
  }
});

// 2. Pipeline Chart
const pipelineCtx = document.getElementById('pipelineChart').getContext('2d');
new Chart(pipelineCtx, {
  type: 'doughnut',
  data: {
    labels: ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'],
    datasets: [{
      data: [8, 12, 25, 18, 120, 15],
      backgroundColor: [
        'rgba(0,212,255,0.8)',
        'rgba(124,58,237,0.8)',
        'rgba(16,185,129,0.8)',
        'rgba(251,191,36,0.8)',
        'rgba(34,197,94,0.8)',
        'rgba(239,68,68,0.8)'
      ],
      borderColor: '#0e1420',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { 
        position: 'bottom',
        labels: { color: '#94a3b8', font: { size: 10 }, padding: 8 }
      }
    }
  }
});

// 3. Churn Chart
const churnCtx = document.getElementById('churnChart').getContext('2d');
new Chart(churnCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Retained',
        data: [85, 88, 90, 87, 82, 86, 89, 91, 88, 85, 87],
        backgroundColor: 'rgba(16,185,129,0.7)',
        borderRadius: 4
      },
      {
        label: 'Churned',
        data: [15, 12, 10, 13, 18, 14, 11, 9, 12, 15, 13],
        backgroundColor: 'rgba(239,68,68,0.7)',
        borderRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#94a3b8', font: { size: 11 } } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } },
      y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } }
    }
  }
});

// 4. Forecast Chart
const forecastCtx = document.getElementById('forecastChart').getContext('2d');
new Chart(forecastCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Forecasted',
        data: [1800000, 1450000, 1580000, 980000, 1100000, 1150000, 1280000, 1350000, 1420000, 1550000, 1650000],
        borderColor: '#7c3aed',
        borderWidth: 2,
        borderDash: [5, 5],
        pointBackgroundColor: '#7c3aed',
        pointRadius: 4,
        fill: false,
        tension: 0.4
      },
      {
        label: 'Actual',
        data: [1900000, 1520000, 1650000, 906000, 558000, 491000, 444000, 368000, 392000, 608000, 524000],
        borderColor: '#00d4ff',
        borderWidth: 2,
        pointBackgroundColor: '#00d4ff',
        pointRadius: 4,
        fill: false,
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#94a3b8', font: { size: 11 } } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } },
      y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: '#1e293b' } }
    }
  }
});

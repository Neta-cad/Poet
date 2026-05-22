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
function toggleChat(){

  const bot = document.getElementById("aiBot");

  if(bot.style.display === "flex"){
    bot.style.display = "none";
  } else {
    bot.style.display = "flex";
  }

}

// AI Assistant
const GROQ_API_KEY = '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';

const systemContext = `You are AAM AI Assistant — the personal AI of Akingboye Ayomide Mishael, a Junior Data Analyst based in Lagos, Nigeria.

About Mishael:
- Junior Data Analyst with 3+ years learning data analytics
- Proficient in SQL, Power BI and Excel
- Built RemoteHustleDB — a Master Operational Database with 10 tables on PostgreSQL/Supabase
- Built RevIQ — a Revenue Intelligence System with 12 tables, materialized views, functions, triggers and 12 analytical queries
- Advanced to Final Stage of Remote Hustle Competition — Internship Pathway
- Holds Data Analytics Certificate from Quantum Analytics
- Student at National Open University of Nigeria (NOUN)
- Email: akingboyeayomide29@gmail.com
- LinkedIn: linkedin.com/in/akingboye-ayomide
- GitHub: github.com/Neta-cad

You can answer questions about:
- Mishael's projects, skills and experience
- SQL, databases, data analytics
- Power BI, Excel
- General data science questions
- Career advice for data analysts

Be friendly, professional and helpful. Keep responses concise.`;

function toggleAI() {
  const aiWindow = document.getElementById('aiWindow');
  if (aiWindow.style.display === 'none' || aiWindow.style.display === '') {
    aiWindow.style.display = 'flex';
    aiWindow.style.flexDirection = 'column';
    document.getElementById('aiInput').focus();
  } else {
    aiWindow.style.display = 'none';
  }
}

async function sendAIMessage() {
  const input = document.getElementById('aiInput');
  const messages = document.getElementById('aiMessages');
  const userMessage = input.value.trim();
  if (!userMessage) return;

  messages.innerHTML += `
    <div style="background:rgba(124,58,237,0.15);border:1px solid rgba(124,58,237,0.2);border-radius:12px 12px 0 12px;padding:10px 14px;font-size:0.83rem;color:var(--text);max-width:85%;align-self:flex-end;">
      ${userMessage}
    </div>`;
  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  messages.innerHTML += `
    <div id="typingIndicator" style="background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.15);border-radius:12px 12px 12px 0;padding:10px 14px;font-size:0.83rem;color:var(--muted);max-width:85%;">
      Analyzing... ✨
    </div>`;
  messages.scrollTop = messages.scrollHeight;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 300,
        messages: [
          { role: 'system', content: systemContext },
          { role: 'user', content: userMessage }
        ]
      })
    });

    const data = await response.json();
    if (!data.choices || !data.choices[0]) {
  throw new Error(JSON.stringify(data));
}
const reply = data.choices[0].message.content;

    document.getElementById('typingIndicator').remove();

    const botDiv = document.createElement('div');
    botDiv.style.cssText = `background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.15);border-radius:12px 12px 12px 0;padding:10px 14px;font-size:0.83rem;color:var(--text);max-width:85%;`;
    messages.appendChild(botDiv);

    let i = 0;
    const typing = setInterval(() => {
      botDiv.textContent = reply.substring(0, i);
      i++;
      messages.scrollTop = messages.scrollHeight;
      if (i > reply.length) clearInterval(typing);
    }, 20);

  } catch (error) {
    document.getElementById('typingIndicator').remove();
    messages.innerHTML += `
      <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:12px 12px 12px 0;padding:10px 14px;font-size:0.83rem;color:#ef4444;max-width:85%;">
        Error: ${error.message}
      </div>`;
  }
  messages.scrollTop = messages.scrollHeight;
}
// ─── MOCK DATA ───────────────────────────────────────────────────────────────

const users = [
  { id:"u001", role:"client", state:"Lagos", created_at:"2024-01-05" },
  { id:"u002", role:"client", state:"Abuja", created_at:"2024-01-10" },
  { id:"u003", role:"artisan", state:"Lagos", created_at:"2024-01-12" },
  { id:"u004", role:"client", state:"Enugu", created_at:"2024-01-15" },
  { id:"u005", role:"artisan", state:"Kano", created_at:"2024-01-18" },
  { id:"u006", role:"client", state:"Oyo", created_at:"2024-01-20" },
  { id:"u007", role:"artisan", state:"Abuja", created_at:"2024-01-22" },
  { id:"u008", role:"client", state:"Rivers", created_at:"2024-01-25" },
  { id:"u009", role:"client", state:"Lagos", created_at:"2024-01-28" },
  { id:"u010", role:"artisan", state:"Kaduna", created_at:"2024-02-01" },
  { id:"u011", role:"client", state:"Anambra", created_at:"2024-02-03" },
  { id:"u012", role:"artisan", state:"Lagos", created_at:"2024-02-05" },
  { id:"u013", role:"client", state:"Kano", created_at:"2024-02-08" },
  { id:"u014", role:"artisan", state:"Oyo", created_at:"2024-02-10" },
  { id:"u015", role:"client", state:"Enugu", created_at:"2024-02-12" },
  { id:"u016", role:"artisan", state:"Abuja", created_at:"2024-02-15" },
  { id:"u017", role:"client", state:"Lagos", created_at:"2024-02-18" },
  { id:"u018", role:"artisan", state:"Rivers", created_at:"2024-02-20" },
  { id:"u019", role:"client", state:"Lagos", created_at:"2024-02-22" },
  { id:"u020", role:"artisan", state:"Kano", created_at:"2024-02-25" },
  { id:"u021", role:"client", state:"Rivers", created_at:"2024-03-01" },
  { id:"u022", role:"client", state:"Oyo", created_at:"2024-03-03" },
  { id:"u023", role:"artisan", state:"Kaduna", created_at:"2024-03-05" },
  { id:"u024", role:"client", state:"Anambra", created_at:"2024-03-08" },
  { id:"u025", role:"client", state:"Lagos", created_at:"2024-03-10" },
  { id:"u026", role:"artisan", state:"Kano", created_at:"2024-03-12" },
  { id:"u027", role:"client", state:"Enugu", created_at:"2024-03-15" },
  { id:"u028", role:"client", state:"Lagos", created_at:"2024-03-18" },
  { id:"u029", role:"client", state:"Rivers", created_at:"2024-03-20" },
  { id:"u030", role:"artisan", state:"Kaduna", created_at:"2024-03-22" },
];

const artisans = [
  { id:"u003", name:"Adebayo Okon", category:"Electrician", experience:7, verified:true, rate:8000, availability:"available", state:"Lagos" },
  { id:"u005", name:"Musa Lawal", category:"Plumber", experience:5, verified:true, rate:6000, availability:"available", state:"Kano" },
  { id:"u007", name:"Amina Bello", category:"Tailor", experience:10, verified:true, rate:4000, availability:"available", state:"Abuja" },
  { id:"u010", name:"Ibrahim Sule", category:"Carpenter", experience:8, verified:true, rate:7000, availability:"busy", state:"Kaduna" },
  { id:"u012", name:"Segun Afolabi", category:"AC Technician", experience:6, verified:true, rate:12000, availability:"available", state:"Lagos" },
  { id:"u014", name:"Biodun Olawale", category:"Welder", experience:9, verified:true, rate:9000, availability:"available", state:"Oyo" },
  { id:"u016", name:"Aisha Muhammed", category:"Painter", experience:4, verified:true, rate:5000, availability:"busy", state:"Abuja" },
  { id:"u018", name:"Rufus Obinna", category:"Generator Repair", experience:11, verified:true, rate:10000, availability:"available", state:"Rivers" },
  { id:"u020", name:"Suleiman Garba", category:"Tiler", experience:6, verified:true, rate:7500, availability:"available", state:"Kano" },
  { id:"u023", name:"Zainab Abdullahi", category:"Mason", experience:12, verified:true, rate:8500, availability:"available", state:"Kaduna" },
  { id:"u026", name:"Abdullahi Musa", category:"Electrician", experience:2, verified:false, rate:4000, availability:"available", state:"Kano" },
  { id:"u030", name:"Yakubu Danladi", category:"Plumber", experience:1, verified:false, rate:3000, availability:"inactive", state:"Kaduna" },
  { id:"u014b", name:"Emeka Nwosu", category:"Carpenter", experience:3, verified:false, rate:3500, availability:"busy", state:"Rivers" },
  { id:"u016b", name:"Kola Adewale", category:"AC Technician", experience:2, verified:false, rate:5000, availability:"inactive", state:"Oyo" },
  { id:"u020b", name:"Tunde Fashola", category:"Painter", experience:1, verified:false, rate:2500, availability:"inactive", state:"Lagos" },
];

const bookings = [
  { id:"b001", status:"completed", match_score:0.95, month:"Feb" },
  { id:"b002", status:"completed", match_score:0.91, month:"Feb" },
  { id:"b003", status:"completed", match_score:0.88, month:"Feb" },
  { id:"b004", status:"completed", match_score:0.93, month:"Feb" },
  { id:"b005", status:"completed", match_score:0.97, month:"Feb" },
  { id:"b006", status:"completed", match_score:0.85, month:"Feb" },
  { id:"b007", status:"completed", match_score:0.90, month:"Mar" },
  { id:"b008", status:"completed", match_score:0.92, month:"Mar" },
  { id:"b009", status:"completed", match_score:0.86, month:"Mar" },
  { id:"b010", status:"completed", match_score:0.94, month:"Mar" },
  { id:"b011", status:"completed", match_score:0.98, month:"Mar" },
  { id:"b012", status:"completed", match_score:0.87, month:"Mar" },
  { id:"b013", status:"accepted", match_score:0.89, month:"Apr" },
  { id:"b014", status:"accepted", match_score:0.91, month:"Apr" },
  { id:"b015", status:"accepted", match_score:0.96, month:"Apr" },
  { id:"b016", status:"accepted", match_score:0.83, month:"Apr" },
  { id:"b017", status:"accepted", match_score:0.88, month:"Apr" },
  { id:"b018", status:"accepted", match_score:0.90, month:"Apr" },
  { id:"b019", status:"accepted", match_score:0.85, month:"May" },
  { id:"b020", status:"accepted", match_score:0.92, month:"May" },
  { id:"b021", status:"accepted", match_score:0.79, month:"May" },
  { id:"b022", status:"accepted", match_score:0.94, month:"May" },
  { id:"b023", status:"accepted", match_score:0.87, month:"May" },
  { id:"b024", status:"accepted", match_score:0.91, month:"May" },
  { id:"b025", status:"pending", match_score:0.76, month:"Jun" },
  { id:"b026", status:"pending", match_score:0.82, month:"Jun" },
  { id:"b027", status:"pending", match_score:0.78, month:"Jun" },
  { id:"b028", status:"pending", match_score:0.88, month:"Jun" },
  { id:"b029", status:"pending", match_score:0.73, month:"Jun" },
  { id:"b030", status:"pending", match_score:0.85, month:"Jun" },
];

const services = [
  { category:"Electrician", state:"Lagos", status:"completed" },
  { category:"Plumber", state:"Abuja", status:"completed" },
  { category:"Tailor", state:"Enugu", status:"completed" },
  { category:"Carpenter", state:"Oyo", status:"completed" },
  { category:"AC Technician", state:"Rivers", status:"completed" },
  { category:"Painter", state:"Lagos", status:"completed" },
  { category:"Welder", state:"Anambra", status:"completed" },
  { category:"Generator Repair", state:"Kano", status:"completed" },
  { category:"Tiler", state:"Enugu", status:"completed" },
  { category:"Mason", state:"Lagos", status:"completed" },
  { category:"Electrician", state:"Lagos", status:"completed" },
  { category:"Plumber", state:"Rivers", status:"completed" },
  { category:"Tailor", state:"Oyo", status:"matched" },
  { category:"Carpenter", state:"Anambra", status:"matched" },
  { category:"AC Technician", state:"Lagos", status:"matched" },
  { category:"Painter", state:"Enugu", status:"matched" },
  { category:"Welder", state:"Lagos", status:"matched" },
  { category:"Generator Repair", state:"Rivers", status:"matched" },
  { category:"Tiler", state:"Lagos", status:"matched" },
  { category:"Mason", state:"Anambra", status:"matched" },
  { category:"Electrician", state:"Abuja", status:"open" },
  { category:"Plumber", state:"Oyo", status:"open" },
  { category:"Tailor", state:"Rivers", status:"open" },
  { category:"Carpenter", state:"Kano", status:"open" },
  { category:"AC Technician", state:"Enugu", status:"open" },
  { category:"Painter", state:"Lagos", status:"open" },
  { category:"Welder", state:"Abuja", status:"open" },
  { category:"Generator Repair", state:"Anambra", status:"open" },
  { category:"Tiler", state:"Oyo", status:"cancelled" },
  { category:"Mason", state:"Anambra", status:"cancelled" },
];

// ─── COMPUTED METRICS ────────────────────────────────────────────────────────

const totalUsers = users.filter(u => u.role !== "admin").length;
const totalArtisans = artisans.length;
const verifiedCount = artisans.filter(a => a.verified).length;
const verificationRate = Math.round((verifiedCount / totalArtisans) * 100);
const completedBookings = bookings.filter(b => b.status === "completed").length;
const completionRate = Math.round((completedBookings / bookings.length) * 100);
const avgMatchScore = (bookings.reduce((s, b) => s + b.match_score, 0) / bookings.length).toFixed(2);

// ─── CHART DATA ──────────────────────────────────────────────────────────────

const categoryCount = services.reduce((acc, s) => {
  acc[s.category] = (acc[s.category] || 0) + 1;
  return acc;
}, {});

const stateCount = users.reduce((acc, u) => {
  acc[u.state] = (acc[u.state] || 0) + 1;
  return acc;
}, {});

const monthlySignups = [
  { month:"Jan", count:9 },
  { month:"Feb", count:11 },
  { month:"Mar", count:12 },
  { month:"Apr", count:8 },
  { month:"May", count:5 },
  { month:"Jun", count:1 },
];

const matchTrend = [
  { month:"Feb", score:0.91 },
  { month:"Mar", score:0.92 },
  { month:"Apr", score:0.89 },
  { month:"May", score:0.88 },
  { month:"Jun", score:0.82 },
];

// ─── RENDER KPI CARDS ────────────────────────────────────────────────────────

function renderKPIs() {
  const kpis = [
    { label:"Total Users", value: totalUsers, sub:"Clients + Artisans" },
    { label:"Total Bookings", value: bookings.length, sub:`${completedBookings} completed` },
    { label:"Avg Match Score", value: avgMatchScore, sub:"Algorithm accuracy" },
    { label:"Verification Rate", value: `${verificationRate}%`, sub:`${verifiedCount}/${totalArtisans} artisans` },
    { label:"Completion Rate", value: `${completionRate}%`, sub:"Jobs fully done" },
    { label:"Avg Rating", value:"4.4★", sub:"Client satisfaction" },
  ];

  const grid = document.getElementById("kpi-grid");
  grid.innerHTML = kpis.map(k => `
    <div class="kpi-card">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>
  `).join("");
}

// ─── RENDER ARTISAN TABLE ────────────────────────────────────────────────────

function renderArtisanTable() {
  const tbody = document.getElementById("artisan-tbody");
  tbody.innerHTML = artisans.map(a => `
    <tr>
      <td>${a.name}</td>
      <td>${a.category}</td>
      <td>${a.state}</td>
      <td>₦${a.rate.toLocaleString()}</td>
      <td>${a.experience} yrs</td>
      <td><span class="badge ${a.availability}">${a.availability}</span></td>
      <td>${a.verified ? '<span class="verified">✓ Verified</span>' : '<span class="unverified">✗ Pending</span>'}</td>
    </tr>
  `).join("");
}

// ─── RENDER VERIFICATION QUEUE ───────────────────────────────────────────────

let verifyQueue = artisans.filter(a => !a.verified);

function renderVerifyQueue() {
  const container = document.getElementById("verify-queue");
  if (verifyQueue.length === 0) {
    container.innerHTML = `<div class="empty-queue">✓ All artisans reviewed. Queue is clear.</div>`;
    return;
  }
  container.innerHTML = verifyQueue.map(a => `
    <div class="queue-card" id="qcard-${a.id}">
      <div class="queue-info">
        <div class="queue-name">${a.name}</div>
        <div class="queue-meta">${a.category} · ${a.state} · ${a.experience} yrs · ₦${a.rate.toLocaleString()}/hr</div>
      </div>
      <div class="queue-actions">
        <button class="btn-verify" onclick="handleVerify('${a.id}')">✓ Verify</button>
        <button class="btn-reject" onclick="handleReject('${a.id}')">✗ Reject</button>
      </div>
    </div>
  `).join("");
}

function handleVerify(id) {
  verifyQueue = verifyQueue.filter(a => a.id !== id);
  renderVerifyQueue();
  updateQueueCount();
}

function handleReject(id) {
  verifyQueue = verifyQueue.filter(a => a.id !== id);
  renderVerifyQueue();
  updateQueueCount();
}

function updateQueueCount() {
  document.getElementById("queue-count").textContent = verifyQueue.length;
}

// ─── CHARTS (Chart.js) ───────────────────────────────────────────────────────

function renderCharts() {
  const chartDefaults = {
    color: "#94a3b8",
    grid: "#1e293b",
    cyan: "#22d3ee",
    indigo: "#6366f1",
    amber: "#f59e0b",
    green: "#10b981",
  };

  // 1. Monthly Signups Line Chart
  new Chart(document.getElementById("signupChart"), {
    type: "line",
    data: {
      labels: monthlySignups.map(d => d.month),
      datasets: [{
        label: "Signups",
        data: monthlySignups.map(d => d.count),
        borderColor: chartDefaults.cyan,
        backgroundColor: "rgba(34,211,238,0.08)",
        borderWidth: 2.5,
        pointBackgroundColor: chartDefaults.cyan,
        pointRadius: 5,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: chartDefaults.color }, grid: { color: chartDefaults.grid } },
        y: { ticks: { color: chartDefaults.color }, grid: { color: chartDefaults.grid } },
      }
    }
  });

  // 2. Jobs by Category Bar Chart
  const categories = Object.keys(categoryCount).sort((a,b) => categoryCount[b] - categoryCount[a]);
  new Chart(document.getElementById("categoryChart"), {
    type: "bar",
    data: {
      labels: categories,
      datasets: [{
        label: "Jobs",
        data: categories.map(c => categoryCount[c]),
        backgroundColor: chartDefaults.indigo,
        borderRadius: 6,
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: chartDefaults.color, font: { size: 10 } }, grid: { color: chartDefaults.grid } },
        y: { ticks: { color: chartDefaults.color }, grid: { color: chartDefaults.grid } },
      }
    }
  });

  // 3. Booking Status Doughnut
  new Chart(document.getElementById("statusChart"), {
    type: "doughnut",
    data: {
      labels: ["Completed", "Accepted", "Pending"],
      datasets: [{
        data: [
          bookings.filter(b => b.status === "completed").length,
          bookings.filter(b => b.status === "accepted").length,
          bookings.filter(b => b.status === "pending").length,
        ],
        backgroundColor: [chartDefaults.green, chartDefaults.amber, chartDefaults.indigo],
        borderWidth: 0,
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: chartDefaults.color, padding: 16 } }
      },
      cutout: "65%",
    }
  });

  // 4. Match Score Trend Line Chart
  new Chart(document.getElementById("matchChart"), {
    type: "line",
    data: {
      labels: matchTrend.map(d => d.month),
      datasets: [{
        label: "Match Score",
        data: matchTrend.map(d => d.score),
        borderColor: chartDefaults.amber,
        backgroundColor: "rgba(245,158,11,0.08)",
        borderWidth: 2.5,
        pointBackgroundColor: chartDefaults.amber,
        pointRadius: 5,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: chartDefaults.color }, grid: { color: chartDefaults.grid } },
        y: {
          min: 0.7, max: 1.0,
          ticks: { color: chartDefaults.color },
          grid: { color: chartDefaults.grid }
        },
      }
    }
  });

  // 5. Users by State Bar Chart
  const states = Object.keys(stateCount).sort((a,b) => stateCount[b] - stateCount[a]).slice(0,6);
  new Chart(document.getElementById("stateChart"), {
    type: "bar",
    data: {
      labels: states,
      datasets: [{
        label: "Users",
        data: states.map(s => stateCount[s]),
        backgroundColor: chartDefaults.green,
        borderRadius: 6,
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: chartDefaults.color }, grid: { color: chartDefaults.grid } },
        y: { ticks: { color: chartDefaults.color }, grid: { color: chartDefaults.grid } },
      }
    }
  });
}

// ─── NAV TABS ────────────────────────────────────────────────────────────────

function switchTab(tab) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-section").forEach(sec => sec.style.display = "none");
  document.querySelector(`[data-tab="${tab}"]`).classList.add("active");
  document.getElementById(`section-${tab}`).style.display = "block";
}

// ─── INIT ────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderKPIs();
  renderArtisanTable();
  renderVerifyQueue();
  renderCharts();

  // Default tab
  switchTab("overview");
});
// Skills Radar Chart
const radarCtx = document.getElementById('radarChart').getContext('2d');
new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: ['SQL', 'Power BI', 'Excel', 'Database Design', 'Data Analysis', 'Analytics Thinking', 'Problem Solving', 'Communication'],
    datasets: [{
      label: 'Skill Level',
      data: [80, 70, 75, 78, 75, 82, 85, 80],
      backgroundColor: 'rgba(0,212,255,0.1)',
      borderColor: '#00d4ff',
      borderWidth: 2,
      pointBackgroundColor: '#00d4ff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#00d4ff',
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#94a3b8', font: { size: 12 } }
      }
    },
    scales: {
      r: {
        angleLines: { color: '#1e293b' },
        grid: { color: '#1e293b' },
        pointLabels: { color: '#94a3b8', font: { size: 11 } },
        ticks: {
          color: '#94a3b8',
          backdropColor: 'transparent',
          font: { size: 9 }
        },
        min: 0,
        max: 100
      }
    }
  }
});
// Recruiter Mode
function toggleRecruiterMode() {
  const modal = document.getElementById('recruiterMode');
  if (modal.style.display === 'none' || modal.style.display === '') {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}
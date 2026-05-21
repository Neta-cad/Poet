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

async function sendMessage() {

  const input = document.getElementById("userInput");
  const messages = document.getElementById("chatMessages");

  const userText = input.value.trim();

  if (!userText) return;

  // USER MESSAGE
  messages.innerHTML += `
    <div class="user-msg">${userText}</div>
  `;

  input.value = "";

  messages.innerHTML += `
    <div class="bot-msg typing" id="typing">
      Analyst AI is thinking...
    </div>
  `;

  messages.scrollTop = messages.scrollHeight;

  try {

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyALrLNW_1HK87y5b0eTvu3E3mC20jHWaaQ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
`You are Analyst AI for Mishael Akingboye's portfolio.

You are intelligent, professional, friendly and conversational.

You help recruiters and visitors understand:
- Data Analytics
- SQL
- PostgreSQL
- Power BI
- Revenue Intelligence
- Analytics Engineering
- Projects
- Career goals

Always sound modern and smart.

User message: ${userText}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    document.getElementById("typing").remove();

    const reply =
      data.candidates[0].content.parts[0].text;

    messages.innerHTML += `
      <div class="bot-msg">${reply}</div>
    `;

    messages.scrollTop = messages.scrollHeight;

  } catch (error) {

    document.getElementById("typing").remove();

    messages.innerHTML += `
      <div class="bot-msg">
        AI temporarily unavailable.
      </div>
    `;

  }

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


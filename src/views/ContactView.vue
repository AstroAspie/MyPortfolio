<template>
  <main class="contact-view">
    <div class="showNav-bubble" id="navBubble"></div>
    <div class="showNav" id="showNav" @click="triggerNav">
      <span class="menu-icon">{{ menuTrigger }}</span>
    </div>
    <NavBar v-if="showNav" />
    <div class="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me on any of the following platforms:</p>
      <div class="socials">
        <div v-for="social in socials" :key="social.name" class="social-card">
          <a :href="social.url" target="_blank" rel="noopener noreferrer">
            <i :class="social.icon"></i>
            <span>{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavBar from '@/components/global/NavBar.vue';

export default {
  name: "ContactView",
  components: {
    NavBar,
  },
  data() {
    return {
      showNav: false,
      menuTrigger: 'Menu',

      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/alex-astro-smith",
          icon: "fab fa-linkedin",
        },
        {
          name: "GitHub",
          url: "https://www.github.com/astroaspie",
          icon: "fab fa-github",
        },
        {
          name: "Email",
          url: "mailto:alex.tekheartproductions@gmail.com",
          icon: "fas fa-envelope",
        },
      ],
    };
  },
  methods: {
    triggerNav() {
      this.showNav = !this.showNav;
      let bubble = document.getElementById('navBubble');
      bubble.style.display = this.showNav ? 'none' : 'block';
      let navTrigger = document.getElementById('showNav');
      navTrigger.style.left = this.showNav ? '225px' : '25px';
      this.menuTrigger = this.showNav ? '<-' : 'Menu';
    },
  },
  created() {
    document.addEventListener("nav", this.triggerNav);
  },
};
</script>

<style scoped>
.contact-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0d1117;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.showNav {
  position: fixed;
  top: 10px;
  left: 20px;
  padding: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 200;
  color: white;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.showNav:hover {
  background-color: #21262d;
  transform: scale(1.05);
}

.showNav:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
}

.showNav-bubble:hover {
  transform: scale(1.1);
  opacity: 0.9;
}

.NavBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #161b22;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
  transform: translateX(-100%);
  transition: transform 0.4s ease-in-out;
  z-index: 1000;
}

.NavBar.active {
  transform: translateX(0);
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem;
  width: 100%;
  max-width: 800px;
  margin: auto;
  background: linear-gradient(135deg, #1e3a5f, #102a43);
  color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.contact h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #58a6ff;
  font-weight: bold;
}

.contact p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #c9d1d9;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.social-card {
  background: #21262d;
  border: none;
  border-radius: 12px;
  padding: 1.5rem;
  width: 180px;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.social-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.social-card a {
  text-decoration: none;
  color: #c9d1d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.social-card i {
  font-size: 2.5rem;
  color: #58a6ff;
  transition: color 0.3s ease;
}

.social-card:hover i {
  color: #79c0ff;
}

.social-card span {
  font-size: 1.1rem;
  font-weight: 600;
  color: #c9d1d9;
  transition: color 0.3s ease;
}

.social-card:hover span {
  color: #79c0ff;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .contact h1 {
    font-size: 2.5rem;
  }

  .contact p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .social-card {
    width: 150px;
    padding: 1rem;
  }

  .social-card i {
    font-size: 2rem;
  }

  .social-card span {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 2rem 1rem;
  }

  .contact h1 {
    font-size: 2rem;
  }

  .contact p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .socials {
    gap: 1rem;
  }

  .social-card {
    width: 120px;
    padding: 0.8rem;
  }

  .social-card i {
    font-size: 1.8rem;
  }

  .social-card span {
    font-size: 0.9rem;
  }
}
</style>
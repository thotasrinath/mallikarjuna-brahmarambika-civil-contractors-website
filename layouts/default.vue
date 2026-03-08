<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white font-body">
    <!-- Header -->
    <header class="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-glow border-b border-gray-100">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="bg-gradient-to-r from-primary-600 to-primary-800 p-3 rounded-xl shadow-lg hover-lift transition-all duration-300">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Professional Construction Building Icon -->
                <path d="M8 25L20 5L32 25V35H8V25Z" fill="white" stroke="white" stroke-width="1.5"/>
                <path d="M13 28H27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M13 23H27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M13 33H27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M20 25V35" stroke="white" stroke-width="1" stroke-dasharray="3,2"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <h1 class="text-2xl font-bold font-heading bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent drop-shadow-lg">Mallikarjuna</h1>
              <p class="text-lg font-bold bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800 bg-clip-text text-transparent drop-shadow-lg -mt-1">Brahmarambika Civil Contractors</p>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex space-x-8">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
            <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
            <NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </nav>
          
          <!-- Call to Action Button -->
          <div class="hidden lg:block">
            <NuxtLink to="/contact" class="btn-primary">Get Quote</NuxtLink>
          </div>
          
          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div v-if="mobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 z-40">
          <div class="space-y-2">
            <NuxtLink to="/" @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">Home</NuxtLink>
            <NuxtLink to="/about" @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">About</NuxtLink>
            <NuxtLink to="/services" @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">Services</NuxtLink>
            <NuxtLink to="/portfolio" @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">Portfolio</NuxtLink>
            <NuxtLink to="/contact" @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">Contact</NuxtLink>
            <NuxtLink to="/contact" @click="mobileMenuOpen = false" class="btn-primary w-full text-center mt-4">Get Quote</NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-5"></div>
      <div class="container mx-auto px-4 py-16 relative z-10">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-xl hover-lift transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Professional Construction Building Icon -->
                  <path d="M8 25L20 5L32 25V35H8V25Z" fill="white" stroke="white" stroke-width="1.5"/>
                  <path d="M13 28H27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <path d="M13 23H27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <path d="M13 33H27" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <path d="M20 25V35" stroke="white" stroke-width="1" stroke-dasharray="3,2"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold font-heading bg-gradient-to-r from-primary-400 to-white bg-clip-text text-transparent">Mallikarjuna</h3>
                <p class="text-gray-300 text-sm font-medium">Brahmarambika Civil Contractors</p>
              </div>
            </div>
            <p class="text-gray-300 text-lg mb-6 leading-relaxed">Building dreams, building trust with quality construction services since 2005.</p>
            <div class="flex space-x-4">
              <div class="stat-card p-4 rounded-xl">
                <span class="font-bold text-2xl block">15+</span>
                <p class="text-xs text-gray-300">Years Experience</p>
              </div>
              <div class="stat-card p-4 rounded-xl">
                <span class="font-bold text-2xl block">200+</span>
                <p class="text-xs text-gray-300">Projects Completed</p>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul class="space-y-3">
              <li><NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">About Us</NuxtLink></li>
              <li><NuxtLink to="/services" class="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Our Services</NuxtLink></li>
              <li><NuxtLink to="/portfolio" class="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Our Portfolio</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold mb-4 font-heading">Contact Us</h4>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="bg-primary-600 p-2 rounded-lg hover-lift transition-all duration-300">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <p class="text-gray-300">yadamaram2006@gmail.com</p>
              </div>
              <div class="flex items-center space-x-3">
                <div class="bg-accent-600 p-2 rounded-lg hover-lift transition-all duration-300">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <p class="text-gray-300">+91-9246877792</p>
              </div>
              <div class="flex items-center space-x-3">
                <div class="bg-green-600 p-2 rounded-lg hover-lift transition-all duration-300">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div><p class='text-gray-300 text-sm'>Plot No.47, Opposite Usha Mullapudi Cardiac Centre Hospital</p><p class='text-gray-300 text-sm'>Ushodaya Colony -1, Gajularamaram</p><p class='text-gray-300 text-sm'>Hyderabad-500055, Telangana, India</p></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-300">© 2024 Mallikarjuna Brahmarambika Civil Contractors. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <p class="text-gray-300 text-sm">Building Excellence Since 2005</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

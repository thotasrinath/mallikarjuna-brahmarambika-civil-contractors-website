<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="page-title mb-4">Contact Us</h1>
        <p class="text-lg md:text-xl lg:text-2xl opacity-95 text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          Let's discuss your construction project and bring your vision to life
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 py-20">
      <ContentDoc>
        <template #default="{ doc }">
          <div class="prose prose-lg max-w-none">
            <ContentRenderer :value="doc" />
          </div>
        </template>
      </ContentDoc>
    </section>

    <!-- Contact Form and Info -->
    <section class="service-gradient py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Information -->
          <div class="service-card p-8 rounded-2xl">
            <h2 class="text-2xl font-bold mb-6 font-heading text-gray-900">Get in Touch</h2>
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email</h3>
                  <p class="text-gray-600">yadamaram2006@gmail.com</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="bg-gradient-to-r from-accent-500 to-accent-700 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Phone</h3>
                  <p class="text-gray-600">+91-9246877792</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="bg-gradient-to-r from-green-500 to-green-700 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Office Hours</h3>
                  <p class="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p class="text-gray-600 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Address</h3>
                  <p class="text-gray-600">Plot No.47, Opposite Usha Mullapudi Cardiac Centre Hospital</p>
                  <p class='text-gray-600'>Ushodaya Colony -1, Gajularamaram</p><p class='text-gray-600'>Hyderabad-500055, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="service-card p-8 rounded-2xl">
            <h2 class="text-2xl font-bold mb-6 font-heading text-gray-900">Send us a Message</h2>
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" class="form-input" required/>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" class="form-input" required/>
                </div>
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" class="form-input" required/>
              </div>
              <div>
                <label for="project" class="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select id="project" class="form-input" required>
                  <option value="">Select Project Type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation Services</option>
                  <option value="industrial">Industrial Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">Estimated Budget</label>
                <select id="budget" class="form-input" required>
                  <option value="">Select Budget Range</option>
                  <option value="5-10">₹5-10 Lakhs</option>
                  <option value="10-25">₹10-25 Lakhs</option>
                  <option value="25-50">₹25-50 Lakhs</option>
                  <option value="50-100">₹50 Lakhs - ₹1 Crore</option>
                  <option value="100+">Above ₹1 Crore</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea id="message" rows="4" class="form-textarea" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              <button type="submit" class="btn-primary w-full py-4 text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Find Us</h2>
        <p class="section-subtitle text-center">Visit our office or reach out for site visits</p>
        <div class="bg-gray-100 rounded-2xl p-8 text-center">
          <div class="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
            <div class="text-center">
              <svg class="w-12 h-12 text-primary-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p class="text-gray-600">Map integration can be added here</p>
              <p class="text-primary-600 font-medium">123 Construction Street, Building District</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact Us - Mallikarjuna Brahmarambika Civil Contractors',
  description: 'Get in touch with us for your construction projects. We provide free consultations and detailed project proposals.',
  ogTitle: 'Contact Mallikarjuna Brahmarambika Civil Contractors',
  ogDescription: 'Contact us for professional construction services and project consultations.'
});
</script>

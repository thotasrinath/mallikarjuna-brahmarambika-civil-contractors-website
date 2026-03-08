<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10 fade-in-up">
        <h1 class="page-title mb-6">
          Building Dreams,
          <span class="block text-accent-200 drop-shadow-lg mt-2">Building Trust</span>
        </h1>
        <p class="page-subtitle mb-8">
          Professional construction services delivering excellence in residential and commercial projects with uncompromising quality
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <NuxtLink to="/contact" class="btn-secondary text-lg px-8 py-4">
            Get Your Free Construction Consultation
          </NuxtLink>
          <NuxtLink to="/portfolio" class="btn-outline text-lg px-8 py-4 border-2 border-white/40 text-white hover:bg-white hover:text-primary-700">
            View Our Portfolio
          </NuxtLink>
        </div>
        
        <!-- Stats -->
        <div class="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="stat-card p-6 rounded-xl text-center">
            <h3 class="text-3xl font-bold mb-2 text-white">{{ stat.value }}</h3>
            <p class="text-sm opacity-90 text-white/80">{{ stat.label }}</p>
          </div>
        </div>
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

    <!-- Services Preview -->
    <section class="service-gradient py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Our Construction Services</h2>
        <p class="section-subtitle text-center">Premium solutions tailored to your construction requirements</p>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="service-card p-8 rounded-2xl hover-lift">
            <div class="service-icon bg-gradient-to-r from-primary-500 to-primary-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="service.icon"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 font-heading text-center text-gray-900">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 text-center">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="text-gray-700 flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/services" class="btn-primary text-lg px-8 py-3">View All Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="accent-gradient text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">Ready to Start Your Project?</h2>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Contact us today for a comprehensive consultation and detailed project proposal
        </p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-accent-700 hover:bg-gray-100 text-lg px-8 py-4 inline-block">
          Get Started Today
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Mallikarjuna Brahmarambika Civil Contractors - Premium Construction Services',
  description: 'Building dreams, building trust with professional construction services delivering excellence in residential and commercial projects.',
  ogTitle: 'Mallikarjuna Brahmarambika Civil Contractors',
  ogDescription: 'Professional construction services delivering excellence in residential and commercial projects.',
  twitterCard: 'summary_large_image'
});

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: 'Hyderabad', label: 'Service Area' }
];

const services = [
  {
    title: 'Residential Construction',
    description: 'Custom homes, villas, apartments, and premium renovations',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    features: ['Custom Home Building', 'Luxury Villa Construction', 'Apartment Complexes', 'Premium Renovations']
  },
  {
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and institutional facilities',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    features: ['Office Buildings', 'Retail Spaces', 'Institutional Buildings', 'Industrial Facilities']
  },
  {
    title: 'Specialized Services',
    description: 'Foundation work, interior finishing, and comprehensive project management',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: ['Foundation Work', 'Interior Finishing', 'Electrical & Plumbing', 'Project Management']
  }
];
</script>

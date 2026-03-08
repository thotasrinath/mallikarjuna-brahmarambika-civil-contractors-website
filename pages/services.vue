<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="page-title mb-4">Our Services</h1>
        <p class="text-lg md:text-xl lg:text-2xl opacity-95 text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          Comprehensive construction solutions tailored to your specific requirements
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

    <!-- Services Section -->
    <section class="service-gradient py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Our Comprehensive Services</h2>
        <p class="section-subtitle text-center">Professional construction services for every project type</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="service-card p-8 rounded-2xl hover-lift">
            <div class="service-icon bg-gradient-to-r from-primary-500 to-primary-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="service.icon"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 font-heading text-center text-gray-900">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 text-center">{{ service.description }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="feature in service.features" :key="feature" class="text-gray-700 flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
            <div class="text-center">
              <span class="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">{{ service.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Our Process</h2>
        <p class="section-subtitle text-center">Streamlined workflow for efficient project delivery</p>
        <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div v-for="step in process" :key="step.title" class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-xl">{{ step.number }}</span>
            </div>
            <h3 class="text-lg font-bold mb-2 font-heading text-gray-900">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="accent-gradient text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Start Your Project?</h2>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Contact us for a detailed consultation and customized service proposal
        </p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-accent-700 hover:bg-gray-100 text-lg px-8 py-4 inline-block">
          Get Your Quote
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Our Services - Mallikarjuna Brahmarambika Civil Contractors',
  description: 'Comprehensive construction services including residential, commercial, and specialized construction solutions.',
  ogTitle: 'Construction Services - Mallikarjuna Brahmarambika Civil Contractors',
  ogDescription: 'Professional construction services for residential and commercial projects.'
});

const services = [
  {
    title: 'Residential Construction',
    description: 'Custom homes, luxury villas, apartments, and premium renovations',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    features: ['Custom Home Building', 'Luxury Villa Construction', 'Apartment Complexes', 'Premium Renovations'],
    duration: '3-12 months'
  },
  {
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and institutional facilities',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    features: ['Office Buildings', 'Retail Spaces', 'Institutional Buildings', 'Industrial Facilities'],
    duration: '6-18 months'
  },
  {
    title: 'Specialized Construction',
    description: 'Foundation work, interior finishing, and project management',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: ['Foundation Work', 'Interior Finishing', 'Electrical & Plumbing', 'Project Management'],
    duration: 'Custom Duration'
  },
  {
    title: 'Industrial Construction',
    description: 'Warehouses, factories, and industrial facilities',
    icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
    features: ['Warehouses', 'Factory Buildings', 'Industrial Facilities', 'Storage Units'],
    duration: '9-24 months'
  },
  {
    title: 'Infrastructure Development',
    description: 'Roads, bridges, and public infrastructure projects',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    features: ['Road Construction', 'Bridge Building', 'Public Infrastructure', 'Utility Systems'],
    duration: '12-36 months'
  },
  {
    title: 'Renovation Services',
    description: 'Home and commercial space renovations and upgrades',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    features: ['Home Renovations', 'Commercial Upgrades', 'Structural Repairs', 'Modernization'],
    duration: '1-6 months'
  }
];

const process = [
  {
    number: 1,
    title: 'Consultation',
    description: 'Initial meeting to understand your requirements and project scope'
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Detailed project planning and design development'
  },
  {
    number: 3,
    title: 'Execution',
    description: 'Professional construction with quality control'
  },
  {
    number: 4,
    title: 'Completion',
    description: 'Final inspection and handover with satisfaction guarantee'
  }
];
</script>

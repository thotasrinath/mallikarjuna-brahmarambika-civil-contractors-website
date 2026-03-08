<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="page-title mb-4">Our Portfolio</h1>
        <p class="text-lg md:text-xl lg:text-2xl opacity-95 text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          Showcasing our premium construction projects and exceptional craftsmanship
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

    <!-- Portfolio Grid -->
    <section class="service-gradient py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Featured Projects</h2>
        <p class="section-subtitle text-center">A showcase of our exceptional construction work</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
            <div class="relative overflow-hidden">
              <div class="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <svg class="w-16 h-16 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="project.icon"/>
                </svg>
              </div>
              <div class="portfolio-overlay">
                <span class="text-white font-semibold text-lg"/>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 font-heading text-gray-900">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <span class="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">{{ project.type }}</span>
                <span class="text-gray-500 text-sm">{{ project.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Client Testimonials</h2>
        <p class="section-subtitle text-center">What our satisfied clients say about our work</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="service-card p-6 hover-lift">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">{{ testimonial.name }}</h3>
                <p class="text-primary-600 text-sm">{{ testimonial.project }}</p>
              </div>
            </div>
            <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
            <div class="flex mt-4">
              <div v-for="star in 5" :key="star" class="text-accent-500">
                <!-- Star icon -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="accent-gradient text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Create Your Dream Project?</h2>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Let us bring your vision to life with our professional construction expertise
        </p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-accent-700 hover:bg-gray-100 text-lg px-8 py-4 inline-block">
          Start Your Project
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Our Portfolio - Mallikarjuna Brahmarambika Civil Contractors',
  description: 'View our portfolio of premium construction projects showcasing our expertise in residential and commercial construction.',
  ogTitle: 'Portfolio - Mallikarjuna Brahmarambika Civil Contractors',
  ogDescription: 'Premium construction projects showcasing our expertise in building excellence.'
});

const projects = [
  {
    title: 'Luxury Villa Complex',
    description: 'Premium residential development with modern amenities',
    type: 'Residential',
    duration: '12 months',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    title: 'Corporate Office Building',
    description: 'Modern commercial space for corporate headquarters',
    type: 'Commercial',
    duration: '18 months',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Apartment Tower',
    description: 'High-rise residential building with luxury facilities',
    type: 'Residential',
    duration: '24 months',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Shopping Mall',
    description: 'Large retail space with multiple stores and amenities',
    type: 'Commercial',
    duration: '20 months',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    title: 'Industrial Warehouse',
    description: 'Spacious storage facility with modern infrastructure',
    type: 'Industrial',
    duration: '10 months',
    icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
  },
  {
    title: 'Residential Renovation',
    description: 'Complete home transformation with modern design',
    type: 'Renovation',
    duration: '4 months',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  }
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    project: 'Luxury Villa Project',
    quote: 'Exceptional quality and attention to detail. The team delivered beyond our expectations.'
  },
  {
    name: 'Priya Sharma',
    project: 'Apartment Renovation',
    quote: 'Professional service from start to finish. Highly recommend for any construction work.'
  },
  {
    name: 'Sanjay Patel',
    project: 'Commercial Building',
    quote: 'Reliable construction partner who understands client requirements perfectly.'
  }
];
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="page-title mb-4">About Us</h1>
        <p class="text-lg md:text-xl lg:text-2xl opacity-95 text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          Building excellence through decades of experience and unwavering commitment to quality
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

    <!-- Values Section -->
    <section class="service-gradient py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Our Values</h2>
        <p class="section-subtitle text-center">The principles that guide our construction excellence</p>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="value in values" :key="value.title" class="service-card p-8 text-center hover-lift">
            <div class="service-icon bg-gradient-to-r from-primary-500 to-primary-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="value.icon"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 font-heading text-gray-900">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-center">Our Leadership</h2>
        <p class="section-subtitle text-center">Experienced professionals guiding your projects to success</p>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div v-for="leader in leadership" :key="leader.name" class="service-card p-8 text-center hover-lift">
            <div class="w-24 h-24 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 font-heading text-gray-900">{{ leader.name }}</h3>
            <p class="text-primary-600 font-medium mb-2">{{ leader.position }}</p>
            <p class="text-gray-600">{{ leader.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="accent-gradient text-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 dot-pattern opacity-10"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Work Together?</h2>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your construction project and bring your vision to life
        </p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-accent-700 hover:bg-gray-100 text-lg px-8 py-4 inline-block">
          Contact Us Today
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'About Us - Mallikarjuna Brahmarambika Civil Contractors',
  description: 'Learn about our commitment to quality construction and the values that drive our success in the construction industry.',
  ogTitle: 'About Mallikarjuna Brahmarambika Civil Contractors',
  ogDescription: 'Building excellence through decades of experience in construction services.'
});

const values = [
  {
    title: 'Quality Excellence',
    description: 'Uncompromising commitment to quality craftsmanship and materials in every project.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Client Focus',
    description: 'Understanding and exceeding client expectations through transparent communication.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  },
  {
    title: 'Innovation',
    description: 'Embracing modern techniques and sustainable building practices.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z'
  }
];

const leadership = [
  {
    name: 'Mallikarjuna',
    position: 'Founder & CEO',
    description: '20+ years of experience in construction management and project oversight'
  },
  {
    name: 'Brahmarambika',
    position: 'Operations Director',
    description: 'Specializing in residential construction and client relationship management'
  }
];
</script>

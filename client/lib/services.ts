import api from './api';

// Incubation Programs
export const incubationService = {
  getAll: async () => {
    try {
      const { data } = await api.get('/incubation');
      return data.programs || [];
    } catch (error) {
      console.error('Error fetching incubation programs:', error);
      return [];
    }
  },

  getBySlug: async (slug: string) => {
    try {
      const { data } = await api.get(`/incubation/${slug}`);
      return data.program;
    } catch (error) {
      console.error('Error fetching program:', error);
      return null;
    }
  },

  create: async (formData: FormData) => {
    const { data } = await api.post('/incubation', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.program;
  },

  update: async (id: string, formData: FormData) => {
    const { data } = await api.put(`/incubation/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.program;
  },

  delete: async (id: string) => {
    const { data } = await api.delete(`/incubation/${id}`);
    return data;
  }
};

// Events
export const eventService = {
  getAll: async (filters?: { category?: string; isFeatured?: boolean }) => {
    try {
      const { data } = await api.get('/events', { params: filters });
      return data.events || [];
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  },

  getById: async (id: string) => {
    try {
      const { data } = await api.get(`/events/${id}`);
      return data.event;
    } catch (error) {
      console.error('Error fetching event:', error);
      return null;
    }
  },

  create: async (formData: FormData) => {
    const { data } = await api.post('/events', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.event;
  },

  update: async (id: string, formData: FormData) => {
    const { data } = await api.put(`/events/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.event;
  },

  delete: async (id: string) => {
    const { data } = await api.delete(`/events/${id}`);
    return data;
  }
};

// Gallery
export const galleryService = {
  getAll: async (filters?: { category?: string }) => {
    try {
      const { data } = await api.get('/gallery', { params: filters });
      return data.images || [];
    } catch (error) {
      console.error('Error fetching gallery:', error);
      return [];
    }
  },

  create: async (formData: FormData) => {
    const { data } = await api.post('/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.gallery;
  },

  update: async (id: string, formData: FormData) => {
    const { data } = await api.put(`/gallery/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.gallery;
  },

  delete: async (id: string) => {
    const { data } = await api.delete(`/gallery/${id}`);
    return data;
  }
};

// Achievements
export const achievementService = {
  getAll: async (filters?: { category?: string; isFeatured?: boolean }) => {
    try {
      const { data } = await api.get('/achievements', { params: filters });
      return data.achievements || [];
    } catch (error) {
      console.error('Error fetching achievements:', error);
      return [];
    }
  },

  create: async (formData: FormData) => {
    const { data } = await api.post('/achievements', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.achievement;
  },

  update: async (id: string, formData: FormData) => {
    const { data } = await api.put(`/achievements/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.achievement;
  },

  delete: async (id: string) => {
    const { data } = await api.delete(`/achievements/${id}`);
    return data;
  }
};

// Patents
export const patentService = {
  getAll: async (filters?: { category?: string; status?: string }) => {
    try {
      const { data } = await api.get('/patents', { params: filters });
      return data.patents || [];
    } catch (error) {
      console.error('Error fetching patents:', error);
      return [];
    }
  },

  create: async (formData: FormData) => {
    const { data } = await api.post('/patents', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.patent;
  },

  update: async (id: string, formData: FormData) => {
    const { data } = await api.put(`/patents/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.patent;
  },

  delete: async (id: string) => {
    const { data } = await api.delete(`/patents/${id}`);
    return data;
  }
};

// Videos
export const videoService = {
  getAll: async (filters?: { category?: string; isFeatured?: boolean }) => {
    try {
      const { data } = await api.get('/videos', { params: filters });
      return data.videos || [];
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  },

  create: async (formData: FormData) => {
    const { data } = await api.post('/videos', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.video;
  },

  update: async (id: string, formData: FormData) => {
    const { data } = await api.put(`/videos/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return data.video;
  },

  delete: async (id: string) => {
    const { data } = await api.delete(`/videos/${id}`);
    return data;
  }
};

// Health Check
export const healthCheck = async () => {
  try {
    const { data } = await api.get('/health');
    return data.status === 'OK';
  } catch (error) {
    return false;
  }
};

// src/models/project.ts

// Define a Project interface for the structure of each project
export interface Project {
    image: string; // Image URL as a string
  }
  
  // Define the projects constant with the Record<string, Project> type
  export const projects: Record<string, Project> = {
    digitalclock: { image: 'https://i.ibb.co/3rtYL0b/Screenshot-2024-11-10-064239.png' },
    numberguessinggame: { image: 'https://i.ibb.co/hHD2p1x/Screenshot-2024-11-10-070449.png' },
    birthdaywishapp: { image: 'https://i.ibb.co/7tRGj6K/Screenshot-2024-11-10-070214.png' },
    countdowntimer: { image: 'https://i.ibb.co/hHD2p1x/Screenshot-2024-11-10-070449.png' },
    simplecalculator: { image: 'https://i.ibb.co/sgnKQHf/Screenshot-2024-11-10-071005.png' },
    aws: { image: 'https://i.ibb.co/61756n7/aws-3.jpg' },
    notes: { image: 'https://i.ibb.co/wCN5CVj/notesapp.jpg' }
  };
  
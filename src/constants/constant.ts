import { NavItems } from "@/models/Header";
import { UserObject } from "@/models/User";

// Define the type for the projects object
interface Project {
    image: string;
}

// Define the projects object with the correct type
export const projects: Record<string, Project> = {
    digitalclock: { image: 'https://i.ibb.co/3rtYL0b/Screenshot-2024-11-10-064239.png' },
    numberguessinggame: { image: 'https://i.ibb.co/hHD2p1x/Screenshot-2024-11-10-070449.png' },
    birthdaywishapp: { image: 'https://i.ibb.co/7tRGj6K/Screenshot-2024-11-10-070214.png' },
    countdowntimer: { image: 'https://i.ibb.co/hHD2p1x/Screenshot-2024-11-10-070449.png' },
    simplecalculator: { image: 'https://i.ibb.co/sgnKQHf/Screenshot-2024-11-10-071005.png' },
    aws: { image: 'https://i.ibb.co/61756n7/aws-3.jpg' },
    notes: { image: 'https://i.ibb.co/wCN5CVj/notesapp.jpg' }
};

// Define the header items object
export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home' },
    about: { label: 'About', page: 'about' },
    projects: { label: 'Projects', page: 'projects' },
    contact: { label: 'Contact', page: 'contact' }
};

// Define the user info object
export const userInfo: UserObject = {
    name: 'Aaraiz Ali',
    picture: 'https://i.ibb.co/hFv4rSp/1731206952019.jpg',
    heading: 'I&#39;m a Software Engineer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        <p>I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 1 year.Further,I'm persuing a degree of Bachelors of Science In Artificial Intelligence and also doing a course of AI and Data Science from SMIT</p>
        <p>My journey in IT began in 2023 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
        <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
    `,
    skills: ['React', 'Next', 'Data Structure', 'Python', 'MySQL', 'HTML', 'CSS'],
};

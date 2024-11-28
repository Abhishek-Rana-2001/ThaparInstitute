export type Course = {
    name:string,
    description:string;
    _id:string;
    img:string;
}

export const courses:Course[] = [
    {
        name: "Digital Marketing",
        description: "Learn the fundamentals of digital marketing, including SEO, social media, email marketing",
        img: "/DigitalMarketing.jpg",
        _id:"1"
    },
    {
        name: "Data Science",
        description: "Learn the fundamentals of data science, including data visualization, machine learning, and statistical",
        img: "/DataScience.jpg",
        _id:"2"
    },
    {
        name: "Artificial Intelligence",
        description: "Learn the fundamentals of artificial intelligence, including natural language processing, computer vision, and robotics",
        img: "/AI.jpg",
        _id:"3"
    },
    {
        name: "Cyber Security",
        description: "Learn the fundamentals of cyber security, including threat analysis, risk management, and incident",
        img: "/DigitalMarketing.jpg",
        _id:"4"
    }
]
export type MenuItem = {
    title: string,
    link?:string,
    submenu?: MenuItem[]
}


export const menuItems: MenuItem[] = [
    {
        title: 'Home',
        link:"/"
    },
    {
        title: "Courses",
        link:"/courses",
        submenu: [
            {
                title: "Computer Science",
                submenu: [
                    {
                        title: "Full Stack Java"
                    },
                    {
                        title: "Full Stack .NET"
                    },
                    {
                        title: "Full Stack PHP"
                    },
                ]
            },
            {
                title: "Web technologies"
            },
            {
                title: "Diploma Courses"
            },
            {
                title: "School Courses"
            },
        ]
    },
    {
        title: "Certifications",
        link: "/certifications"
    },
    {
        title: "Contact Us",
        link: "/contact"
    },
]
export type MenuItem = {
    title : string,
    submenu?: MenuItem[]
} 


export const menuItems : MenuItem[] = [
    {
        title : "Courses",
        submenu : [
            {
                title :"Computer Science",
                submenu: [
                    {
                        title : "Full Stack Java"
                    },
                    {
                        title : "Full Stack .NET"
                    },
                    {
                        title : "Full Stack PHP"
                    },
                ]
            },
            {
                title :"Web technologies"
            },
            {
                title :"Diploma Courses"
            },
            {
                title :"School Courses"
            },
        ]
    },
    {
        title:"Certifications"
    },
    {
        title : "Company",
    }
]
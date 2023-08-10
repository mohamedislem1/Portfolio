import news from "./previews/project-1.png"
import comming from "./previews/comming-soon.png"
 const project = [
    {
        image: news,
        name: "Newsletter Landing Page", 
        description: "A news homepage that i found the design of on frontend mentor",
        repoLink: "https://github.com/mohamedislem1/frontend_mentor_newsletter/tree/main/frontend-newsletter",
        link: "https://frontend-mentor-newsletter-ufgc.vercel.app/",
        tags: [
            {
                name: "#HTML",
                color: "#F5D300"
            },
            {
                name:"#CSS",
                color: "#FF2281"
            },
             {
                name:"#JavaScript",
                color: "#9D72FF"
            }
        ]
    },
    {
        image: comming ,
        name:"Comming Soon", 
        description: "Comming soon",
        tags: [
            {
                name: "#???",
                color: "#00C2BA"
            },
            {
                name: "#???", 
                color: "#F5D300"
            },
            {
                name: "#???", 
                color: "#28CF75"
            }
        ]

    }
]
export default project
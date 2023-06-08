export const baseURL = "/pictures";

export const ProjectType = Object.freeze({
    All: "All",
    Web: "Web",
    iOS: "iOS",
    Android: "Android",
    Backend: "Backend",
    array: ["All", "Web", "iOS", "Android", "Backend"]
})

export const projects = [
    {name: "EasyHangout", type: ProjectType.Web ,role: "Full Stack Web", date: "Mar. 2023 - May 2023", src: `${baseURL}/easyhangout.gif`, github:"https://github.com/csci-499-sp23/team-6-sp23-redux",
     summary: "EasyHangOut is a web application designed to make finding recreational spots to hang out with friends simple and intuitive. \nThe app presents users with a series of recreational locations that they can choose to save for later in a Tinder fashion.",
     techStack: ["Javascript", "React", "Cloud Firestore", "Yelp API", "GoogleMaps API", "Express JS", "Axios"],
     website: "https://easy-hangout-68597.web.app/",
     userStories: ["Produced a React Javascript app in a team of 5 for users to easily discover new places to hangout nearby.",
                   "Created a swipeable stacked deck of cards with a modal display of information and travel directions utilizing Google Maps API for users to learn more about and save new hangout locations.",
                   "Deployed cloud functions utilizing Firebase and Express backend to access data from the Yelp Fusion API.",
                   "Queried real-time data from a Firestore database utilizing an event listener to retrieve pertinent user info.",
                   "Designed the app to be responsive on both mobile and web browsers for all routes using Media Query."]
    },
    {name: "HomeChefUnited", type: ProjectType.iOS, role: "Mobile iOS", date: "Mar. 2023 - May 2023", src: `${baseURL}/HomeChefUnited.gif`, github:"https://github.com/Kirazuto7/Home-Chef-United",
     summary: "An app that allows users to save their favorite recipes in a personal cookbook and time their cooking. \n Also users may choose to share their recipes with other users to discover new types of meals or different methods of cooking.",
     techStack: ["Swift", "CoreData", "Cloud Firestore", "TheMealDB API", "UIKit"],
     userStories: ["Programmed a book-like view for saved recipes using PageViewController from UIKit.",
                   "Fetched saved recipes from Core Data for the logged in user displayed on a table view of collection views utilizing an NSFetchedResultsController.",
                   "Enabled users the choice to publicly post their created recipes for others via storing the recipes in Firestore.",
                   "Coded an interactive timer implemented as a header view while following the recipe instructions step by step.",
                   "Queries the api endpoint for recipes based on user search input or provides a random recipe based on the search option set. "]
    },
    {name: "Pupple", type: ProjectType.iOS, role: "Mobile iOS", date: "Apr. 2022 - June 2022", src: `${baseURL}/pupple.gif`, github:"https://github.com/PuppyTinder/puppy-tinder",
     summary: "A Tinder-like app that allows dog owners to find a playmate for their dogs.",
     techStack: ["Swift", "Back4App", "UIKit", "Dog API", "Koloda", "Alamofire"],
     userStories: ["Developed an Ios app with a team of 4 to help dog owners find playmates in a tinderesque style using Swift.",
                   "Utilized the Koloda Cocoapods to implement a stackable and swipeable card interface for users to like/dislike other users.",
                   "Incorporated a live messaging system between matched users utilizing Parse Live Query to retrieve and send messages in real time.",
                   "Implemented an extensive sign up, profile, and filtering process to manage and store user data in the Back4App database."]
    },
    {name: "FitTrack", type: ProjectType.Android, role: "Mobile Android", date: "Oct. 2021 - Dec. 2021", src: `${baseURL}/FinalFitTrack.gif`, github:"https://github.com/FItTracker-Group/FitTrack",
     summary: "A fitness application designed to help people learn about various exercises and keep track of their weight. \nThe purpose of this app is to help create a workout community among friends or people with similar goals.",
     techStack: ["Java", "Back4App", "Parceler"],
     userStories: ["Developed an Android app with a team of 5 to inform users on how to perform exercises via categories using Java.",
                   "Designed the feed screen showcasing appropriate workouts in a recycler view parsed from information stored in Back4App utilizing parceler.",
                   "Enabled access to the internal camera from the app for users to share their progress via the bumptech.glide library.",
                   "Incorporated a search bar for users to filter specific exercises based on name/difficulty programmed via an ArrayList of filtered videos in Java."
     ]
    },
    {name: "CafesAPI", type: ProjectType.Backend, role: "Backend", date: "Apr. 2022 - May 2022", src: `${baseURL}/getcafes.png`, github:"https://github.com/Kirazuto7/CafesAPI",
     summary: "An api containing a list of information about cafes for people to find a good place to study/work in NYC.",
     techStack: ["C#", "MySQL", "Postman"],
     userStories: ["Programmed a database containing a list of cafes for people to cowork/study.",
                   "The database contains a few HTTP methods such as GET, POST, PUT, and DELETE requests.",
                   "Stored cafe information in a MySQL database.",
                   "Created models and a controller for the program utilizing C#."
     ]
    }
]

export const SkillsType = Object.freeze({
    Language: "Languages",
    Framework: "Frameworks",
    Database: "Databases",
    Tools: "Tools",
    array: ["Languages", "Frameworks", "Databases", "Tools"]
})

export const skills = [
    {name: "Swift", src: `${baseURL}/skills/swift.png`, type: SkillsType.Language},
    {name: "C++", src: `${baseURL}/skills/c++.png`, type: SkillsType.Language},
    {name: "Javascript", src: `${baseURL}/skills/javascript.png`, type: SkillsType.Language},
    {name: "Python", src: `${baseURL}/skills/python.png`, type: SkillsType.Language},
    {name: "Java", src: `${baseURL}/skills/java.png`, type: SkillsType.Language},
    {name: "C#", src: `${baseURL}/skills/csharp.jpeg`, type: SkillsType.Language},
    {name: "UIKit", src: `${baseURL}/skills/uikit.png`, type: SkillsType.Framework},
    {name: "React", src: "/logo192.png", type: SkillsType.Framework},
    {name: "Firebase", src: `${baseURL}/skills/google-firestore.png`, type: SkillsType.Database},
    {name: "MySQL", src: `${baseURL}/skills/mysql.png`, type: SkillsType.Database},
    {name: "ExpressJS", src: `${baseURL}/skills/express.png`, type: SkillsType.Database},
    {name: "VS Code", src: `${baseURL}/skills/vscode.png`, type: SkillsType.Tools},
    {name: "XCode", src: `${baseURL}/skills/xcode.jpeg`, type: SkillsType.Tools},
    {name: "Github", src: `${baseURL}/skills/github.png`, type: SkillsType.Tools},
    {name: "Ubuntu", src: `${baseURL}/skills/ubuntu.png`, type: SkillsType.Tools},
    {name: "Android", src: `${baseURL}/skills/androidstudio.jpeg`, type: SkillsType.Tools},
    {name: "Unreal", src: `${baseURL}/skills/unrealengine.png`, type: SkillsType.Tools}

]
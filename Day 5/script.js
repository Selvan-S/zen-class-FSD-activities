// Create your own resume data in JSON format

let resume = {
  firstName: "Selvan",
  lastName: "S",
  education: {
    UG: {
      institutionName: "Akshaya College of Engineering and Technology",
      courseName: "B.E. Mechatronics",
      passedOut: 2021,
    },
    HSC: {
      institutionName:
        "Sri Sowdeswari Vidyalaya Model Matric Higher Secondary School",
      passedOut: 2017,
    },
    SSLC: {
      institutionName:
        "Sri Sowdeswari Vidyalaya Model Matric Higher Secondary School",
      passedOut: 2015,
    },
  },
  workingExperience: [
    {
      conpanyName: "SAM Turbo IndustrySam Turbo Industry Pvt. Ltd",
      experienceInMonths: 8,
    },
    {
      conpanyName: "EMF Innovations Pvt. Ltd",
      experienceInMonths: 10,
    },
  ],
  projects: [
    {
      projectName: "Portfolio",
      description: `This is a my portfolio, built using the HTML, CSS and JavaScript`,
      githubRepoLink: "https://github.com/Selvan-S/selvans-portfolio",
      liveLink: "https://selvans.netlify.app",
    },
    {
      projectName: "E-commerce",
      description: `This is a E-commerce project, built using the  Next.js 14, TypeScript, Next-Auth, MongoDB, Prisma, Google Login, TailwindCSS, DaisyUI.`,
      githubRepoLink: "https://github.com/Selvan-S/nextjs-ecommerce",
      liveLink: "https://nextjs-ecommerce-lac-six.vercel.app",
    },
    {
      projectName: "Todolistapp",
      description: `This is a Todolistapp project, built using the Typescript, mongoDB, Expressjs, Reactjs and nodejs.`,
      githubRepoLink: "https://github.com/Selvan-S/todolistapp-frontend",
      liveLink: "https://2dolist-app.netlify.app",
    },
    {
      projectName: "Bookstore",
      description: `This is a bookstore project, built using the mongoDB, Expressjs, Reactjs and nodejs.`,
      githubRepoLink: "https://github.com/Selvan-S/bookstore-frontend",
      liveLink: "https://booksstore-app.netlify.app",
    },
    {
      projectName: "User Authentication",
      description: `This is my User Authentication project developed during the Guvi course, utilizing the MERN stack.`,
      githubRepoLink:
        "https://github.com/Selvan-S/user-authentication-frontend",
      liveLink: "https://user-authentication-guvi.netlify.app",
    },
  ],
};

// For the above JSON, iterate over all for loops (for, for in, for of, forEach)

//for loop
const objKeys = Object.keys(resume);
const objValues = Object.values(resume);
console.log(objKeys);
console.log(objValues);

console.log("------------ displaying the resume obj in for ------------------");
for (let i = 0; i < objKeys.length; i++) {
  console.log("objKeys", objKeys[i]);
  console.log("objValues", objValues[i]);
}

console.log(
  "------------ displaying the resume obj in for each ------------------"
);
//For each
objKeys.forEach((value, index, accArr) => {
  console.log(`Value : ${value}
index : ${index}
accArr : ${accArr}
                  `);
});

console.log(
  "------------ displaying the resume obj in for in ------------------"
);
//For in
for (key in resume) {
  if (key == "education") {
    for (const edu in resume[key]) {
      console.log(`${edu}:`);
      for (const name in resume[key][edu]) {
        console.log(`${name}: ${resume[key][edu][name]}`);
      }
    }
  } else if (key == "workingExperience") {
    for (const exp in resume[key]) {
      console.log(`${exp}:`);
      for (const name in resume[key][exp]) {
        console.log(`${name}: ${resume[key][exp][name]}`);
      }
    }
  } else if (key == "projects") {
    for (const proj in resume[key]) {
      console.log(`Project ${+proj + 1}:`);
      for (const name in resume[key][proj]) {
        console.log(`${name}: ${resume[key][proj][name]}`);
      }
    }
  } else {
    console.log(`
    object key : ${key}
    object vaule : ${resume[key]}
    `);
  }
}

console.log(
  "------------ displaying the resume obj in for of ------------------"
);
//For of obj (only by passing objKeys)
for (const keys of objKeys) {
  if (keys == "education") {
    for (const edu in resume[keys]) {
      console.log(`${edu}:`);
      for (const name in resume[keys][edu]) {
        console.log(`${name}: ${resume[keys][edu][name]}`);
      }
    }
  } else if (keys == "workingExperience") {
    for (const exp in resume[keys]) {
      console.log(`${exp}:`);
      for (const name in resume[keys][exp]) {
        console.log(`${name}: ${resume[keys][exp][name]}`);
      }
    }
  } else if (keys == "projects") {
    for (const proj in resume[keys]) {
      console.log(`Project ${+proj + 1}:`);
      for (const name in resume[keys][proj]) {
        console.log(`${name}: ${resume[keys][proj][name]}`);
      }
    }
  } else {
    console.log(resume[keys]);
  }
}

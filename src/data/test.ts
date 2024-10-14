const courses = [
    {
      name: "Full Stack Web Development",
      description: "Learn to build dynamic websites and web applications using HTML, CSS, JavaScript, and frameworks like React, Node.js, and Express."
    },
    {
      name: "Data Science and Machine Learning",
      description: "Dive into data analysis, visualization, and machine learning using Python, libraries like Pandas, NumPy, and frameworks such as TensorFlow."
    },
    {
      name: "Mobile App Development",
      description: "Develop cross-platform mobile applications using frameworks like React Native or Flutter, covering UI/UX design and backend integration."
    },
    {
      name: "Cybersecurity Fundamentals",
      description: "Understand the basics of network security, cryptography, risk management, and ethical hacking to protect systems from vulnerabilities."
    },
    {
      name: "Cloud Computing and DevOps",
      description: "Master cloud services like AWS, Azure, and DevOps practices such as CI/CD, containerization, and infrastructure as code (IaC)."
    },
    {
      name: "UI/UX Design",
      description: "Learn the principles of user interface and user experience design, including wireframing, prototyping, and user research techniques."
    },
    {
      name: "Artificial Intelligence",
      description: "Explore the fundamentals of AI, including neural networks, deep learning, natural language processing, and AI ethics."
    },
    {
      name: "Blockchain Development",
      description: "Get hands-on with blockchain technology and smart contract development using platforms like Ethereum and languages like Solidity."
    },
    {
      name: "Digital Marketing",
      description: "Learn strategies for SEO, social media marketing, content creation, and analytics to boost brand visibility and engagement."
    },
    {
      name: "Game Development",
      description: "Create 2D and 3D games using engines like Unity or Unreal, covering programming, physics, and animation techniques."
    }
  ];


 export const fetchCourses = () => {
    return new Promise((resolve) => {
      // Simulating a delay of 2 seconds (2000 milliseconds)
      setTimeout(() => {
        // Resolve the promise with the mock courses data
        resolve({
          data: courses
        });
      }, 2000);
    });
  };
  
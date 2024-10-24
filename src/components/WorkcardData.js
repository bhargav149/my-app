import pro1 from '../assets/pro_mngmt.jpg';
import pro2 from '../assets/chessai.jpg';
import pro3 from '../assets/bankmngmt.jpg';

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Project Database System",
        text: "Created a comprehensive web application for CS4704 at Virginia Tech using the MERN stack (MongoDB, Express.js, React.js, Node.js), assisting over 150 students with team collaboration and project tracking. Docker was integrated for application containerization, standardizing development environments across more than 4 teams and cutting deployment issues by 50%.",
        source: "https://github.com/bhargav149/Project-Database"
    },
    {
        imgsrc: pro2,
        title: "Chess Board AI",
        text: "Developed a computer vision tool using Python and OpenCV to analyze chessboard images and suggest optimal moves, enhancing move decision times by 20%. This project utilized advanced image processing techniques, such as Hough Transform for line detection and Canny Edge Detection for improved edge clarity, increasing accuracy by 30%. Roboflow was employed for efficient data management, reducing model training time by 25%.",
        source: "https://github.com/bhargav149/ChessAI"
    },
    {
        imgsrc: pro3,
        title: "Bank Management System",
        text: "Constructed a bank management system in Java using Eclipse IDE, focusing on customer account and transaction management for over 10,000 transactions monthly. JDBC was used for SQL database connectivity, improving data security and reliability, and leading to a 40% reduction in transaction processing errors.",
        source: "https://github.com/bhargav149/Bank-Management-System"
    }

];

export default ProjectCardData;
import crefin from '../../public/image/crefin.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AidBridge',
        description: "Built a full-stack web app to enable students in hostels to donate and request unused medicines. Developed frontend using Angular.js and backend with Node.js, Express.js, MongoDB. Integrated role-based authentication and real-time updates.",
        tools: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB'],
        role: 'Full Stack Developer',
        code: 'https://github.com/k-vanshhh/Aid-Bridge-NGO',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Calorie Detection System',
        description: "Designed an automated calorie detection system using YOLOv5 and EasyOCR. Built a Flask-based web interface with OpenCV-enhanced image preprocessing. Achieved 60% accuracy.",
        tools: ['Python', 'YOLOv5', 'Flask', 'OpenCV'],
        role: 'Developer',
        code: 'https://github.com/k-vanshhh/Calorie-Detection-System',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Topsis-Package',
        description: "Built and published a Python package for multi-criteria decision-making using TOPSIS. Implemented CLI and script support. Released on PyPI.",
        tools: ['Python', 'Pandas', 'NumPy'],
        role: 'Developer',
        code: 'https://github.com/k-vanshhh/calculate_topsis',
        demo: '',
        image: crefin,
    }
]
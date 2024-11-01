import React from 'react';
import coma from '../assets/coma.png';



const Stories = () => {
  const stories = [
    {
      name: "Ronald Vargeese",
      title: "Director",
      content: "We have used Workex for all of our significant hires over the past year. They have consistently been a pleasure to work with – knowledgeable in their field, responsive to both us and applicants, and thoughtful in their advice as we work through the process. A very good leadership team managing relationships at all levels.",
      image: coma,
      // image1:logo1
    },
    {
      name: "Siddharth Dialani",
      title: "Founder and Director",
      content: "Workex has made payroll processing so simple for us. With an ever-increasing team, this process was taking more and more time and we even contemplated having a dedicated team for this. But Workex has made it easier and faster. Moreover, hiring in remote areas is an added advantage with Workex. We are grateful to have Workex as a partner.",
      image: coma,
      // image1:logo2
    },
    {
      name: "Alok Jain",
      title: "VP HR",
      content: "It is really a great pleasure to share the good experience of Workex. Workex manages our workforce with ease and the experience is quite enjoyable. Managing people with compliance is so incredibly important to the success of my team. So grateful to have Workex as a partner.",
      image: coma,
      // image1:Bitmap
    },
  ];

  return (
    <section className="bg-white ">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Workex Stories</h2>
        <p className="text-lg text-gray-600">Stories of our Recruiters who've had great hiring experiences with us!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        {stories.map((story, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg text-left">
            <img src={story.image} alt={story.name} className="w-10 h-10 rounded mx-auto mb-4" />
           
            <p className="text-gray-700 text-lg mb-10">{story.content}</p>
            <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>
            <h4 className="text-md text-gray-600 mb-2">{story.title}</h4>

          </div>

        ))}
                   

      </div>
      
    
    </section>
  );
};

export default Stories;

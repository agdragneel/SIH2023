import React, { useState } from 'react';
import ClassCard from './ClassCard';
import CourseList from './CourseList';
import './courses.css';
const classes = [
  {
    className: 'LKG',
    subjects: ['Math', 'Science', 'English'],
    descriptions: {
      Math: 'In Lower Kindergarten (LKG), children are introduced to the exciting world of mathematics through a series of interactive and play-based activities. They embark on their mathematical journey by learning to count, recognize basic shapes, and understand the concept of quantity. LKG Math aims to create a strong foundation for future mathematical learning by fostering curiosity, problem-solving skills, and a positive attitude toward numbers. Students engage in games, puzzles, and fun exercises that make learning math an enjoyable and enriching experience.',
      Science: 'Lower Kindergarten (LKG) Science is a program designed to ignite the natural curiosity of young learners about the world around them. Through hands-on exploration, simple experiments, and age-appropriate activities, children are introduced to the wonders of the natural world. LKG Science focuses on fundamental concepts such as living and non-living things, basic weather patterns, and the properties of common materials. The aim is to develop observation skills, encourage questions, and inspire a lifelong interest in scientific inquiry from an early age.',
      English: 'Lower Kindergarten (LKG) English is dedicated to nurturing essential language skills in young learners. Through a language-rich environment, students are encouraged to actively listen, speak, and express themselves. LKG English lays the foundation for language fluency and literacy by immersing children in stories, songs, and interactive activities. This early exposure to language not only builds vocabulary but also cultivates a love for reading and communication. It provides the building blocks for effective communication, setting the stage for future language development'
    },
    imgurl: 'https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYwNTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'LKG introduces young children to the world of learning through play-based activities, laying the groundwork for future education'
  },
  {
    className: 'I',
    subjects: ['Math', 'Science', 'Social Studies'],
    descriptions: {
      Math: 'In Class I, students embark on their mathematical journey by learning fundamental arithmetic concepts and number recognition. This foundational year in mathematics focuses on addition, subtraction, and the development of problem-solving skills. Through interactive lessons and practical examples, students build a strong mathematical base, setting the stage for more complex mathematical concepts in the years to come. Class I Math encourages a positive attitude toward math and lays the groundwork for future mathematical success.',
      Science: 'Class I Science is an exciting exploration of the natural world designed to spark curiosity in young learners. Through hands-on experiments, observations, and age-appropriate lessons, students discover basic scientific principles. Topics include plants, animals, and the environment, fostering a sense of wonder and scientific inquiry. The goal is to nurture a budding interest in science and cultivate observation skills from an early age, setting the stage for a lifelong appreciation of the natural world.',
      'Social Studies': 'Social Studies description for Class I',
      Social_studies:'Class I Social Studies is an introduction to the broader world and basic social concepts. Students learn about their immediate surroundings, community, and their place within it. This foundational year in social studies focuses on building a sense of belonging and awareness by exploring topics such as people, places, and social interactions. Class I Social Studies encourages students to understand and appreciate their community while laying the groundwork for more in-depth social studies exploration in the future.'
    },
    imgurl: 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYxMDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class I is the starting point of formal education, where students learn basic numeracy and literacy skills in an interactive environment. '

  },
  {
    className: 'II',
    subject: ['Math', 'Science', 'Social Studies'],
    descriptions: {
      Math: 'Class II Math builds upon the foundational math skills acquired in Class I. Students delve into more complex mathematical concepts, including multiplication, division, and the exploration of geometric shapes. Through engaging lessons and practical applications, students continue to develop their problem-solving abilities and mathematical fluency. Class II Math aims to provide students with a solid mathematical foundation, preparing them for more advanced mathematical challenges in the years ahead.',
      Science: 'Class II Science expands students horizons in the realm of scientific exploration. They dive into a broader range of scientific topics, including ecosystems, weather, and matter. Through hands-on experiments and age-appropriate investigations, students further develop their scientific curiosity and critical thinking skills. Class II Science encourages students to question, observe, and explore, fostering a deeper understanding of the natural world and its wonders.',
      Social_Studies: 'Class II Social Studies broadens students understanding of the world around them. They explore geography, culture, and communities, fostering an appreciation for diversity and global awareness. Topics include different regions, customs, and the interconnectedness of societies. Class II Social Studies encourages students to embrace the richness of our global community while developing their social studies foundation',
    },
    imgurl: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjY0MDk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'In Class II, students continue to develop their foundational math and language skills, building a strong academic base.'
   

  },
  {
    className: 'III',
    subjects: ['Math', 'Science', 'Social Studies', 'History'],
    descriptions: {
      Math: 'Class III Math marks a significant step forward in mathematical learning as students delve deeper into arithmetic and problem-solving. They master fundamental skills, including multiplication, division, and fractions, while also honing their ability to tackle more complex math challenges. Class III Math aims to equip students with a solid mathematical foundation that will serve them well in their academic journey, emphasizing both mathematical proficiency and confidence.',
      Science: 'Class III Science extends students\' scientific knowledge by exploring various branches of science, including life sciences, physical sciences, and earth sciences. They delve into topics such as life cycles, forces, and energy transformations. Through hands-on experiments and age-appropriate investigations, students continue to develop their scientific inquiry skills, fostering a deeper appreciation for the wonders of the natural world.',
      'Social Studies': 'Class III Social Studies takes students on a journey through history, geography, and the principles of governance. They gain a broader perspective on the world and their place in it. Topics include ancient civilizations, map reading, and an introduction to the concepts of democracy and citizenship. Class III Social Studies encourages students to explore the rich tapestry of human history and society, promoting a sense of global awareness and responsible citizenship',
      History: 'Class III History delves into key historical events and figures, providing students with a deeper understanding of the past and its influence on the present. They explore pivotal moments in history, including ancient civilizations, important inventions, and the stories of inspiring individuals. Class III History aims to cultivate historical awareness and critical thinking skills, encouraging students to appreciate the role of history in shaping our world.',
    },
    imgurl: 'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYzMDQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class III marks the beginning of more in-depth studies, encompassing math, science, social studies, and expanding knowledge in various subjects.'},
  {
    className: 'IV',
    subjects: ['Math', 'Science', 'Social Studies', 'History'],
    descriptions: {
      Math: 'In Class IV, students continue their mathematical journey by refining their skills and tackling more complex mathematical concepts. Topics include decimals, geometry, and problem-solving strategies. Class IV Math aims to equip students with the mathematical proficiency and problem-solving abilities needed to excel in more advanced math studies in the years ahead.',
      Science: 'Class IV Science deepens students\' understanding of scientific principles by exploring a range of topics, including ecosystems, matter, and energy transformations. They engage in hands-on experiments and investigations that encourage critical thinking and scientific inquiry. Class IV Science encourages students to connect the dots between different scientific disciplines, fostering a holistic understanding of the natural world.',
      'Social Studies': 'Class IV Social Studies offers students a broader perspective on history, geography, and the diversity of cultures and societies around the world. They explore topics such as world geography, ancient civilizations, and cultural traditions. Class IV Social Studies aims to nurture global awareness, appreciation for cultural diversity, and a sense of interconnectedness among students.',
      History: 'Class IV History delves into significant historical periods and their impact on society and the world. Students study key events, important figures, and the evolution of civilizations. Through engaging lessons and historical narratives, Class IV History encourages students to analyze historical contexts and draw connections between the past and the present.',
    },
    imgurl: 'https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYzMzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class IV focuses on furthering academic skills and introduces students to more complex topics in math, science, and social studies.'

  },
  {
    className: 'V',
    subjects: ['Math', 'Science', 'Social Studies', 'History'],
    descriptions: {
      Math: 'Class V Math focuses on further refining mathematical skills and introducing students to more advanced topics, such as fractions, decimals, and geometry. Students also deepen their problem-solving abilities and mathematical fluency. Class V Math prepares students for the challenges of more advanced mathematical studies while instilling confidence in their mathematical capabilities.',
      Science: 'Class V Science explores a wide range of scientific disciplines, allowing students to discover the interconnectedness of the natural world. They investigate topics such as earth science, astronomy, and the diversity of life forms. Through hands-on experiments and in-depth explorations, Class V Science encourages students to embrace their roles as budding scientists, promoting curiosity and inquiry.',
      'Social Studies': 'Class V Social Studies immerses students in the study of world cultures, geography, and global issues. They delve into the rich tapestry of human civilization, exploring the interplay of cultures, history, and geography. Class V Social Studies fosters global awareness, critical thinking, and a sense of responsibility in addressing global challenges.',
      History: 'Class V History examines historical events and their enduring significance, encouraging students to think critically about the past. Students study major historical periods, revolutions, and key figures who have shaped history. Class V History aims to deepen historical awareness and analytical thinking, enabling students to appreciate the complexities of our shared human story.',
    },
    imgurl: 'https://images.unsplash.com/photo-1600792174277-8d734290a61f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjY0NDQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',

    classdesc: 'Class V emphasizes critical thinking and a deeper understanding of subjects, preparing students for more advanced studies in the future.',},
];

export default function Courses() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div>
      <main>
        {!selectedClass ? (
          <div className="class-selection">
            {classes.map((classData) => (
              <ClassCard
                key={classData.className}
                classData={classData}
                onSelect={(className, subject) => {
                  setSelectedClass(className);
                }}
              />
            ))}
          </div>
        ) : (
          <CourseList
            subjects={classes.find((classData) => classData.className === selectedClass)?.subjects || []}
            descriptions={classes.find((classData) => classData.className === selectedClass)?.descriptions || {}}
            selectedClass={selectedClass}
          />
        )}
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useAuth from '../../hooks/useAuth';

const ProfilePage = () => {
  const { user } = useAuth();
  const [role, setRole] = useState('student');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const studentStats = [
    { label: 'Courses Enrolled', value: '5' },
    { label: 'Assignments', value: '12' },
    { label: 'Average Grade', value: '92%' },
  ];

  const tutorStats = [
    { label: 'Active Students', value: '45' },
    { label: 'Courses', value: '3' },
    { label: 'Rating', value: '4.8' },
  ];

  const studentActivities = [
    { action: 'Submitted Assignment', course: 'Advanced Mathematics', time: '2 hours ago' },
    { action: 'Attended Live Session', course: 'Physics 101', time: '5 hours ago' },
    { action: 'Completed Quiz', course: 'Chemistry Basics', time: '1 day ago' },
  ];

  const tutorActivities = [
    { action: 'Graded Assignments', course: 'Advanced Mathematics', time: '1 hour ago' },
    { action: 'Conducted Live Session', course: 'Physics 101', time: '3 hours ago' },
    { action: 'Posted Course Material', course: 'Chemistry Basics', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b mt-16 from-green-50 to-green-100 py-12 px-4">
      {/* Role Toggle (Demo Only) */}
      {/* <div className="max-w-4xl mx-auto mb-8">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="student">View as Student</option>
          <option value="tutor">View as Tutor</option>
        </select>
      </div> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Profile Header */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 bg-green-200 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-8 relative"
            >
              <span className="text-5xl"><img src={user?.photoURL} alt="" className='h-32 w-32 rounded-full' /></span>
              {role === 'tutor' && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Verified
                </div>
              )}
            </motion.div>
            
            <div className="text-center md:text-left">
              <motion.h1 
                variants={itemVariants}
                className="text-3xl font-bold text-green-800 mb-2"
              >
                {role === 'student' ?`${user?.displayName}`: 'Dr. Sarah Smith'}
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-green-600 mb-2"
              >
                {role === 'student' ? 'Computer Science Student' : 'Professor of Computer Science'}
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-green-500 mb-4"
              >
                {role === 'student' ? 'Year 3 • Batch 2024' : 'PhD • 8 Years Experience'}
              </motion.p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 
                           transition-colors duration-300"
                >
                  Edit Profile
                </motion.button>
                {role === 'student' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border-2 border-green-600 text-green-600 rounded-full
                             hover:bg-green-50 transition-colors duration-300"
                  >
                    View Progress
                  </motion.button>
                )}
                {role === 'tutor' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border-2 border-green-600 text-green-600 rounded-full
                             hover:bg-green-50 transition-colors duration-300"
                  >
                    Schedule Class
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {(role === 'student' ? studentStats : tutorStats).map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-green-800">{stat.value}</h3>
              <p className="text-green-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Role-specific Sections */}
        {role === 'student' && (
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-4">Current Courses</h2>
            <div className="space-y-4">
              {['Advanced Mathematics', 'Physics 101', 'Chemistry Basics'].map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-4 bg-green-50 rounded-lg"
                >
                  <span className="text-green-800 font-medium">{course}</span>
                  <span className="text-green-600">In Progress</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {role === 'tutor' && (
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-4">Teaching Schedule</h2>
            <div className="space-y-4">
              {[
                { course: 'Advanced Mathematics', time: 'Mon, Wed 10:00 AM' },
                { course: 'Physics 101', time: 'Tue, Thu 2:00 PM' },
                { course: 'Chemistry Basics', time: 'Fri 11:00 AM' }
              ].map((schedule, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-4 bg-green-50 rounded-lg"
                >
                  <span className="text-green-800 font-medium">{schedule.course}</span>
                  <span className="text-green-600">{schedule.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recent Activity */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {(role === 'student' ? studentActivities : tutorActivities).map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-green-800 font-medium">
                    {activity.action} - <span className="text-green-600">{activity.course}</span>
                  </p>
                  <p className="text-green-500 text-sm">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
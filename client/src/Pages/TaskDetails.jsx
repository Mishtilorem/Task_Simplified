// import React, { useState } from 'react'
// import { MdKeyboardArrowDown,MdKeyboardDoubleArrowUp,MdKeyboardArrowUp,MdOutlineDoneAll,MdOutlineMessage,MdTaskAlt} from 'react-icons/md';
// import { useGetSingleTaskQuery ,usePostTaskActivityMutation} from '../redux/slices/api/taskapislice'
// import {toast} from "sonner";
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { RiProgress2Line } from "react-icons/ri";
// import Tabs from '../Components/Tabs'
// import { FaThumbsUp } from "react-icons/fa";
// import { PRIOTITYSTYELS,TASK_TYPE,getInitials} from '../utils/index';
// import {RxActivityLog} from 'react-icons/rx'
// import Loading from '../Components/Loader'
// import { FaTasks,FaBug  } from 'react-icons/fa';
// import  Button  from '../Components/Button';
// import moment from 'moment';
// import clsx from 'clsx';
// const ICONS = {
//   high: <MdKeyboardDoubleArrowUp />,
//   medium: <MdKeyboardArrowUp />,
//   low: <MdKeyboardArrowDown />,
// }
// const TABS  = [
//   {title: "Task Detail", icon: <FaTasks/>},
//   {title : "Activities/Timeline",icon : <RxActivityLog/>}
// ];
// const act_types = [
//   "Started", "Completed", "In Progress","Commented", "Bug","Assigned"
// ];

// const TaskDetails = () => {
//   const {id} = useParams();
  
//   const {data,error,isLoading,refetch} = useGetSingleTaskQuery(id);
  
  
//   const [selected, setSelected] = useState(0);
//   const task = data?.task;
//   console.log(data?.task?.activities)
 
//   if(isLoading){
//     return(
//       <div className = "py-10">
//         <Loading/>
//       </div>
//     )
//   }
//   return (
//     <div className='w-full flex flex-col gap-3 mb-4 overflow-y-hidden'>
//       <h1 className='text-2xl text-gray-600 font-bold'>{task?.title}</h1>
//       <Tabs tabs = {TABS} setSelected={setSelected}>
//         {selected ===0 ? (
//           <>
         
          
//           <div className="space-y-4 mb-5">
//   {/* Flex container for High Priority and In Progress */}
//   <div className="flex items-center space-x-4">
//     {/* High Priority Button */}
//     <div className={clsx("flex items-center font-bold py-1 px-3 rounded-full", PRIOTITYSTYELS[task?.priority], "fill-current")}>
//       {ICONS[task?.priority]}
//       <span className="capitalize">{task?.priority}</span>
//     </div>

//     {/* In Progress Status */}
//     <div className="flex items-center">
//       <span className={clsx("h-3 w-3 rounded-full inline-block mr-2",TASK_TYPE[task?.stage])}></span>
//       <span className="text-gray-600 capitalize">{task?.stage}</span>
//     </div>
//   </div>

//   {/* Created At Date */}
//   <div className="text-sm text-gray-600">
//     <p>Created At: {moment(task?.createdAt).format("DD MMM YYYY")}</p>
//   </div>

//   {/* Assets and Sub-Task Info */}
//   <div className="border-t border-gray-300 pt-2">
//     <div className=" text-sm text-gray-700 space-x-4">
//       <span>Assets: {task?.assets.length}</span>
//       <span>|</span>
//       <span>Sub-Task: {task?.subTasks.length}</span>
//     </div>
//   </div>

//   {/* Assets Section */}
//   <div>
//     <p className="text-gray-700">Assets:</p>
//     <div className="flex space-x-4">
//       {/* Assets Image */}
//       <div className="w-full max-w-xs">
//         {task?.assets.length > 0 ? (
//           task.assets.map((idx) => (
//             <img key={idx} src={task?.assets} alt="asset" className="rounded-md shadow-md" />
//           ))
//         ) : (
//           <p className="text-sm text-gray-500">No assets available</p>
//         )}
//       </div>
//     </div>
//   </div>

//   {/* Task Team */}
//   <div className="space-y-4">
//   <p className="text-gray-700 font-bold">TASK TEAM</p>

//   {/* User List */}
//   {/* Check if the team array is empty */}
// {(task?.team?.length === 0 )&&(
//   <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
//     <p className="font-semibold">You are viewing this task as an admin.</p>
//     <p className="text-sm">No team members are assigned to this task yet.</p>
//   </div>
// )}

// {/* If team exists, display team members */}
// {task?.team?.length > 0 && (
//   <div className="space-y-4">
//     {task.team.map((user, idx) => (
//       <div key={idx} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
//         {/* User Avatar */}
//         <div className="flex-shrink-0">
//           <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
//             {getInitials(user?.name)}
//           </div>
//         </div>
//         {/* User Info */}
//         <div>
//           <p className="text-gray-900 font-medium">{user.name}</p>
//           <p className="text-gray-500 text-sm">{user.role}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// )}

// </div>
// </div>
// {/* Sub-Tasks Section */}
// <div className="border-t border-gray-300 pt-2">
//   <h2 className="text-lg font-bold text-gray-700">SUB-TASKS</h2>

//   {/* Iterate over sub-tasks */}
//   {task?.subTasks.length > 0 ? (
//     task.subTasks.map((subTask, idx) => (
//       <div key={idx} className="flex justify-between p-3 bg-gray-50 rounded-md shadow-md">
//         {/* Left Side: Icon, Date, and Status */}
//         <div className="flex space-x-4">
//           {/* Check Icon */}
//           {MdKeyboardDoubleArrowUp}

//           {/* Date, Status, and Description/Title */}
//           <div className="space-y-1">
//             {/* Date and Status Row */}
//             <div className="flex items-center space-x-2">
//               {/* Sub-Task Date */}
//               <p className="text-sm text-gray-600">
//                 {moment(subTask?.date).format('ddd MMM D YYYY')}
//               </p>

//               {/* tag Badge */}
//               <span className="px-2 py-1 text-sm font-medium bg-purple-100 text-purple-600 rounded-full">
//                 {subTask?.tag}
//               </span>
//             </div>

//             {/* Sub-Task Description (or Title) */}
//             <div className="text-gray-700 text-sm">
//               {subTask?.title}
//             </div>
//           </div>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p className="text-sm text-gray-500">No sub-tasks available</p>
//   )}
// </div>
//           </>
//         ) : (
//           <>
//           <Activities activity = {data?.task?.activities} id={id} refetch={refetch}/>
//           </>
//         )}
//       </Tabs>
//     </div>
//   )
// }


// const Activities = ({activity,id,refetch}) =>{
//   const [selected,setSelected]= useState(act_types[0]);
//   const [text,setText] = useState("");
  
//   const[postActivity , {isLoading}] = usePostTaskActivityMutation();
  
//   const handleSubmit = async () => {
//     try {
//       const activityData = {
//         type: selected?.toLowerCase(),
//         activity: text,
//       };
  
//       console.log("Submitting activity data:", activityData);
  
//       // Call the API and unwrap the response
//       const res = await postActivity({
//         data: activityData,
//         id:id,
//       }).unwrap();
      
//       console.log("API response:", res);
//       setText("");
//       toast.success(res?.message);
  
//       // Check if refetch is defined and handle its errors separately
//       if (typeof refetch === 'function') {
//         try {
//           console.log("Refetching data...");
//           refetch();  // Attempt to refetch if the function exists
//           console.log("Data refetched successfully");
//         } catch (refetchError) {
//           console.error("Error during refetch: ", refetchError);
//           toast.error("Error while refreshing data");
//         }
//       } else {
//         console.warn("Refetch function is not available");
//       }
  
//     } catch (error) {
//       // Log the entire error object for better debugging
//       console.error("Error during handleSubmit:", error);
  
//       // Handle any other errors that occur during the submit
//       toast.error(error?.data?.message || error?.error || "An unknown error occurred");
//     }
//   };
  

  
//   const Card = ({ item }) => {
//     const [isConnected, setIsConnected] = useState(false);
//     const [internalId, setInternalId] = useState(item._id); // Use id from item as internal state
  
//     useEffect(() => {
//       // Logic to check connection status and update isConnected
//       if (item.status === 'connected') {
//         setIsConnected(true);
//       }
//     }, [item]);
  
//     // Only render the card if isConnected is false (gray border)
//     if (isConnected) return null; // Don't render if connected
  
//     const borderColor = 'border-gray-300'; // Gray border for disconnected state
  
//     const getActivityIcon = (type) => {
//       switch (type) {
//         case 'commented':
//           return <MdOutlineMessage className="text-blue-500 w-6 h-6" />;
//         case 'completed':
//           return <MdTaskAlt className="text-blue-500 w-6 h-6" />;
//         case 'started':
//           return <FaThumbsUp className="text-blue-500 w-6 h-6" />;
//         case 'in progress':
//           return <RiProgress2Line className="text-yellow-500 w-6 h-6" />;
//         case 'bug':
//           return <FaBug className="text-red-500 w-6 h-6" />;
//         default:
//           return <MdOutlineDoneAll className="text-green-500 w-6 h-6" />;
//       }
//     };
  
//     return (
//       <div key={internalId} className={`p-4 border rounded shadow bg-white flex items-start mb-4 ${borderColor}`}>
//         {/* Icon */}
//         <div className="mr-3">
//           {getActivityIcon(item.type)}
//         </div>
  
//         {/* User, title, time, and description */}
//         <div>
//           {/* User Name and Icon */}
//           <div className="flex items-center space-x-2">
//             <p className="font-bold text-gray-800">{item.by?.name}</p>
//           </div>
  
//           {/* Activity Title and Time */}
//           <p className="text-sm text-gray-500">
//             {item.type.charAt(0).toUpperCase() + item.type.slice(1)}{" "}
//             {moment(item.date).format("MM/DD/YYYY HH:mm A")}
//           </p>
  
//           {/* Activity Description */}
//           <p className="text-gray-600">{item.activity}</p>
//         </div>
//       </div>
//     );
//   };
  
//   return (
//     <div className="w-full flex gap-10 2xl:gap-20 min-h-screen px-10 py-8 bg-white shadow rounded">
//       <div className="w-full md:w-1/2">
//         <h4 className="text-gray-600 font-semibold text-lg mb-5">Activities</h4>
  
//         <div className="w-full">
//         {activity?.filter(el => el.status !== 'connected') // Filter activities based on connection status
//           .map((el, index) => (
//             <Card key={index} item={el} />
//             ))}
//         </div>
//       </div>
//       <div className="w-full md:w-1/3">
//       <h4 className="text-gray-600 font-semibold text-lg mb-5">
//         Add Activity
//       </h4>  
//       <div className="w-full flex flex-wrap gap-5">
//         {act_types.map((item,index) =>(
//           <div key = {item} className="flex gap-2 items-center">
//             <input
//             type="checkbox"
//             className='w-4 h-4'
//             checked={selected === item ?true : false} 
//             onChange={(e) =>setSelected(item)}
//             />
//             <p>{item}</p>
//           </div>
//         ))}
//         <textarea
//         rows={10}
//         value = {text}
//          onChange = {(e)=>setText(e.target.value)}
//          placeholder='Type.....'
//          className='bg-white w-full mt-10 border-gray-300 outline-none p-4 rounded border-2 border-gray-300' 
//         />
//         {isLoading ?Activities(<Loading/>):(
//           <Button
//           type = 'button'
//           label = 'Submit'
//           onClick={handleSubmit}
//           className={'bg-blue-600 text-white rounded'}
//           />
//         )}
//       </div> 
//       </div>
//     </div>
//     )
// }
// //   return (
// //     <div className="w-full flex gap-10 2xl:gap-20 min-h-screen px-10 py-8 bg-white shadow rounded">
// //     <div className="w-full md:w-1/2">
// //       <h4 className='text-gray-600 font-semibold text-lg mb-5'>Activities</h4>

// //       <div className = 'w-full'>
// //         {activity?.map((el,index)=>(
// //           <Card
// //           key={index}
// //           item={el}
// //           isConnected={index<activity?.length -1 }/>))}      </div>
// //     </div>
// //     <div className="w-full md:w-1/3">
// //       <h4 className="text-gray-600 font-semibold text-lg mb-5">
// //         Add Activity
// //       </h4>  
// //       <div className="w-full flex flex-wrap gap-5">
// //         {act_types.map((item,index) =>(
// //           <div key = {item} className="flex gap-2 items-center">
// //             <input
// //             type="checkbox"
// //             className='w-4 h-4'
// //             checked={selected === item ?true : false} 
// //             onChange={(e) =>setSelected(item)}
// //             />
// //             <p>{item}</p>
// //           </div>
// //         ))}
// //         <textarea
// //         rows={10}
// //         value = {text}
// //          onChange = {(e)=>setText(e.target.value)}
// //          placeholder='Type.....'
// //          className='bg-white w-full mt-10 border-gray-300 outline-none p-4 rounded border-2 border-gray-300' 
// //         />
// //         {isLoading ?Activities(<Loading/>):(
// //           <Button
// //           type = 'button'
// //           label = 'Submit'
// //           onClick={handleSubmit}
// //           className={'bg-blue-600 text-white rounded'}
// //           />
// //         )}
// //       </div> 
// //       </div>
// //     </div>
// //   )
// // };


// export default TaskDetails



import clsx from "clsx";
import moment from "moment";
import React, { useState } from "react";
import { FaBug, FaTasks, FaThumbsUp, FaUser } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
  MdOutlineDoneAll,
  MdOutlineMessage,
  MdTaskAlt,
} from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import Tabs from "../components/Tabs";
import { PRIOTITYSTYELS, TASK_TYPE, getInitials } from "../utils";
import Loading from "../components/Loader";
import Button from "../components/Button";
import { useGetSingleTaskQuery, usePostTaskActivityMutation } from "../redux/slices/api/taskApiSlice";



const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const bgColor = {
  high: "bg-red-200",
  medium: "bg-yellow-200",
  low: "bg-blue-200",
};

const TABS = [
  { title: "Task Detail", icon: <FaTasks /> },
  { title: "Activities/Timeline", icon: <RxActivityLog /> },
];

const TASKTYPEICON = {
  commented: (
    <div className='w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white'>
      <MdOutlineMessage />,
    </div>
  ),
  started: (
    <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
      <FaThumbsUp size={20} />
    </div>
  ),
  assigned: (
    <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 text-white'>
      <FaUser size={14} />
    </div>
  ),
  bug: (
    <div className='text-red-600'>
      <FaBug size={24} />
    </div>
  ),
  completed: (
    <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white'>
      <MdOutlineDoneAll size={24} />
    </div>
  ),
  "in progress": (
    <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 text-white'>
      <GrInProgress size={16} />
    </div>
  ),
};

const act_types = [
  "Started",
  "Completed",
  "In Progress",
  "Commented",
  "Bug",
  "Assigned",
];

const TaskDetails = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetSingleTaskQuery(id);
  const [selected, setSelected] = useState(0);
  const task = data?.task;

  if (isLoading)
    return (
      <div className='py-10'>
        <Loading />
      </div>
  );

  return (
    <div className='w-full flex flex-col gap-3 mb-4 overflow-y-hidden'>
      <h1 className='text-2xl text-gray-600 font-bold'>{task?.title}</h1>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {selected === 0 ? (
          <>
            <div className='w-full flex flex-col md:flex-row gap-5 2xl:gap-8 bg-white shadow-md p-8 overflow-y-auto'>
              {/* LEFT */}
              <div className='w-full md:w-1/2 space-y-8'>
                <div className='flex items-center gap-5'>
                  <div
                    className={clsx(
                      "flex gap-1 items-center text-base font-semibold px-3 py-1 rounded-full",
                      PRIOTITYSTYELS[task?.priority],
                      bgColor[task?.priority]
                    )}
                  >
                    <span className='text-lg'>{ICONS[task?.priority]}</span>
                    <span className='uppercase'>{task?.priority} Priority</span>
                  </div>

                  <div className={clsx("flex items-center gap-2")}>
                    <div
                      className={clsx(
                        "w-4 h-4 rounded-full",
                        TASK_TYPE[task.stage]
                      )}
                    />
                    <span className='text-black uppercase'>{task?.stage}</span>
                  </div>
                </div>

                <p className='text-gray-500'>
                  Created At: {new Date(task?.date).toDateString()}
                </p>

                <div className='flex items-center gap-8 p-4 border-y border-gray-200'>
                  <div className='space-x-2'>
                    <span className='font-semibold'>Assets :</span>
                    <span>{task?.assets?.length}</span>
                  </div>

                  <span className='text-gray-400'>|</span>

                  <div className='space-x-2'>
                    <span className='font-semibold'>Sub-Task :</span>
                    <span>{task?.subTasks?.length}</span>
                  </div>
                </div>

                <div className='space-y-4 py-6'>
                  <p className='text-gray-600 font-semibold test-sm'>
                    TASK TEAM
                  </p>
                  <div className='space-y-3'>
                    {task?.team?.map((m, index) => (
                      <div
                        key={index}
                        className='flex gap-4 py-2 items-center border-t border-gray-200'
                      >
                        <div
                          className={
                            "w-10 h-10 rounded-full text-white flex items-center justify-center text-sm -mr-1 bg-blue-600"
                          }
                        >
                          <span className='text-center'>
                            {getInitials(m?.name)}
                          </span>
                        </div>

                        <div>
                          <p className='text-lg font-semibold'>{m?.name}</p>
                          <span className='text-gray-500'>{m?.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='space-y-4 py-6'>
                  <p className='text-gray-500 font-semibold text-sm'>
                    SUB-TASKS
                  </p>
                  <div className='space-y-8'>
                    {task?.subTasks?.map((el, index) => (
                      <div key={index} className='flex gap-3'>
                        <div className='w-10 h-10 flex items-center justify-center rounded-full bg-violet-50-200'>
                          <MdTaskAlt className='text-violet-600' size={26} />
                        </div>

                        <div className='space-y-1'>
                          <div className='flex gap-2 items-center'>
                            <span className='text-sm text-gray-500'>
                              {new Date(el?.date).toDateString()}
                            </span>

                            <span className='px-2 py-0.5 text-center text-sm rounded-full bg-violet-100 text-violet-700 font-semibold'>
                              {el?.tag}
                            </span>
                          </div>

                          <p className='text-gray-700'>{el?.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='w-full md:w-1/2 space-y-8'>
                <p className='text-lg font-semibold'>ASSETS</p>

                <div className='w-full grid grid-cols-2 gap-4'>
                  {task?.assets?.map((el, index) => (
                    <img
                      key={index}
                      src={el}
                      alt={task?.title}
                      className='w-full rounded h-28 md:h-36 2xl:h-52 cursor-pointer transition-all duration-700 hover:scale-125 hover:z-50'
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Activities activity={data?.task?.activities} id={id} refetch = {refetch} />
          </>
        )}
      </Tabs>
    </div>
  );
};

const Activities = ({ activity, id, refetch}) => {
  const [selected, setSelected] = useState(act_types[0]);
  const [text, setText] = useState("");

  const [postActivity, {isLoading } ] = usePostTaskActivityMutation();
  const handleSubmit = async () => {
    try {
      const activityData = {
      type: selected?.toLowerCase(),
      activity: text,
      };
      const result = await postActivity({
        data: activityData,
        id
      }).unwrap();

      setText("");
      toast.success(result?.message);
      refetch();      
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.error);
    }
  };

  const Card = ({ item }) => {
    return (
      <div className='flex space-x-4'>
        <div className='flex flex-col items-center flex-shrink-0'>
          <div className='w-10 h-10 flex items-center justify-center'>
            {TASKTYPEICON[item?.type]}
          </div>
          <div className='w-full flex items-center'>
            <div className='w-0.5 bg-gray-300 h-full'></div>
          </div>
        </div>

        <div className='flex flex-col gap-y-1 mb-8'>
          <p className='font-semibold'>{item?.by?.name}</p>
          <div className='text-gray-500 space-y-2'>
            <span className='capitalize'>{item?.type}</span>
            
            <span className='text-sm pl-4'>{moment(item?.createdAt).fromNow()}</span>
          </div>
          <div className='text-gray-700'>{item?.activity}</div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full flex gap-10 2xl:gap-20 min-h-screen px-10 py-8 bg-white shadow rounded-md justify-between overflow-y-auto'>
      <div className='w-full md:w-1/2'>
        <h4 className='text-gray-600 font-semibold text-lg mb-5'>Activities</h4>

        <div className='w-full'>
          {activity?.map((el, index) => (
            <Card
              key={index}
              item={el}
              isConnected={index < activity?.length - 1}
            />
          ))}
        </div>
      </div>

      <div className='w-full md:w-1/3'>
        <h4 className='text-gray-600 font-semibold text-lg mb-5'>
          Add Activity
        </h4>
        <div className='w-full flex flex-wrap gap-5'>
          {act_types.map((item, index) => (
            <div key={item} className='flex gap-2 items-center'>
              <input
                type='checkbox'
                className='w-4 h-4'
                checked={selected === item ? true : false}
                onChange={(e) => setSelected(item)}
              />
              <p>{item}</p>
            </div>
          ))}
          <textarea
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type ......'
            className='bg-white w-full mt-10 border border-gray-300 outline-none p-4 rounded-md focus:ring-2 ring-blue-500'
          ></textarea>
          {isLoading ? (
            <Loading />
          ) : (
            <Button
              type='button'
              label='Submit'
              onClick={handleSubmit}
              className='bg-blue-600 text-white rounded'
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default TaskDetails;

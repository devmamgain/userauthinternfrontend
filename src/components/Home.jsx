import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const [sideBar,setSideBar] = useState(false)
  const staticdata = [
    {
      id: 1,
      name: "Michael Holz",
      dateCreated: "04/10/2013",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Paula Wilson",
      dateCreated: "05/08/2014",
      role: "Publisher",
      status: "Active",
    },
    {
      id: 3,
      name: "Antonio Moreno",
      dateCreated: "11/05/2015",
      role: "Publisher",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Mary Saveley",
      dateCreated: "06/09/2016",
      role: "Reviewer",
      status: "Active",
    },
    {
      id: 5,
      name: "Martin Sommer",
      dateCreated: "12/08/2017",
      role: "Moderator",
      status: "Inactive",
    },
  ];
  const logout = ()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
return (
<div className="flex justify-center flex-grow">
{<div className="flex flex-col justify-center items-center p-5 fixed left-0  top-0 h-full bg-[#1C2D4F] text-white z-10" onMouseEnter={()=>setSideBar(true)} onMouseLeave={()=>setSideBar(false)}>
   { !sideBar ?
   <div className="grid gap-10">
   <h1>N</h1>
    <h1>D</h1>
    <h1>E</h1>
    <h1>L</h1>
    </div>
    :
    <div className="grid gap-10">
    <h1>Name: <span>{token.user.name}</span></h1>
    <h1>D.O.B: <span>{new Date(token.user.dateofbirth).toLocaleString("en-IN")}</span></h1>
    <h1>Email: <span>{token.user.email}</span></h1>
    <button className="bg-[#00F5E1] py-3 rounded-lg text-[#019EA4]" onClick={logout}>Logout</button>
    </div>
}
  </div>}
  {/* {sideBar&&<div className="flex  flex-col py-4 px-10"> */}
 
  <div className="overflow-x-auto flex flex-grow">

  <table className="mt-20 flex-grow divide-y mx-20 lg:mx-12 text-[#6C7B96] ">

    <thead>
      <tr >
      <th className="p-2 lg:p-4">#</th>
            <th className="p-2 lg:p-4">Name</th>
            <th className="p-2 lg:p-4">Date Created</th>
            <th className="p-2 lg:p-4">Role</th>
            <th className="p-2 lg:p-4">Status</th>
            <th className="p-2 lg:p-4">Action</th>
      </tr>
    </thead>
    <tbody className="divide-y">
   
       {staticdata.map(data=>  
         <tr className="text-center "> 
          <td className="p-2 lg:p-4">{data.id}</td>
              <td className="p-2 lg:p-4 font-semibold">{data.name}</td>
              <td className="p-2 lg:p-4">{data.dateCreated}</td>
              <td className="p-2 lg:p-4">{data.role}</td>
              <td className="p-2 lg:p-4">{data.status == "Active" ?
          <span className="">
            <span className="p-1 rounded-full inline-block bg-green-500 mt-2">
              </span>
              <span className="ml-3">
                {data.status}</span>
                </span> :
                <span>
                <span className="p-1 rounded-full inline-block bg-red-500 mt-2">
              </span>
              <span className="ml-3">
                {data.status}</span>
                </span>  }</td>  
                <td className="p-2 lg:p-4 flex justify-center space-x-2 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

</td>
         </tr>)}
  
    </tbody>
  </table>
  </div>
  </div>);
};

export default Home;

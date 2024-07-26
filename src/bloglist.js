import React from 'react'
import Blogcard from './Blogcard';
export default function Bloglist(){
    const data=[{
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        _id:1
        ,img:"https://media.istockphoto.com/id/1614043557/photo/net-zero-concept-and-carbon-neutral-natural-environment-climate-neutral-long-term-emissions.jpg?s=612x612&w=0&k=20&c=bNJl3tMBbsGMMARD37Xttci4NWl-rSdDp3V0SnAiPoM="
        ,desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

    },{
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", _id:2
        ,img:"https://media.istockphoto.com/id/1614043557/photo/net-zero-concept-and-carbon-neutral-natural-environment-climate-neutral-long-term-emissions.jpg?s=612x612&w=0&k=20&c=bNJl3tMBbsGMMARD37Xttci4NWl-rSdDp3V0SnAiPoM="
        ,desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

    },{
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", _id:3
        ,img:"https://media.istockphoto.com/id/1614043557/photo/net-zero-concept-and-carbon-neutral-natural-environment-climate-neutral-long-term-emissions.jpg?s=612x612&w=0&k=20&c=bNJl3tMBbsGMMARD37Xttci4NWl-rSdDp3V0SnAiPoM="
        ,desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

    },{
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", _id:4
        ,img:"https://media.istockphoto.com/id/1614043557/photo/net-zero-concept-and-carbon-neutral-natural-environment-climate-neutral-long-term-emissions.jpg?s=612x612&w=0&k=20&c=bNJl3tMBbsGMMARD37Xttci4NWl-rSdDp3V0SnAiPoM="
        ,desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

    },{
        title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", _id:5
        ,img:"https://media.istockphoto.com/id/1614043557/photo/net-zero-concept-and-carbon-neutral-natural-environment-climate-neutral-long-term-emissions.jpg?s=612x612&w=0&k=20&c=bNJl3tMBbsGMMARD37Xttci4NWl-rSdDp3V0SnAiPoM="
        ,desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

    },]
    return(
        <div className=''>
           {data.map((item,index)=>{
            return <Blogcard title={item.title} desc={item.desc} img={item.img} index={index} id={item._id}/>
           })}        
        </div>
    );
}
import React, { useState } from 'react'


const MiniProjects = () => {
    const [menu,setMenu] = useState('');
  return (
    <div>
        <ul className="menu">
          <li onClick={() => setMenu('home')} className={menu === "home" ? "active":""}><a href="/">Home</a></li>
          <li onClick={() => setMenu('todo')} className={menu === "todo" ? "active":""}><a href='/todo'>Mini ToDo List</a></li>
          <li onClick={() => setMenu('search')} className={menu === "search" ? "active":""}><a href='/search'>Search Filter</a></li>
          <li onClick={() => setMenu('fetch')} className={menu === "fetch" ? "active":""}><a href='/fetch'>Fetch Api</a></li>
          <li onClick={() => setMenu('counter')} className={menu === "counter" ? "active":""}><a href='/counter'>Counter</a></li>
          <li onClick={() => setMenu('countdown')} className={menu === "countdown" ? "active":""}><a href='/countdown'>CountDown</a></li>
        </ul>
    </div>
  )
}

export default MiniProjects
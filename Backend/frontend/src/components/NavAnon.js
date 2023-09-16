import React from 'react'

export default function NavAnon() {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/course">Courses</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign-Up</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li class="admin-control"><a href="/admin">Admin Control</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

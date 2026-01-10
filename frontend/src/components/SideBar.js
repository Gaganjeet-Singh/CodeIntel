import React from "react";
import { Bot, Plus, Folder, User, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Bot size={22} />
        <span>CodeReviewAI</span>
      </div>

      <button className="sidebar-btn">
        <Plus size={16} /> New Review
      </button>

      <nav className="menu">
        <p><Folder size={16}/> My Reviews</p>
        <p><User size={16}/> Profile</p>
        <p><LogOut size={16}/> Logout</p>
      </nav>
    </aside>
  );
}

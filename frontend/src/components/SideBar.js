import React from "react";
import { Bot,Plus,Folder,User,LogOut} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Bot size={18} color="white" />
        CodeIntel AI
      </h2>
      <button className="sidebar-btn">
        <Plus size = {16}/>New Review
      </button>
      <div className="menu">
        <p><Folder size = {16}/>My Reviews</p>
        <p><User size={16}/>Profile</p>
        <p><LogOut size={16}/>Logout</p>
      </div>
    </aside>
  );
}

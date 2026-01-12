import React from "react";
import { Bot, Plus, Folder, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEdit } from "../context/EditorContext";

export default function Sidebar() {
  const {ResetCode,ResetResult} = useEdit();
  const navigate = useNavigate();

  const {logout} = useAuth();
  const handleclick = () => {
    logout();
  }

  const NewReviewClick = () => {
    
    ResetCode();
    ResetResult();
    navigate('/review');
  }

  const ProfileClick = () => {
    navigate("/me");
  }
  return (
    <aside className="sidebar">
      <div className="logo">
        <Bot size={22} />
        <span>CodeIntel AI</span>
      </div>

      <button className="sidebar-btn" onClick={NewReviewClick}>
        <Plus size={16} /> New Review
      </button>

      <nav className="menu">
        
        <p onClick={ProfileClick} style = {{cursor : "pointer"}}><User size={16}/> Profile</p>
        <p onClick={handleclick} style = {{ cursor :  "pointer"}}><LogOut size={16} /> Logout</p>
      </nav>
    </aside>
  );
}

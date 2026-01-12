import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";
import "./review.css";

export default function Profile() {
  const { user, loading } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.get("/review/my");
        setReviews(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoadingReviews(false);
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (!user) return null;

  return (
    <div className="profile-page">

      {/* LEFT FIXED PANEL */}
      <div className="profile-left">
        <h2>My Profile</h2>

        <div className="profile-block">
          <span className="label">Username</span>
          <span className="value">{user.username}</span>
        </div>

        <div className="profile-block">
          <span className="label">Email</span>
          <span className="value">{user.email}</span>
        </div>
      </div>

      {/* RIGHT SCROLLABLE CONTENT */}
      <div className="profile-right">
        <h2>My Reviews</h2>

        {loadingReviews ? (
          <p>Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <div className="review-grid">
            {reviews.map((r) => (
              <div key={r._id} className="review-card">

                <div className="review-top">
                  <span className="lang">{r.language.toUpperCase()}</span>
                  <span className="score">
                    {r.review?.score ? `${r.review.score}/10` : "Pending"}
                  </span>
                </div>

                <p className="summary">
                  {r.review?.summary || "No analysis available yet"}
                </p>

                <div className="review-meta">
                  <span>Issues: {r.review?.issues?.length || 0}</span>
                  <span>Suggestions: {r.review?.suggestions?.length || 0}</span>
                </div>

                <div className="date">
                  {new Date(r.createdAt).toLocaleString()}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

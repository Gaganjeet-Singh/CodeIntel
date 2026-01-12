import React, { useEffect } from "react";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, loading } = useAuth();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await api.get("/feedback/allreviews");
        console.log("REVIEWS:", res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReview();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
    </>
  );
}

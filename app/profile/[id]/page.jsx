"use client";

import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const MyProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("User");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
      setUser(data[0].creator.username);
    };

    fetchPosts();
  }, []);

  return (
    <Profile
      name={`${user}'s`}
      desc={`Welcome to ${user}'s profile page`}
      data={posts}
    />
  );
};

export default MyProfile;

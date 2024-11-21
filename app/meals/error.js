"use client";
import React from "react";

export default function Error({ error }) {
  const { message } = error;
  return (
    <main className="error">
      <h1>An error occurred !</h1>
      <p>{message}. Please try again later.</p>
    </main>
  );
}

import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { mealSlug } = params;
  const meal = getMeal(mealSlug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}
export default function MealsDetailPage({ params }) {
  const { mealSlug } = params;

  const meal = getMeal(mealSlug);
  if (!meal) {
    notFound();
  }
  const { title, summary, image, instructions, creator, creator_email, id } =
    meal;
  const instructionsFromated = instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill key={id} src={image} alt={title} />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructionsFromated,
          }}
        ></p>
      </main>
    </>
  );
}

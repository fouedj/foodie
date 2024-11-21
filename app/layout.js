import MainHeader from "@/components/main-header";
import classes from "./page.module.css";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classes.body}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

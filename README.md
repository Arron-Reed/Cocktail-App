# Cocktail App

This project was completed as part of a technical test to demonstrate my ability to build a front-end application using **Haunted** and **lit-html**. These libraries were new to me, and I thoroughly enjoyed learning and working with them throughout this project. I plan to continue developing and refining this app to showcase it in my portfolio as an example of my skills and the end product I can deliver.

## Features

- **Search for Cocktails**: Users can search for cocktails by name.
- **Cocktail List Display**: Results are displayed as cards, each showing a cocktail’s name, image, and brief instructions.
- **Shopping List**: Users can save cocktail ingredients to a shopping list for future reference.
- **Print Feature**: The shopping list can be printed for convenience.
- **LocalStorage Integration**: Ingredients in the shopping list are saved to **LocalStorage** so that they persist even if the page is reloaded.
- **Case-Insensitive Duplicates Handling**: A function normalizes ingredient names to lowercase to eliminate case-insensitive duplicates in the shopping list.

## Technologies Used

- **Haunted**: A modern library for creating web components with hooks.
- **lit-html**: A fast and lightweight library for rendering HTML templates.
- **JavaScript**: Core language for app logic.
- **CSS**: Used for styling components and creating a responsive layout.
- **LocalStorage**: For persisting shopping list data across sessions.

## View the App

You can view my deployed version at: [www.arronreed.com/cocktail-app](https://www.arronreed.com/cocktail-app)

## Extra Features Added

### LocalStorage for Shopping List
I implemented **LocalStorage** to save the shopping list data. This ensures that users do not lose their list when refreshing or closing the browser. It improves user experience by maintaining state across sessions.

### Case-Insensitive Duplicate Handling Using `Set`
To handle duplicates in the shopping list, I leveraged the `Set` object in JavaScript. A `Set` automatically eliminates duplicate entries, making it an efficient and simple solution for maintaining a clean and unique list of ingredients. Additionally, I normalized all ingredient names to lowercase before adding them to the `Set`. This approach ensures that case-insensitive duplicates (e.g., "Sugar" and "sugar") are treated as the same item, improving both functionality and user experience.

By combining the `Set` method with lowercase normalization, I ensured that the shopping list remains consistent, easy to manage, and free of redundant entries.

## What I Would Add with More Time

- **Filters**:
  - Add the ability to filter cocktails, e.g., by non-alcoholic options or categories like "Summer Drinks" or "Party Cocktails."
- **Detailed Cocktail Page**:
  - Create a more detailed view for each cocktail card that includes:
    - Full ingredients list.
    - Step-by-step instructions.
    - Estimated preparation time.
    - Reviews and ratings from users.
- **Improved UI/UX**:
  - Add animations and transitions to enhance the interactivity of the app.

## My Experience

This was my first time using **Haunted** and **lit-html**, and I found them to be lightweight and enjoyable to work with. Learning about hooks within Haunted and how to efficiently render templates using lit-html has been a valuable experience. I’m excited to continue building this app and leveraging these libraries for future projects.
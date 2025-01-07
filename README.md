# Haunted and lit-html Cocktail App

### **Live Version**
Visit the deployed version here: **[www.arronreed.com/cocktail-app](https://www.arronreed.com/cocktail-app)**.

This project is a **Cocktail App** that I originally built with **React** and later translated to use **Haunted** and **lit-html**, providing me with an incredible learning experience in web development, JavaScript, and app-building methodologies.

## Evolution of the App

1. **Started with React**:
   - Initially, I developed this app using **React**. It was fully functional and made use of React hooks for state management and rendering.
   - While React is a robust library, I wanted to explore lightweight alternatives.

2. **Transition to Haunted and lit-html**:
   - I translated the app to **Haunted** (a library for creating reactive web components) and **lit-html** (a fast, efficient template rendering library).
   - This process introduced challenges:
     - **React Hooks vs Haunted Hooks**: Adjusting to the differences between React's hooks and Haunted's hooks was initially tricky, especially when managing state within web components.
     - **Shadow DOM Encapsulation**: Haunted and lit-html default to using the Shadow DOM, which caused styling issues when deploying. These challenges deepened my understanding of encapsulation and global vs scoped styles.

3. **Rebuilding in Vanilla JavaScript**:
   - To overcome deployment issues, I rebuilt the app entirely in vanilla JavaScript using only Haunted and lit-html.
   - This stripped-down version avoided bundlers like Vite or React dependencies and became a lightweight, fast, and scalable application.

## About the App

### **Features**
- **Search for Cocktails**:
  - A dynamic search bar allows users to search for cocktails by name.
  - Uses the **CocktailDB API** to fetch cocktail data, including images, ingredients, and instructions.
  
- **Detailed Cocktail View**:
  - Clicking on a cocktail card opens a modal with detailed information, such as:
    - Ingredients (with measurements and thumbnails).
    - Instructions.
    - Category, glass type, and whether it's alcoholic or not.

- **Shopping List**:
  - Add ingredients for cocktails to a shopping list, which is stored locally in the browser using `localStorage`.
  - The shopping list includes features to remove items or print the list.

### **How It Works**
- The app leverages Haunted's hooks for managing state and lit-html for efficiently rendering templates.
- Each component is implemented as a web component (e.g., `<search-bar>`, `<cocktail-card>`, `<cocktail-list>`).
- Styles are applied globally, and the Shadow DOM is disabled (`useShadowDOM: false`) to simplify deployment and styling.

### **Live Version**
Visit the deployed version here: **[www.arronreed.com/cocktail-app](https://www.arronreed.com/cocktail-app)**.

## Benefits of Haunted and lit-html
- **Lightweight**: Unlike React, Haunted and lit-html don't require a heavy runtime or virtual DOM, making the app faster and smaller.
- **Simple State Management**: Haunted hooks offer a minimalist way to manage state without the complexity of React's extensive ecosystem.
- **Web Component Standard**: Using Haunted and lit-html allowed me to create reusable, encapsulated components that follow the web component standard.

## Challenges and Learning Curve
- **Shadow DOM & Encapsulation**:
  - The default use of the Shadow DOM in Haunted and lit-html caused issues with global styles and deployment.
  - Disabling the Shadow DOM (`useShadowDOM: false`) helped resolve these issues, but I had to learn how to manage styles without encapsulation.

- **Global vs Scoped Styles**:
  - Balancing scoped styles for components while maintaining global styling was a key challenge during the transition.

- **React Hooks vs Haunted Hooks**:
  - Adjusting to Haunted's hook system and understanding its lifecycle was initially a hurdle, but it helped deepen my understanding of JavaScript.

## Final Thoughts
Rebuilding this app in Haunted and lit-html was a rewarding experience that:
- Strengthened my programming and problem-solving skills.
- Gave me deeper insights into modern web development frameworks and libraries.
- Allowed me to create a fast, lightweight app with reusable web components.

Check out the live version and explore the app's functionality! Feel free to reach out with feedback or suggestions.

---

### Tech Stack
- **Haunted**: Reactive web components.
- **lit-html**: Efficient rendering of templates.
- **Vanilla JavaScript**: Lightweight, no bundlers like Vite or Webpack.
- **CocktailDB API**: For fetching cocktail data.

Thank you for checking out the Haunted and lit-html Cocktail App!

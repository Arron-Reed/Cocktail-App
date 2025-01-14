# Haunted and Lit-html Cocktail App

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
     - **Shadow DOM Encapsulation**: Implementing styles encapsulated within each component using the Shadow DOM required careful planning and adjustments for global vs scoped styles.

3. **Rebuilding in Vanilla JavaScript**:
   - To streamline the architecture and fully leverage the power of web components, I rebuilt the app entirely in vanilla JavaScript using only Haunted and lit-html.
   - This allowed me to use encapsulated styles with the Shadow DOM, providing a clean and modular structure without the need for external libraries like Vite or React.

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
- **Styles are encapsulated within each component** using the Shadow DOM, ensuring no style leakage or conflicts between components. This approach provides a clean and modular structure, aligning with modern web development practices.

### **Live Version**
Visit the deployed version here: **[www.arronreed.com/cocktail-app](https://www.arronreed.com/cocktail-app)**.

## Benefits of Haunted and lit-html
- **Lightweight**: Unlike React, Haunted and lit-html don't require a heavy runtime or virtual DOM, making the app faster and smaller.
- **Encapsulation with Shadow DOM**: Component styles are scoped and isolated from the rest of the application, avoiding potential style conflicts and enabling better modularity.
- **Web Component Standard**: Using Haunted and lit-html allowed me to create reusable, encapsulated components that adhere to the web component standard.

## Challenges and Learning Curve
- **Shadow DOM & Encapsulation**:
  - While the Shadow DOM provides style encapsulation, it also introduces a learning curve, particularly when balancing global styles with scoped styles for components.
  - Implementing styles within the Shadow DOM required a deeper understanding of how encapsulated styles interact with the rest of the app.

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

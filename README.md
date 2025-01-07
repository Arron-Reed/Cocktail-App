# Haunted-Lit Deploy Branch

This branch contains the deployed version of my app built with **Haunted** and **lit-html** web components. It includes all the changes made to ensure the app works as expected in a deployed environment.

## About the App
This app leverages **Haunted** for functional reactive web components and **lit-html** for efficient rendering. It features several components, including a search bar, cocktail card, and a shopping list, styled and managed using web components.

## Deployment Adjustments
While developing the app, I initially used `ShadowDOM` for encapsulation. However, during deployment, the encapsulation caused styling issues because styles within `ShadowDOM` were not applied correctly in the deployed environment. 

To resolve this:
- **ShadowDOM was disabled** by setting `useShadowDOM: false` in all components.
- CSS files were converted to `import` statements within each component's JavaScript to ensure proper styling.
- The app is bundled with these adjustments to ensure compatibility in production.

## Branch Purpose
This branch (`haunted-lit-deploy`) is specifically for the deployed version of the app. It includes:
- The `dist` folder and other deployment-related changes.
- Adjustments to ensure the app works without `ShadowDOM` encapsulation.

## Notes
- For the original code with `ShadowDOM` encapsulation, refer to the `haunted-lit-version` branch.
- This branch is suitable for direct deployment to hosting environments like GitHub Pages, Hostinger, or similar platforms.

## Feedback and Issues
If you encounter any issues or have suggestions, feel free to open an issue or contact me directly.

Happy exploring!

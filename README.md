## Design Norms

### File Structure
**Rezuan Riyad:** The pattern so far I followed ->
1. Inside **screens** directory , each sub-directory represent a UI page
2. From a sub-folder e,g, **autoBuyNow**, the **index.js** file is exported by default
3. All necessary dependents React Componets for this index,js are located in same directory as index.js file 
4. The componets may be used by other screens/pages should be in **components** directory
5. There might be a **utils.js** file inside a screen page. This file contains some customized components.
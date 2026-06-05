# TODO - GitHub Pages subfolder fix (React + Vite + React Router)

- [ ] Update Vite config `base` to `/AppSolsticeRp/` (if not already set)
- [x] Update `src/App.jsx` to use `BrowserRouter basename="/AppSolsticeRp"`
- [x] Replace `Hero/Home/Navbar/Footer/Play` image sources `/img/...` with `${import.meta.env.BASE_URL}img/...`
- [x] Fix `Jobs.jsx` image sources from `/public/img/...` to `${import.meta.env.BASE_URL}img/...`




- [ ] Rebuild (`npm run build`) and sanity-check dist output
- [ ] (Optional) Ensure SPA deep-link routing works on GitHub Pages (refresh on /jobs etc.)


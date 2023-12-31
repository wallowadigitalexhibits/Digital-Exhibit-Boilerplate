# Digital Exhibit Boilerplate

<img src="https://badgen.net/badge/status/ready/258723"> <img src="https://badgen.net/badge/release/v1.0.0/232d82">

Want to create a digital exhibit based on the Archive App data model? 

## Get Started

1. Decide on the name of your new React app. For example, if you chose `Wenaha Digital Exhibit`, you'd want to use a short name like `Wenaha Exhibit` and a slug of `wenaha-exhibit` using dashes instead of spaces. 

2. Clone the repository into a folder using the slug.

```
git@github.com:wallowadigitalexhibits/digital-exhibit-boilerplate.git wenaha-exhibit
```

3. Switch to the folder.

```
cd wenaha-exhibit
```

4. Init yourself a new git repository. 

```
rm -rf .git
git init
```

5. Edit every file to add your name, app name, version number, html title, and so on. 

6. Go to [favicon.ico](https://favicon.ico) and generate a set of favicons.

7. Replace the files in `public/favicons`.

8. Edit the `site.webmanifest` to add the app's name and short name.

9. Install the app.

```
cd wenaha-exhibit
npm install
```

10. Update this README.

11. Start the app.

``` 
npm run start
```

12. The page should automatically open in your default browser. Install the React Dev Tools if you haven't already, and inspect the data in the `<App />` component. Edit the JSON file or delete one of the images from the `files` folder to see things change in real-time. 

13. Add and commit your changes with a short but insightful commit message.

```
git add :/
git commit -m "Initial commit"
```

## Build and Deploy

1. Build the app.

```
npm run build
```

2. Copy the contents of the `build` folder to the web server of your choice.

3. Once the app deploys successfully, edit the deploy script and use that in the future instead. 

```
./deploy.sh
```

## Development Notes

There's no reason the main `<App />` component is a class. You can totally switch to using hooks. Do whatever you want!

The app's source of truth is the `db.json` file, which the app loads when the top-level `<App />` component mounts.

Any files in `public` will be available to the app without requiring you to rebuild and deploy. Refresh the browser page to remount the app, forcing it to reload the `db.json` file and re-render the page. You can manually add, remove, or edit the files and refresh the app to see the changes.

The schema of the data provided by the Wallowa Digital Exhibits will be defined by the [GraphletJS](https://github.com/wallowadigitalexhibits/graphletjs) specification. You can do whatever you want, but we'd appreciate it if you worked with the data in this format for portability. If you do something neat with the user interface, it might be something we could reuse elsewhere. 


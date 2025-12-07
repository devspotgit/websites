

Static Site Generator
---------------------

--- files ---
--> data.json
    The file contains all the data that will be displayed on the site. 
    If any change is needed, it's recommended to edit that file to update the new website content.

--> templates.js
    Javascript template used to display the page. data.json file is fed to the template in order to display the updated content.
    The template file is using standard javascript string template, no framework required.

--> map.js
    This module maps each template produced by "templates.js" with its corresponding route.

--> public
    The public folder contains all the static assets the site needs, like css, scripts, images...
    The site doesn't rely on any local images instead uses external link to display images from public storage.
    If you are using local images, just add the images folder inside public folder and update data.json with the appropriate link where it's required.
    Any custom links added from a local file should always start by public as root like "public/images/img.jpg".

--> genarator.js
    This is the main file, it's responsible for generating the whole site.

--- Requirement ---
--> nodejs environment

--- Usage ---
--> Navigate to the folder that has the "generator.js" file.
--> Run "node generator.js"
--> A folder named "site" will be created at the root, containing the whole site.
--> The site can be served directly from the root of the "site" folder




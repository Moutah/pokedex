# 🎯 Gotta list them all

Currently the app only has 2 pages : login and a dummy one. The first feature you'll need to do is to create a page for
listing all species.

## 1. Create a dedicated page

Keep it minimal for now, we just want something to prove it is plugged correctly and start fetching data.

## 2. Make the route

Edit the routing module to make the home url ending up displaying our new page.

> 💡 You can either plug the component directly or use a redirection.

## 3. Create a dedicated service

Now that we can navigate to the page, we need to start fetching some data. Create a service dedicated to species and
give it a method for loading all species.

> 💡 The API call for this is `GET /species`.

## 4. Plug the page to the service

Back in the page, consume the service to fetch the species list.

> 🟢 To ensure everything is well plugged together, display the data in the template with the `json` pipe and run the
> following test :
> ```shell
> npm run test -- service-is-plugged-to-list-page
> ```

## 5. Stylize the page

You can now work the data to render it nicely. Choose a layout you like and make sur every field of each species is on
the screen : `name` and `id` as text and `image` as a displayed image. 

> 🟢 Validate this feature with :
> ```shell
> npm run test -- list-page-works
> ```
